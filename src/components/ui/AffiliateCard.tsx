import React from 'react';
import { ExternalLink, Check, Gift } from 'lucide-react';
import { CreditCardVisual } from './CreditCardVisual';

interface AffiliateCardProps {
  key?: React.Key;
  bankName: string;
  cardName: string;
  imagePlaceholderUrl?: string;
  annualFee: string;
  joiningFee: string;
  rating: number;
  benefits: string[];
  affiliateUrl: string;
  cardSlug?: string;
}

export function AffiliateCard({
  bankName,
  cardName,
  imagePlaceholderUrl,
  annualFee,
  joiningFee,
  rating,
  benefits,
  affiliateUrl,
  cardSlug = 'default'
}: AffiliateCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:shadow-md transition-shadow group">
      {/* Interactive Credit Card Image/Visual */}
      <div className="mb-6 w-full">
        <CreditCardVisual cardSlug={cardSlug} bankName={bankName} cardName={cardName} />
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{bankName}</p>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{cardName}</h3>
          <div className="flex items-center gap-1 mt-2">
            {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
            <span className="text-sm text-slate-500 ml-1">({rating})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
          <p className="text-slate-500 dark:text-slate-400 mb-1">1st Year Fee</p>
          <p className="font-semibold text-slate-900 dark:text-white">₹{joiningFee}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
          <p className="text-slate-500 dark:text-slate-400 mb-1">Annual Fee</p>
          <p className="font-semibold text-slate-900 dark:text-white">₹{annualFee}</p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
          <Gift className="w-4 h-4 text-emerald-500" /> Key Benefits
        </p>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 mt-auto">
        <a 
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 min-h-[44px] rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          Apply Now <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
