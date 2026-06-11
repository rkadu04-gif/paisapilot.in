import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { EMICalculator } from '../components/calculators/EMICalculator';
import { SIPCalculator } from '../components/calculators/SIPCalculator';
import { HelpCircle, AlertCircle, FileText } from 'lucide-react';

export function CalculatorPage() {
  const { type } = useParams<{ type: string }>();

  const pageData = useMemo(() => {
    switch (type) {
      case 'sip':
        return {
          title: "Systematic Investment Plan (SIP) Calculator",
          type: "sip" as const,
          description: "Calculate your mutual fund returns and wealth creation over time with our precise SIP calculator.",
          faqs: [
            { q: "What is SIP?", a: "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in a mutual fund scheme." },
            { q: "How much return can I expect?", a: "Historically, equity mutual funds in India have delivered 12-15% average annual returns over the long term (7+ years)." }
          ],
          defaultAmount: 0, defaultRate: 0, defaultTenure: 0 // not used by SIPCalculator
        };
      case 'home-loan':
        return {
          title: "Home Loan EMI Calculator",
          type: "home" as const,
          defaultAmount: 5000000,
          defaultRate: 8.5,
          defaultTenure: 20,
          tenureType: 'years',
          description: "Calculate your Home Loan EMI, check eligibility, and view a detailed amortization schedule for top Indian banks.",
          faqs: [
            { q: "What is a good Home Loan interest rate?", a: "Currently, anything between 8.35% to 8.75% is considered a highly competitive home loan rate in India." },
            { q: "Can I pre-pay my home loan?", a: "Yes, as per RBI guidelines, floating rate home loans have zero pre-payment or foreclosure charges." }
          ]
        };
      case 'personal-loan':
        return {
          title: "Personal Loan EMI Calculator",
          type: "personal" as const,
          defaultAmount: 500000,
          defaultRate: 14.5,
          defaultTenure: 3,
          tenureType: 'years',
          description: "Plan your personal loan repayment. High-interest unsecured loans require careful EMI planning to avoid debt traps.",
          faqs: [
            { q: "What affects my personal loan rate?", a: "Your CIBIL score, employment stability, employer category, and existing liabilities majorly affect the rate." },
            { q: "Is a processing fee charged?", a: "Yes, personal loans usually carry a 1% to 2.5% processing fee deducted upfront." }
          ]
        };
      case 'car-loan':
        return {
          title: "Car Loan EMI Calculator",
          type: "car" as const,
          defaultAmount: 800000,
          defaultRate: 9.0,
          defaultTenure: 60,
          tenureType: 'months',
          description: "Find out your exact monthly Car Loan EMI for new or used vehicles.",
          faqs: [
            { q: "What tenure is best for a car loan?", a: "Ideally 3 to 5 years. A longer tenure means you pay more interest on a depreciating asset." }
          ]
        };
      case 'credit-card':
        return {
          title: "Credit Card EMI Calculator",
          type: "general" as const,
          defaultAmount: 50000,
          defaultRate: 15.0,
          defaultTenure: 6,
          tenureType: 'months',
          description: "Converting credit card bills to EMI? Calculate the interest you will pay.",
          faqs: [
            { q: "Is credit card EMI interest free?", a: "No, unless it is a specific 'No Cost EMI' offer, credit card EMIs generally attract 14% to 18% p.a. interest plus a processing fee + GST." }
          ]
        };
      default:
        return {
          title: "Universal EMI Calculator",
          type: "general" as const,
          defaultAmount: 1000000,
          defaultRate: 10,
          defaultTenure: 5,
          tenureType: 'years',
          description: "Calculate EMIs for any loan type in India.",
          faqs: []
        };
    }
  }, [type]);

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {pageData.description}
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-5xl mx-auto mb-16">
          {pageData.type === 'sip' ? (
            <SIPCalculator />
          ) : (
            <EMICalculator 
              type={pageData.type}
              title={pageData.title}
              defaultAmount={pageData.defaultAmount}
              defaultRate={pageData.defaultRate}
              defaultTenure={pageData.defaultTenure}
            />
          )}
        </div>

        {/* SEO & Contextual Info Section specific to this loan type */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-500" /> 
                Guide & Details
              </h2>
              <div className="prose prose-slate dark:prose-invert">
                {pageData.type === 'sip' ? (
                  <>
                    <p>
                      Starting a Systematic Investment Plan (SIP) requires discipline and a long-term vision. The calculator above helps you project potential wealth accumulation through the power of compounding. Small amounts invested consistently over a long period can grow into a substantial corpus.
                    </p>
                    <p>
                      Remember, extending your investment timeframe has a much more dramatic impact on wealth creation than small increments in the expected return rate. Time in the market always beats timing the market.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Taking a {pageData.title.replace(' EMI Calculator', '')} requires a fundamental understanding of interest structures. Use the table generated above to view a complete amortization schedule. It is highly recommended to download the PDF report and share it with your financial advisor or compare it with physical bank quotes.
                    </p>
                    <p>
                      Remember, a longer tenure dramatically reduces your monthly EMI, but significantly increases the absolute total interest you will pay to the banking institution.
                    </p>
                  </>
                )}
              </div>
            </div>

            {pageData.faqs.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-emerald-500" /> 
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {pageData.faqs.map((faq, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
              <h3 className="font-bold text-emerald-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Pro Tip
              </h3>
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                {pageData.type === 'sip' 
                  ? "Equity Mutual Funds carry market risk. Historical returns do not guarantee future performance. Always consider inflation (typically 6-7% in India) when factoring your real wealth gains."
                  : "Banks often charge processing fees and GST on top of the loan. Ensure you account for a ~1% to 2% increment on your overall expected outflow from cash."}
              </p>
            </div>
            

          </div>
        </div>

      </div>
    </div>
  );
}
