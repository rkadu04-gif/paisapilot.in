import React from 'react';

interface CreditCardVisualProps {
  cardSlug: string;
  bankName: string;
  cardName: string;
}

export function CreditCardVisual({ cardSlug, bankName, cardName }: CreditCardVisualProps) {
  // Define custom styles and logos for each card variant
  let cardBg = "bg-gradient-to-br from-slate-800 to-slate-950";
  let network = "VISA";
  let accentColor = "from-emerald-500/20 to-teal-500/10";
  let textAccent = "text-emerald-400";
  let customDetails = "Cashback Elite";

  if (cardSlug === 'flipkart-axis') {
    cardBg = "bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950";
    network = "VISA";
    accentColor = "from-blue-600/30 via-yellow-500/10 to-blue-500/20";
    textAccent = "text-yellow-400";
    customDetails = "7.5% Myntra & 5% Flipkart";
  } else if (cardSlug === 'myzone-rupay') {
    cardBg = "bg-gradient-to-br from-rose-950 via-red-900 to-zinc-950";
    network = "RuPay";
    accentColor = "from-amber-500/20 to-rose-500/20";
    textAccent = "text-amber-400";
    customDetails = "SonyLIV & Movie BOGO";
  } else if (cardSlug === 'sbi-cashback') {
    cardBg = "bg-gradient-to-br from-[#0c2461] via-[#1e3799] to-[#0a3d62]";
    network = "VISA";
    accentColor = "from-cyan-500/20 to-blue-500/10";
    textAccent = "text-cyan-400";
    customDetails = "5% Online Cashback";
  } else if (cardSlug === 'axis-privilege') {
    cardBg = "bg-gradient-to-br from-zinc-800 via-neutral-700 to-stone-900";
    network = "VISA SIGNATURE";
    accentColor = "from-yellow-400/10 via-zinc-400/20 to-amber-500/10";
    textAccent = "text-amber-400";
    customDetails = "Privilege Rewards";
  } else if (cardSlug === 'axis-magnus') {
    cardBg = "bg-gradient-to-br from-[#1a0508] via-[#3a0813] to-[#0f0406]";
    network = "VISA INFINITE";
    accentColor = "from-[#d4af37]/20 via-zinc-800/10 to-[#d4af37]/10";
    textAccent = "text-[#d4af37]";
    customDetails = "Magnus Burgundy";
  } else if (cardSlug === 'idfc-power-plus') {
    cardBg = "bg-gradient-to-br from-[#0a1c3a] via-[#102d5a] to-[#d35400]/40";
    network = "RuPay";
    accentColor = "from-orange-500/25 via-slate-800/10 to-emerald-500/10";
    textAccent = "text-orange-400";
    customDetails = "5% HPCL Fuel Savings";
  } else if (cardSlug === 'idfc-mayura') {
    cardBg = "bg-gradient-to-br from-[#031d1d] via-[#094242] to-[#120f31]";
    network = "VISA SIGNATURE";
    accentColor = "from-teal-400/30 via-emerald-500/10 to-indigo-500/30";
    textAccent = "text-teal-300";
    customDetails = "Zero Forex & Luxury Spas";
  } else if (cardSlug === 'idfc-swyp') {
    cardBg = "bg-gradient-to-br from-[#2563eb] via-[#ec4899] to-[#f43f5e]";
    network = "VISA";
    accentColor = "from-fuchsia-500/30 via-indigo-500/20 to-pink-500/20";
    textAccent = "text-pink-300";
    customDetails = "20% Domino's & 10% Zomato";
  } else if (cardSlug === 'axis-iocl-rupay') {
    cardBg = "bg-gradient-to-br from-[#111c24] via-[#1c3c54] to-[#e67e22]/50";
    network = "RuPay";
    accentColor = "from-orange-500/25 via-blue-900/20 to-amber-500/15";
    textAccent = "text-orange-400";
    customDetails = "IOCL ~4% Fuel Cashback";
  }

  return (
    <div className={`relative w-full aspect-[1.586/1] ${cardBg} rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden shadow-xl border border-white/10 group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}>
      {/* Glossy overlay sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Decorative Custom Abstract Accent Wave */}
      <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-gradient-to-br ${accentColor} blur-2xl opacity-80 pointer-events-none`} />
      
      {/* Top Header Row */}
      <div className="flex justify-between items-start z-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60 font-semibold">{bankName}</p>
          <p className="text-xs font-mono tracking-wider text-white/40 mt-0.5">PaisaPilot Partner</p>
        </div>
        <div className="text-right">
          {/* Wireless sign & NFC */}
          <svg className="w-5 h-5 text-white/60 ml-auto inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* Middle Row with Metallic SIM Chip */}
      <div className="flex justify-between items-center z-10 my-1">
        {/* Realistic Golden Microchip */}
        <div className="w-10 h-8 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-0.5 relative shadow-inner overflow-hidden flex flex-col justify-between">
          <div className="border border-amber-600/30 rounded w-full h-full flex flex-wrap opacity-80">
            <div className="w-1/2 h-1/3 border-b border-r border-amber-800/20" />
            <div className="w-1/2 h-1/3 border-b border-amber-800/20" />
            <div className="w-1/3 h-1/3 border-b border-r border-amber-800/20" />
            <div className="w-1/3 h-1/3 border-b border-r border-amber-800/20" />
            <div className="w-1/3 h-1/3 border-b border-amber-800/20" />
            <div className="w-1/2 h-1/3 border-r border-amber-800/20" />
            <div className="w-1/2 h-1/3 border-amber-800/20" />
          </div>
        </div>
        
        {/* Styled Card Variant Specific Text */}
        <span className={`text-[11px] font-mono tracking-wider ${textAccent} bg-white/5 px-2.5 py-1 rounded-full border border-white/5`}>
          {customDetails}
        </span>
      </div>

      {/* Bottom Row - Name & Card Brand Network */}
      <div className="flex justify-between items-end z-10 mt-auto">
        <div>
          <h4 className="text-sm font-bold tracking-wide line-clamp-1">{cardName}</h4>
          <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase mt-0.5 block">
            ★★★★  ★★★★  8065
          </span>
        </div>
        <div className="text-right">
          {network === 'RuPay' ? (
            <div className="bg-white/90 px-2 py-0.5 rounded text-[#003c8f] font-extrabold text-xs tracking-tight shadow-sm">
              RuPay <span className="text-orange-500">❯</span>
            </div>
          ) : (
            <div className="font-italic font-black text-sm tracking-wider flex flex-col justify-end">
              <span className="italic block leading-none">{network}</span>
              {network.includes("INFINITE") && <span className="text-[7px] tracking-widest text-white/50 block">INFINITE</span>}
              {network.includes("SIGNATURE") && <span className="text-[7px] tracking-widest text-white/50 block">SIGNATURE</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
