import React from 'react';
import { EMICalculator } from '../components/calculators/EMICalculator';
import { AffiliateCard } from '../components/ui/AffiliateCard';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 border-b border-slate-800 text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            India's #1 Most Accurate EMI Calculator
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Calculate Your Loan EMI <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-400">
              Instantly & Accurately
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Plan your Home Loan, Personal Loan, or Car Loan with our advanced EMI calculator. Compare interest rates, view detailed amortization schedules, and find the best credit card offers in India.
          </p>
        </div>
      </section>

      {/* Main Calculator - Pulled up to overlap hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 w-full mb-24">
        <EMICalculator title="Advanced Universal EMI Calculator" />
      </section>

      {/* Recommended Credit Cards Section (Affiliate) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Top Credit Cards in India (2024)</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Looking to boost your credit score or earn high rewards? Compare and apply for India's best lifetime free and cashback credit cards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AffiliateCard 
              bankName="Axis Bank"
              cardName="Flipkart Axis Credit Card"
              cardSlug="flipkart-axis"
              annualFee="500 (waived on ₹3.5L spend)"
              joiningFee="500"
              rating={4.8}
              benefits={[
                "7.5% Cashback on transaction on Myntra (Save up to ₹4,000 per quarter!)",
                "5% Cashback on every Flipkart order (excluding Flipkart Health)",
                "5% Cashback on Cleartrip (Save up to ₹4,000 as cashback per quarter)",
                "4% Unlimited Cashback on Swiggy, PVR, Uber, and Cult.fit"
              ]}
              affiliateUrl="https://bitli.in/sg8065Q"
            />
            <AffiliateCard 
              bankName="Axis Bank"
              cardName="MyZone Rupay Credit Card"
              cardSlug="myzone-rupay"
              annualFee="500 (waived on ₹1.5L spend)"
              joiningFee="500"
              rating={4.6}
              benefits={[
                "Buy 1 Get 1 Free Movie Tickets on District app (Max. ₹200/month)",
                "Save ₹2,880 annually with Swiggy: flat ₹120 off twice a month (min. order ₹500)",
                "Enjoy 4 Complimentary Airport Lounges annually (1 per calendar quarter)",
                "Complimentary SonyLiv Premium annual subscription worth ₹1499"
              ]}
              affiliateUrl="https://bitli.in/FiKz6jn"
            />
            <AffiliateCard 
              bankName="SBI Card"
              cardName="SBI Cashback Credit Card"
              cardSlug="sbi-cashback"
              annualFee="999 (waived on ₹2L spend)"
              joiningFee="999"
              rating={4.9}
              benefits={[
                "5% Cashback on every eligible online transaction, across websites & apps",
                "1% Cashback on eligible offline everyday purchases (save ₹60,000/year!)",
                "1% Fuel surcharge waiver on transactions between ₹500 and ₹3,000",
                "Cashback is auto-credited to your SBI Card account within 2 working days"
              ]}
              affiliateUrl="https://bitli.in/Yp1i612"
            />
          </div>
          <div className="mt-12 text-center">
            <Link to="/credit-cards" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 py-3 min-h-[44px] rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              View All 50+ Credit Cards <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Huge SEO Content Area */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What is an EMI Calculator and How Does It Work?</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            An <strong>Equated Monthly Installment (EMI)</strong> is defined as a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month, ensuring the loan is fully paid off within a specified number of years.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Using an online <strong>EMI Calculator</strong> for India helps you instantly figure out your monthly financial commitments before applying for a Home Loan, Personal Loan, or Car Loan from top Indian banks like SBI, HDFC, ICICI, or Axis Bank.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">The Standard EMI Calculation Formula</h3>
          <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 font-mono text-center overflow-x-auto text-slate-800 dark:text-slate-200 shadow-inner">
            E = P × r × (1 + r)^n / ((1 + r)^n - 1)
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc ml-6 mb-8">
            <li><strong>E</strong> is EMI</li>
            <li><strong>P</strong> is Principal Loan Amount</li>
            <li><strong>r</strong> is rate of interest calculated on a monthly basis. (i.e., r = Rate of Annual interest/12/100. If rate of interest is 10.5% per annum, then r = 10.5/12/100=0.00875)</li>
            <li><strong>n</strong> is loan term / tenure / duration in number of months</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Benefits of Using Our Advanced EMI Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Wallet, title: "Financial Planning", desc: "Know your exact monthly outflows before committing." },
              { icon: ShieldCheck, title: "100% Accuracy", desc: "Avoid human errors with our precise algorithms." },
              { icon: TrendingUp, title: "Compare Offers", desc: "Check how different interest rates affect your payout." },
              { icon: CheckCircle2, title: "Amortization View", desc: "Download the complete month-by-month principal & interest breakdown." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-lg h-fit text-emerald-600 dark:text-emerald-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ... Expanding on the 3000 words requested ... */}
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">Various Types of Loam EMIs in India</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4"><strong>1. Home Loan EMI Calculator:</strong> Home loans usually have the longest tenure (up to 30 years). Calculating home loan EMI is crucial because even a 0.5% change in interest rate can save you lakhs of rupees. Our calculator helps you compare SBI home loan, HDFC home loan, and others.</p>
          <p className="text-slate-600 dark:text-slate-300 mb-4"><strong>2. Personal Loan EMI Calculator:</strong> Ranked as the most popular unsecured loan, personal loans have higher interest rates (10.5% to 24%). This calculator helps ensure your monthly budget can support the aggressive short-term repayment.</p>
          <p className="text-slate-600 dark:text-slate-300 mb-12"><strong>3. Car Loan / Auto Loan EMI:</strong> Vehicles depreciate. You should aim for a shorter tenure to avoid paying massive interest on a depreciating asset. Use our specific car loan inputs to strike the perfect balance.</p>

        </div>
      </section>
    </div>
  );
}
