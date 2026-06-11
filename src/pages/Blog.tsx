import React from 'react';
import { BookOpen, Search, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    { 
      title: "How to systematically rebuild your CIBIL Score to 750+", 
      category: "Credit Health", 
      readTime: "6 min",
      excerpt: "Your CIBIL score is the most critical metric banks use. Learn the step-by-step strategies to fix a low credit score quickly.",
      link: "/cibil-score"
    },
    { 
      title: "Insider Secrets for Fast Loan Approvals", 
      category: "Loans", 
      readTime: "7 min",
      excerpt: "Master the criteria Indian banks use to evaluate your loan application, from FOIR to Debt-to-Income ratios.",
      link: "/loan-tips"
    },
    { 
      title: "The Ultimate Guide to Best Credit Cards in India (2026)", 
      category: "Credit Cards", 
      readTime: "8 min",
      excerpt: "Compare and find the top cashback, lifetime free, and rewards credit cards. Handpicked offers to maximize your savings.",
      link: "/credit-cards"
    },
    { 
      title: "The Power of SIP: Wealth Creation over Time", 
      category: "Investments", 
      readTime: "5 min",
      excerpt: "Understand how Systematic Investment Plans in mutual funds can utilize the compounding effect to build long-term wealth.",
      link: "/calculator/sip"
    },
    { 
      title: "Home Loan EMI: Interest Rates & Prepayment", 
      category: "Loans", 
      readTime: "5 min",
      excerpt: "Learn how extending your loan tenure dramatically reduces your monthly EMI, but increases the absolute total interest.",
      link: "/calculator/home-loan"
    },
  ];

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Financial Insights hub</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Expert advice on loans, credit cards, banking, and personal finance in India.
          </p>
        </div>

        <div className="mb-12 max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search articles... e.g. 'Home Loan'"
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:text-white transition-all shadow-sm"
          />
          <Search className="absolute left-4 top-4 w-6 h-6 text-slate-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a href={post.link} key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{post.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{post.excerpt}</p>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-medium group">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
