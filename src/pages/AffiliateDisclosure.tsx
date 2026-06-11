import React from 'react';

export function AffiliateDisclosure() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          <h1>Affiliate Disclosure</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Transparency and trust are at the core of PaisaPilot. We believe in keeping our users fully informed about how we sustain this website and keep our financial tools completely free.
          </p>

          <h2>How We Earn Revenue</h2>
          <p>
            PaisaPilot participates in various affiliate marketing programs designed to provide a means for sites to earn advertising fees by advertising and linking to partner institutions. This means that when you click on certain links to credit cards, loans, or other financial products and subsequently get approved or make a purchase, we may receive a small commission from the respective bank or financial institution.
          </p>

          <h2>Does It Cost You Anything?</h2>
          <p>
            <strong>Absolutely not.</strong> Our commission comes directly from the partner institution’s marketing budget. Your loan interest rate, credit card joining fees, and terms remain exactly the same whether you apply through our links or directly via the bank's website. In some cases, applying through our links might even give you access to exclusive welcome benefits or cashback.
          </p>

          <h2>Our Commitment to Unbiased Information</h2>
          <p>
            While we do earn commissions, it does not dictate our recommendations or the outputs of our calculators. 
          </p>
          <ul>
            <li><strong>Calculations are pure math:</strong> Our EMI calculators generate results based strictly on the formulas and variables you input. No bank can pay us to alter these mathematical facts.</li>
            <li><strong>Objective comparisons:</strong> When we list the "Best Credit Cards," we evaluate them based on their actual features (reward rates, lounge access, fees), ensuring you get the most accurate and beneficial information.</li>
          </ul>

          <h2>Third-Party Endorsements</h2>
          <p>
            The views and opinions expressed on this website are purely those of the authors. Any product claim, statistic, quote, or other representation about a financial product or service should be verified with the manufacturer, provider, or party in question.
          </p>
          
          <p>
            If you have any questions regarding our affiliate relationships, please feel free to reach out to us via our Contact Page.
          </p>
        </div>
      </div>
    </div>
  );
}
