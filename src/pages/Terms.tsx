import React from 'react';

export function Terms() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          <h1>Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Welcome to PaisaPilot. By accessing or using our website, you signify that you have read, understood, and agree to be bound by these Terms of Service.
          </p>

          <h2>1. Use of Calculators and Tools</h2>
          <p>
            The EMI calculators and financial tools provided on this website are for informational and educational purposes only. The results generated are estimates based on the formulas implemented and the data you input. 
          </p>
          <p>
            <strong>Disclaimer:</strong> PaisaPilot does not guarantee the accuracy of the calculations. Actual loan figures, interest rates, and EMI amounts provided by banks and financial institutions may vary due to processing fees, GST, fluctuations in floating interest rates, and specific bank policies.
          </p>

          <h2>2. Financial Advice Disclaimer</h2>
          <p>
            We are not a bank, NBFC, or registered financial advisory firm. The content, guides, and calculator outputs on this site do not constitute professional financial advice. Always consult a certified financial planner or direct banking representative before making significant financial decisions.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, and software, is the property of PaisaPilot and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without explicit permission.
          </p>

          <h2>4. Affiliate and Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites, including affiliate links to credit cards and loan products. If you click on a third-party link, you will be directed to that site. We assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. 
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall PaisaPilot, its developers, or partners be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our website or the information it provides.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. Your continued use of the website after any changes constitutes acceptance of the new Terms.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any queries regarding these Terms of Service, please contact us via our Contact Page.
          </p>
        </div>
      </div>
    </div>
  );
}
