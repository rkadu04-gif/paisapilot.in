import React from 'react';
import { Shield, Users, Target, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About PaisaPilot</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Empowering India with accurate financial tools.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to PaisaPilot, India's most trusted and advanced online tool for all your loan calculation needs. Our mission is to simplify complex financial calculations and help you make informed decisions before taking on any debt.
          </p>

          <h2 className="flex items-center gap-2 mt-8">
            <Target className="w-6 h-6 text-emerald-500" />
            Our Mission
          </h2>
          <p>
            We believe that financial transparency is a right, not a privilege. By providing accurate, easy-to-use calculators for Home Loans, Personal Loans, Car Loans, and Credit Cards, we aim to protect borrowers from hidden costs and help them plan their financial journey effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <Shield className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100% Free & Unbiased</h3>
              <p className="text-slate-600 dark:text-slate-400">Our tools are completely free to use. We provide neutral calculations based purely on mathematical formulas, without favoring any specific bank.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <Users className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Built for India</h3>
              <p className="text-slate-600 dark:text-slate-400">Our calculators default to standard Indian banking rates, tenures, and formatting, making it effortless to plan your loans in INR.</p>
            </div>
          </div>

          <h2>Why Trust Us?</h2>
          <p>
            Our calculators use standard banking amortization formulas. We regularly update our articles and guidelines to align with the latest RBI guidelines and market trends, ensuring you have the most up-to-date knowledge when dealing with financial institutions.
          </p>

          <div className="mt-12 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30 not-prose text-center">
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-400 mb-2">Got Questions?</h3>
            <p className="text-emerald-800 dark:text-emerald-300 mb-4">We'd love to hear from you. Reach out to our team.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              <Mail className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
