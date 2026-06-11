import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Download, Share2, Copy, RefreshCcw } from 'lucide-react';
import { calculateEMI, generateAmortizationSchedule, formatCurrency } from '../../utils/calculator';
import { cn } from '../../lib/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CalculatorProps {
  type?: 'home' | 'personal' | 'car' | 'general';
  title?: string;
  defaultAmount?: number;
  defaultRate?: number;
  defaultTenure?: number;
}

export function EMICalculator({
  type = 'general',
  title = 'EMI Calculator',
  defaultAmount = 1000000,
  defaultRate = 8.5,
  defaultTenure = 60,
}: CalculatorProps) {
  const [principal, setPrincipal] = useState<number>(defaultAmount);
  const [rate, setRate] = useState<number>(defaultRate);
  const [tenure, setTenure] = useState<number>(defaultTenure);
  const [tenureType, setTenureType] = useState<'months' | 'years'>('months');
  const [showSchedule, setShowSchedule] = useState(false);

  const tenureInMonths = tenureType === 'years' ? tenure * 12 : tenure;
  
  const result = calculateEMI(principal, rate, tenureInMonths);
  const schedule = generateAmortizationSchedule(principal, rate, tenureInMonths, result.emi);

  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [result.principal, result.totalInterest],
        backgroundColor: ['#4f46e5', '#10b981'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const },
    },
  };

  const copyResult = () => {
    const text = `Loan Amount: ${formatCurrency(result.principal)}\nEMI: ${formatCurrency(result.emi)}\nTotal Interest: ${formatCurrency(result.totalInterest)}`;
    navigator.clipboard.writeText(text);
    alert('Result copied to clipboard!');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Draw PaisaPilot branding header
    // 1. Draw Emerald icon/logo background
    doc.setFillColor(5, 150, 105); // emerald-600
    doc.rect(14, 12, 10, 10, 'F');
    
    // Draw small visual math symbols to resemble a calculator icon
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('+', 16, 16.5);
    doc.text('=', 20, 20.5);
    
    // 2. Draw PaisaPilot brand title
    doc.setTextColor(15, 23, 42); // slate-900
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('PaisaPilot', 27, 20);
    
    // 3. Draw a subtle tagline
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text('Your Trusted Financial Navigator', 27, 24);
    
    // 4. Draw horizontal divider
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.5);
    doc.line(14, 27, 196, 27);
    
    // 5. Document Header & Timestamp
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(`${title}`, 14, 38);
    
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`Generated: ${dateStr}`, 196, 38, { align: 'right' });

    const formatPDFCurrency = (amount: number) => `Rs. ${Math.round(amount).toLocaleString('en-IN')}`;

    // 6. Summary Details Styling
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105); // slate-600

    doc.text(`Loan Amount:`, 14, 48);
    doc.text(`Interest Rate:`, 14, 54);
    doc.text(`Tenure:`, 14, 60);
    doc.text(`Monthly EMI:`, 14, 66);
    doc.text(`Total Interest Payable:`, 14, 72);
    doc.text(`Total Payment:`, 14, 78);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(formatPDFCurrency(result.principal), 55, 48);
    doc.text(`${rate}%`, 55, 54);
    doc.text(`${tenureInMonths} Months`, 55, 60);
    doc.text(formatPDFCurrency(result.emi), 55, 66);
    doc.text(formatPDFCurrency(result.totalInterest), 55, 72);
    doc.text(formatPDFCurrency(result.totalPayment), 55, 78);

    const tableData = schedule.map(row => [
      row.month,
      formatPDFCurrency(row.principal),
      formatPDFCurrency(row.interest),
      formatPDFCurrency(row.balance)
    ]);

    autoTable(doc, {
      startY: 85,
      head: [['Month', 'Principal Paid', 'Interest Paid', 'Balance']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [5, 150, 105] }, // emerald-600 rgb
      styles: { fontSize: 9 },
    });

    // Save PDF
    const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeTitle}-report.pdf`);
  };

  const handleReset = () => {
    setPrincipal(defaultAmount);
    setRate(defaultRate);
    setTenure(defaultTenure);
    setTenureType('months');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Loan Amount (₹)</label>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {formatCurrency(principal)}
                </div>
              </div>
              <input
                type="range"
                min={10000}
                max={100000000}
                step={10000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>10K</span>
                <span>10Cr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Interest Rate (% p.a.)</label>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {rate}%
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Loan Tenure</label>
                <div className="flex rounded-md overflow-hidden border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setTenureType('months')}
                    className={cn(
                      "px-4 py-2 min-h-[44px] text-sm font-medium transition-colors",
                      tenureType === 'months' ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    )}
                  >
                    Mo
                  </button>
                  <button
                    onClick={() => setTenureType('years')}
                    className={cn(
                      "px-4 py-2 min-h-[44px] text-sm font-medium transition-colors",
                      tenureType === 'years' ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    )}
                  >
                    Yr
                  </button>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={tenureType === 'months' ? 360 : 30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-center mt-2">
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {tenure} {tenureType}
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[300px] aspect-square relative">
              <Pie data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 bg-transparent dark:bg-slate-800/50">
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Monthly EMI</p>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(result.emi)}</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Principal Amount</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(result.principal)}</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Interest</p>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(result.totalInterest)}</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Amount</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(result.totalPayment)}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setShowSchedule(!showSchedule)} className="flex items-center gap-2 px-4 py-2 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            {showSchedule ? "Hide Schedule" : "Show Schedule"}
          </button>
          <button onClick={downloadPDF} className="flex items-center gap-2 px-4 py-2 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" /> PDF
          </button>
          <button onClick={copyResult} className="flex items-center gap-2 px-4 py-2 min-h-[44px] bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium transition-colors">
            <Copy className="w-4 h-4" /> Copy
          </button>
        </div>
        <button onClick={handleReset} className="flex items-center justify-center gap-2 px-4 py-2 min-h-[44px] text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
          <RefreshCcw className="w-4 h-4" /> Reset
        </button>
      </div>

      {/* Amortization Schedule Table */}
      {showSchedule && (
        <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Amortization Schedule</h3>
          <div className="overflow-x-auto max-h-[400px] overflow-y-auto w-full">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Month</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Principal Paid</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Interest Paid</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {schedule.map((row) => (
                  <tr key={row.month} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3">{row.month}</td>
                    <td className="px-4 py-3">{formatCurrency(row.principal)}</td>
                    <td className="px-4 py-3">{formatCurrency(row.interest)}</td>
                    <td className="px-4 py-3">{formatCurrency(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
