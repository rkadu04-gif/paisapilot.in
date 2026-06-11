import React from 'react';
import { CheckCircle2, ShieldAlert, FileText, TrendingUp } from 'lucide-react';

export function LoanTips() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Ultimate Loan Approval Tips</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Master the criteria Indian banks use to evaluate your loan application.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-lg">
            Getting a loan approved in India, whether it's a Home Loan, Personal Loan, or Car Loan, depends heavily on your financial hygiene. Banks assess the risk of lending to you. By understanding their criteria, you can drastically increase your chances of quick approval with the best interest rates.
          </p>

          <div className="not-prose grid gap-6 my-10">
            <div className="flex gap-4 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-lg h-fit text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Optimize Your Debt-to-Income (DTI) Ratio</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Your FOIR (Fixed Obligation to Income Ratio) should ideally be <strong>below 40% to 50%</strong>. This means if your in-hand salary is ₹1,00,000, your total monthly EMIs (including the new loan) should not exceed ₹50,000. Pay off smaller debts before applying for a massive home loan.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-lg h-fit text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Maintain a Stellar CIBIL Score</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A CIBIL score of <strong>750 or above</strong> is the golden ticket. Not only does it ensure swift approval, but it also helps you negotiate lower interest rates. Banks trust borrowers with a proven track record of timely repayment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-lg h-fit text-emerald-600 dark:text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Avoid Multiple Hard Inquiries</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  When you apply for a loan at multiple banks simultaneously, each bank pulls your credit report (a 'hard inquiry'). Too many hard inquiries in a short duration signal 'credit-hungry' behavior, significantly hurting your score and lowering approval odds.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-lg h-fit text-emerald-600 dark:text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">4. Stable Employment and Documentation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Banks prefer applicants with a stable job (at least 1-2 years with the current employer) or a consistently profitable business. Ensure your KYC, 6 months bank statements, latest 3 months salary slips, and Form 16/ITR are perfectly matched and spotless.
                </p>
              </div>
            </div>
          </div>

          <h2>Additional Best Practices</h2>
          <ul>
            <li><strong>Include a Co-Applicant:</strong> Adding a working spouse as a co-applicant consolidates your incomes, significantly boosting loan eligibility.</li>
            <li><strong>Accurate Details:</strong> Ensure your stated income matches your tax returns exactly. A mismatch is an instant red flag.</li>
            <li><strong>Don't Change Jobs During Processing:</strong> Wait until the loan is fully disbursed before switching employers, as banks often do a final verification.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
