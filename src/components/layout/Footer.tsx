import React from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                PaisaPilot
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's most trusted and advanced loan EMI calculator. Calculate your monthly installments for Home, Personal, Car loans, and optimize your financial planning.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/calculator/home-loan" className="block py-1 hover:text-emerald-400 transition-colors">Home Loan EMI</Link></li>
              <li><Link to="/calculator/personal-loan" className="block py-1 hover:text-emerald-400 transition-colors">Personal Loan EMI</Link></li>
              <li><Link to="/calculator/car-loan" className="block py-1 hover:text-emerald-400 transition-colors">Car Loan EMI</Link></li>
              <li><Link to="/calculator/credit-card" className="block py-1 hover:text-emerald-400 transition-colors">Credit Card EMI</Link></li>
              <li><Link to="/calculator/sip" className="block py-1 hover:text-emerald-400 transition-colors">SIP Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/blog" className="block py-1 hover:text-emerald-400 transition-colors">Financial Blog</Link></li>
              <li><Link to="/credit-cards" className="block py-1 hover:text-emerald-400 transition-colors">Best Credit Cards</Link></li>
              <li><Link to="/loan-tips" className="block py-1 hover:text-emerald-400 transition-colors">Loan Approval Tips</Link></li>
              <li><Link to="/cibil-score" className="block py-1 hover:text-emerald-400 transition-colors">Improve CIBIL Score</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="block py-1 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="block py-1 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="block py-1 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="block py-1 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/affiliate-disclosure" className="block py-1 hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PaisaPilot. All rights reserved.</p>
          <p>
            Designed for financial freedom in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
