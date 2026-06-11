import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Download, Copy, RefreshCcw } from 'lucide-react';
import { formatCurrency } from '../../utils/calculator';

ChartJS.register(ArcElement, Tooltip, Legend);

export function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(12);
  const [timePeriodYears, setTimePeriodYears] = useState<number>(10);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  // SIP Formula: M = P * ((1 + i)^n - 1) / i * (1 + i)
  const calculateSIP = () => {
    const P = monthlyInvestment;
    const n = timePeriodYears * 12; // total number of months
    const i = expectedReturnRate / 12 / 100; // monthly rate of return

    const maturityValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvestment = P * n;
    const wealthGained = maturityValue - totalInvestment;

    return {
      maturityValue,
      totalInvestment,
      wealthGained
    };
  };

  const result = calculateSIP();

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
    doc.text(`Systematic Investment Plan (SIP) Report`, 14, 38);
    
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

    doc.text(`Monthly Investment:`, 14, 48);
    doc.text(`Expected Rate of Return:`, 14, 54);
    doc.text(`Investment Period:`, 14, 60);
    doc.text(`Total Invested Amount:`, 14, 66);
    doc.text(`Estimated Wealth Gained:`, 14, 72);
    doc.text(`Maturity Value (Future Wealth):`, 14, 78);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(formatPDFCurrency(monthlyInvestment), 75, 48);
    doc.text(`${expectedReturnRate}% p.a.`, 75, 54);
    doc.text(`${timePeriodYears} Years`, 75, 60);
    doc.text(formatPDFCurrency(result.totalInvestment), 75, 66);
    doc.text(formatPDFCurrency(result.wealthGained), 75, 72);
    doc.text(formatPDFCurrency(result.maturityValue), 75, 78);

    // Generate yearly schedule table
    const yearlySchedule = [];
    for (let y = 1; y <= timePeriodYears; y++) {
      const P = monthlyInvestment;
      const n = y * 12; // months
      const i = expectedReturnRate / 12 / 100; // monthly rate
      const matVal = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const totInv = P * n;
      const gain = matVal - totInv;
      yearlySchedule.push([
        `Year ${y}`,
        formatPDFCurrency(totInv),
        formatPDFCurrency(gain),
        formatPDFCurrency(matVal)
      ]);
    }

    autoTable(doc, {
      startY: 85,
      head: [['Year', 'Total Invested', 'Wealth Gained', 'Future Value']],
      body: yearlySchedule,
      theme: 'grid',
      headStyles: { fillColor: [5, 150, 105] }, // emerald-600 rgb
      styles: { fontSize: 9 },
    });

    // Save PDF
    doc.save(`sip-investments-report.pdf`);
  };

  const copyResult = () => {
    const text = `Monthly Investment: ${formatCurrency(monthlyInvestment)}\nExpected Return: ${expectedReturnRate}%\nPeriod: ${timePeriodYears} Years\nTotal Investment: ${formatCurrency(result.totalInvestment)}\nWealth Gained: ${formatCurrency(result.wealthGained)}\nTotal Value: ${formatCurrency(result.maturityValue)}`;
    navigator.clipboard.writeText(text);
    alert('Result copied to clipboard!');
  };

  const handleReset = () => {
    setMonthlyInvestment(10000);
    setExpectedReturnRate(12);
    setTimePeriodYears(10);
  };

  const chartData = {
    labels: ['Invested Amount', 'Wealth Gained'],
    datasets: [
      {
        data: [result.totalInvestment, result.wealthGained],
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

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">SIP Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Monthly Investment</label>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {formatCurrency(monthlyInvestment)}
                </div>
              </div>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expected Return Rate (p.a)</label>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {expectedReturnRate}%
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={expectedReturnRate}
                onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Time Period (Years)</label>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-sm font-semibold dark:text-white">
                  {timePeriodYears} Yr
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={timePeriodYears}
                onChange={(e) => setTimePeriodYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
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
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 bg-transparent dark:bg-slate-800/50">
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Invested Amount</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(result.totalInvestment)}</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Estimated Returns</p>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(result.wealthGained)}</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Value</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(result.maturityValue)}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setShowSchedule(!showSchedule)} className="flex items-center gap-2 px-4 py-2 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
            {showSchedule ? "Hide Yearly Plan" : "Show Yearly Plan"}
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

      {/* Yearly Plan Details Table */}
      {showSchedule && (
        <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Yearly Growth Schedule</h3>
          <div className="overflow-x-auto max-h-[400px] overflow-y-auto w-full">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Year</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Total Invested</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Wealth Gained</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Future Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {Array.from({ length: timePeriodYears }, (_, i) => {
                  const y = i + 1;
                  const P = monthlyInvestment;
                  const n = y * 12;
                  const rateFactor = expectedReturnRate / 12 / 100;
                  const matVal = P * ((Math.pow(1 + rateFactor, n) - 1) / rateFactor) * (1 + rateFactor);
                  const totInv = P * n;
                  const gain = matVal - totInv;
                  return (
                    <tr key={y} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 font-medium">Year {y}</td>
                      <td className="px-4 py-3">{formatCurrency(totInv)}</td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">{formatCurrency(gain)}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{formatCurrency(matVal)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
