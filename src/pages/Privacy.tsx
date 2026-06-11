import React from 'react';

export function Privacy() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            At PaisaPilot, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            Our website is designed to be largely privacy-first. When you use our loan calculators, all numerical inputs (such as loan amount, interest rate, and tenure) are processed locally in your browser.
          </p>
          <ul>
            <li><strong>Usage Data:</strong> We may collect standard analytics data such as your IP address, browser type, pages visited, and time spent on our site to improve our services using tools like Google Analytics.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance user experience, save your preferences (like dark mode), and serve personalized advertisements through Google AdSense.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service.</li>
            <li>To monitor the usage of our Service and analyze trends.</li>
            <li>To display targeted marketing and advertising (via AdSense or Affiliate links).</li>
            <li>To respond to your queries when you contact us.</li>
          </ul>

          <h2>3. Third-Party Services & Advertising</h2>
          <p>
            We use third-party services such as Google AdSense to serve ads. Google places cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>.
          </p>
          <p>
            We also participate in affiliate marketing programs. If you click on an affiliate link (e.g., applying for a credit card), you will be redirected to the respective financial institution's secure website, which has its own independent privacy policy.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We value your trust in providing us your information and strive to use commercially acceptable means of protecting it. However, remember that no method of transmission over the internet, or method of electronic storage, is 100% secure.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@paisapilot.in">privacy@paisapilot.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
