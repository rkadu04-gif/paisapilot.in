import React from 'react';
import { Target, Activity, CreditCard, RefreshCw } from 'lucide-react';

export function CibilScore() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide mb-4">
            CREDIT HEALTH
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">How to Improve Your CIBIL Score</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">A step-by-step guide to achieving a 750+ credit score in India.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-lg">
            Your CIBIL score (ranging from 300 to 900) is the most critical metric banks use to gauge your creditworthiness. A score above 750 is generally considered excellent, granting you quick approvals and lower interest rates. If your score is low, here is how you can systematically rebuild it.
          </p>

          <h2 className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-500" />
            1. Master Your Payment History (30% Impact)
          </h2>
          <p>
            Your payment track record is the heaviest component of your score. 
          </p>
          <ul>
            <li><strong>Never miss an EMI or credit card payment.</strong> Even a single 30-day delay can drop your score by up to 50 points.</li>
            <li><strong>Set up auto-debit:</strong> Avoid manual errors by enabling auto-pay for your minimum dues or full bill amount.</li>
            <li><strong>Pay the full total due:</strong> Only paying the 'Minimum Due' avoids late fees but still incurs hefty interest, which reflects poorly on credit management over time.</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-500" />
            2. Optimize Credit Utilization Ratio (CUR) (25% Impact)
          </h2>
          <p>
            Your CUR is the ratio of your outstanding credit card balances to your total credit limits. 
          </p>
          <ul>
            <li><strong>The 30% Rule:</strong> Try to keep your utilization under 30%. If your limit is ₹1,00,000, don't spend more than ₹30,000 per month on that card.</li>
            <li><strong>Request a limit increase:</strong> If your bank offers a limit upgrade, accept it. It instantly lowers your CUR (assuming your spending remains the same).</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-emerald-500" />
            3. Maintain Credit Age & History
          </h2>
          <p>
            Lenders love long, stable credit histories. It gives them more data to assess your behavior.
          </p>
          <ul>
            <li><strong>Never close your oldest credit card:</strong> Even if you don't use it much, keeping your oldest card active anchors the average age of your credit history.</li>
            <li>If the oldest card has high annual fees, try converting it to a lifetime-free variant with the same bank rather than closing it completely.</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-emerald-500" />
            4. Balance Your Credit Mix
          </h2>
          <p>
            Having a healthy mix of <strong>secured loans</strong> (Home Loan, Auto Loan) and <strong>unsecured loans</strong> (Personal Loan, Credit Cards) positively impacts your score. Borrowers heavily skewed towards unsecured loans are viewed as higher risk.
          </p>

          <h2>5. Check for Errors Routinely</h2>
          <p>
            TransUnion CIBIL and other bureaus sometimes make errors. An incorrect late payment entry, or a loan mapped to your PAN by mistake, can destroy your score. Pull your free annual credit report and raise disputes for any discrepancies immediately on the CIBIL website.
          </p>
        </div>
      </div>
    </div>
  );
}
