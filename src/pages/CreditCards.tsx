import React, { useState } from 'react';
import { AffiliateCard } from '../components/ui/AffiliateCard';
import { Award, Star, CreditCard as CardIcon } from 'lucide-react';

export function CreditCards() {
  const [activeCategory, setActiveCategory] = useState('All Cards');

  const cards = [
    {
      bankName: "Axis Bank",
      cardName: "Flipkart Axis Credit Card",
      cardSlug: "flipkart-axis",
      annualFee: "500 (waived on ₹3.5L spend)",
      joiningFee: "500",
      rating: 4.8,
      categories: ["Cashback", "Shopping"],
      benefits: [
        "7.5% Cashback on transaction on Myntra (Save up to ₹4,000 per quarter / ₹16k/year!)",
        "5% Cashback on every Flipkart order (excluding Flipkart Health)",
        "5% Cashback on Cleartrip (Save up to ₹4,000 as cashback per quarter)",
        "4% Unlimited Cashback on Swiggy, PVR, Uber, and Cult.fit",
        "1% Unlimited Cashback on other eligible spends",
        "Welcome Benefit: Flipkart voucher worth ₹250 on first transaction within 30 days",
        "15% off up to ₹500 with EazyDiner",
        "1% Fuel surcharge waiver on transactions between ₹400 and ₹4,000 (capped at ₹400/cycle)"
      ],
      affiliateUrl: "https://bitli.in/sg8065Q"
    },
    {
      bankName: "Axis Bank",
      cardName: "MyZone Rupay Credit Card",
      cardSlug: "myzone-rupay",
      annualFee: "500 (waived on ₹1.5L spend)",
      joiningFee: "500",
      rating: 4.6,
      categories: ["Rewards", "Shopping", "Dining"],
      benefits: [
        "Buy 1 Get 1 Free Movie Tickets on District app (Max. ₹200/month discount)",
        "Save ₹2,880 annually with Swiggy: flat ₹120 off twice a month (min. order ₹500)",
        "Enjoy 4 Complimentary Airport Lounges annually (1 per calendar quarter on spends of ₹50k in prev 3 months)",
        "Complimentary SonyLiv Premium annual subscription worth ₹1499 on first transaction within 30 days",
        "Get 4 Edge reward points on every ₹200 spent (except wallet, fuel, rent, utilities)",
        "15% discount up to ₹500 on a minimum order of ₹2500 once a month via EazyDiner",
        "1% Fuel Surcharge waiver on transactions between ₹400 and ₹4000 (Capped at ₹400/month)"
      ],
      affiliateUrl: "https://bitli.in/FiKz6jn"
    },
    {
      bankName: "SBI Card",
      cardName: "SBI Cashback Credit Card",
      cardSlug: "sbi-cashback",
      annualFee: "999 (waived on ₹2L spend)",
      joiningFee: "999",
      rating: 4.9,
      categories: ["Cashback", "Shopping"],
      benefits: [
        "5% Cashback on every eligible online transaction, across all websites and apps (capped at ₹5,000/month combined)",
        "1% Cashback on eligible offline everyday purchases (save ₹60,000/year!)",
        "1% Fuel surcharge waiver on transactions between ₹500 and ₹3,000 (capped at ₹100 per statement cycle)",
        "Cashback is auto-credited to your SBI Card account within 2 working days of statement generation"
      ],
      affiliateUrl: "https://bitli.in/Yp1i612"
    },
    {
      bankName: "Axis Bank",
      cardName: "Axis Privilege Credit Card",
      cardSlug: "axis-privilege",
      annualFee: "1,500",
      joiningFee: "1,500",
      rating: 4.5,
      categories: ["Rewards", "Travel", "Dining"],
      benefits: [
        "12,500 Edge Reward Points (worth ₹2,500) on spending ₹2.5L within card anniversary year",
        "2 Complimentary domestic lounge accesses per quarter (8 annually) with ₹50,000 spend in past 3 months",
        "Exclusive Wednesday Offers: 15% off on flights & hotels (Goibibo, MMT) and 10% off on Swiggy, Amazon Fresh, & Tira (up to ₹1,000)",
        "Buy 1 Get 1 Free on movie tickets via District app (up to ₹250 off, once per month)",
        "10,000 Edge Reward Points (worth ₹2,000) on spending ₹2.5L annually (annual fee waiver on ₹5L spending)",
        "Exclusive dining privileges: 25% off up to ₹800 via EazyDiner (Dining Delights Program)",
        "1% Fuel Surcharge waiver on transactions between ₹400 and ₹4,000 (capped at ₹400 per cycle)"
      ],
      affiliateUrl: "https://bitli.in/iR7bBGN"
    },
    {
      bankName: "Axis Bank",
      cardName: "Axis Magnus Credit Card",
      cardSlug: "axis-magnus",
      annualFee: "12,500 (waived on ₹25L spend)",
      joiningFee: "12,500",
      rating: 4.9,
      categories: ["Rewards", "Travel", "Dining"],
      benefits: [
        "12 EDGE Points/₹200 on spends up to ₹1.5L in a calendar month (1.2% back)",
        "35 EDGE Points/₹200 on incremental spends above ₹1.5L in that month (3.5% back)",
        "Travel EDGE bookings: Earn up to 5× points on Axis portal",
        "Standard transfers: regular Magnus transfer points (5 points → 2 partner miles)",
        "Burgundy exclusive: point transfers improve to 5 points → 4 partner miles with 20+ partners",
        "Lounge access: Unlimited international lounges via Priority Pass; domestic lounge requires ₹50k spend in previous 3 months",
        "Welcome benefit: ₹12,500 voucher (Luxe/Postcard Hotels/Yatra) to fully offset first-year fee",
        "Save up to 30% at over 4,000 Restaurants across India via Dining Delights (up to ₹1,000)"
      ],
      affiliateUrl: "https://bitli.in/xVOG6RC"
    },
    {
      bankName: "IDFC First Bank",
      cardName: "FIRST Power Plus Credit Card",
      cardSlug: "idfc-power-plus",
      annualFee: "499 (waived on ₹1.5L spend)",
      joiningFee: "499",
      rating: 4.6,
      categories: ["Rewards", "Travel"],
      benefits: [
        "5% Savings on HPCL fuel and LPG spends + additional 1.5% savings as Payback Rewards via HP Pay app",
        "Interest-free ATM Cash Withdrawals & Unlimited Never Expiring Rewards",
        "₹500 Cashback on 1st HPCL fuel transaction of ₹500 or above within 30 days",
        "Complimentary Roadside Assistance up to 4 instances per year (valued at ₹1,399)",
        "Personal Accident Cover of ₹2,00,000 and Lost Card Liability Cover of ₹25,000",
        "Discount up to 50% on Domestic and International Rental Cars with Eco Rent A Car & Europcar",
        "Get 7.5% off up to ₹7,500 on Croma purchases over ₹5,000"
      ],
      affiliateUrl: "https://bitli.in/16sHIb2"
    },
    {
      bankName: "IDFC First Bank",
      cardName: "FIRST Mayura Credit Card",
      cardSlug: "idfc-mayura",
      annualFee: "5,999 (waived on ₹15L spend)",
      joiningFee: "5,999",
      rating: 4.9,
      categories: ["Rewards", "Travel", "Dining"],
      benefits: [
        "Zero Forex Markup Fees - No additional charges on international transactions making it highly cost-effective",
        "4 Complimentary visits/quarter to domestic airport spas and lounges (including 1 guest visit)",
        "4 Complimentary visits/quarter to international airport lounges access",
        "Free Trip cancellation cover up to ₹50,000 twice a year for non-refundable flights & hotels",
        "Earn up to 12,000 milestone bonus reward points (4k on joining fee, 4k on ₹20k spend in cycle 2, 4k in cycle 3)",
        "Movie Delights: Buy 1 Get 1 movie tickets up to ₹500 off on BookMyShow, twice a month",
        "Up to 24 complimentary golf lessons per year (capped at 2 per month, min spend ₹20k in prev month)",
        "7.5% off up to ₹7,550 on EMI purchases (Sat–Mon) & 5% off up to ₹2,500 on Non-EMI at Croma"
      ],
      affiliateUrl: "https://bitli.in/k6eGe4j"
    },
    {
      bankName: "IDFC First Bank",
      cardName: "FIRST SWYP Credit Card",
      cardSlug: "idfc-swyp",
      annualFee: "499 (waived on ₹1.5L spend)",
      joiningFee: "499",
      rating: 4.8,
      categories: ["Cashback", "Shopping", "Dining"],
      benefits: [
        "20% Instant discount up to ₹80 on Domino's orders & 10% instant discount up to ₹100 on Zomato, twice every month",
        "10% Instant discount every month on Nykaa (above ₹3,000), Myntra FWD (above ₹850), Tata CLiQ (above ₹999), and Zepto (above ₹499)",
        "Welcome Benefits worth ₹5,000+ including ₹500 Amazon voucher & Lenskart Gold Max membership",
        "Movie perks: 25% instant discount up to ₹100 on movie tickets booking via District, once every month",
        "Spend ₹20k in a calendar month to receive 1 complimentary premium coffee voucher at Tim Hortons, Costa, Third Wave, or CCD",
        "Get complimentary railway lounge access with 4 free visits every quarter across India",
        "Complimentary roadside assistance cover worth ₹1,399, personal accident cover worth ₹2,00,000, and 1% fuel surcharge waiver"
      ],
      affiliateUrl: "https://bitli.in/nayJKyl"
    },
    {
      bankName: "Axis Bank",
      cardName: "Indian Oil RuPay Credit Card",
      cardSlug: "axis-iocl-rupay",
      annualFee: "500 (waived on ₹3.5L spend)",
      joiningFee: "500",
      rating: 4.7,
      categories: ["Rewards", "Shopping"],
      benefits: [
        "IOCL Fuel Spends: Earn 20 EDGE points per ₹100 (~4% back) - Save up to ₹2,400 annually!",
        "Works with UPI: Enables seamless QR-based card-on-UPI transactions",
        "1% Fuel Surcharge Waiver on HPCL transactions (capped at ₹50/month)",
        "Welcome Cashback: 100% cashback up to ₹250 on first fuel transaction in 30 days",
        "Online Spends: Earn 5 EDGE points per ₹100 (~1% back) capped at 5,000 pts/month",
        "Exclusive Wednesday offers: Up to 15% off Flights & Hotels on MMT/Goibibo, 10% off Swiggy and Amazon Fresh",
        "Up to 15% off at over 4,000 partner restaurants via Axis Dining Delights / EazyDiner"
      ],
      affiliateUrl: "https://bitli.in/Q05kr3F"
    }
  ];

  const filteredCards = activeCategory === 'All Cards' 
    ? cards 
    : cards.filter(c => c.categories?.includes(activeCategory));

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide mb-4">
            <Award className="w-4 h-4" /> EDITOR'S PICK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Best Credit Cards in India <br/>(Updated 2026)
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Compare and apply for top cashback, lifetime free, and rewards credit cards. Handpicked offers to maximize your savings.
          </p>
        </div>

        {/* Categories/Filters placeholders */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['All Cards', 'Rewards', 'Cashback', 'Travel', 'Shopping', 'Dining'].map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCards.map((card) => (
            <AffiliateCard 
              key={card.cardName}
              bankName={card.bankName}
              cardName={card.cardName}
              cardSlug={card.cardSlug}
              joiningFee={card.joiningFee}
              annualFee={card.annualFee}
              rating={card.rating}
              benefits={card.benefits}
              affiliateUrl={card.affiliateUrl}
            />
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-20 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto">
          <div className="prose prose-slate dark:prose-invert">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CardIcon className="w-8 h-8 text-emerald-500" />
              How to Choose the Best Credit Card in India?
            </h2>
            <p>
              With hundreds of credit cards available in the Indian market, selecting the perfect card can be overwhelming. The ideal card depends heavily on your specific spending patterns, income level, and lifestyle.
            </p>
            
            <h3>1. Analyze Your Primary Spending Areas</h3>
            <p>
              If your major expenses revolve around online shopping, food delivery, or fuel, choose cards tailored to those specific categories. For example, the <strong>SBI Cashback Credit Card</strong> or <strong>Flipkart Axis Credit Card</strong> offer exceptional returns on daily online spends, while the <strong>FIRST Power Plus Credit Card</strong> is designed specifically for maximizing fuel savings.
            </p>

            <h3>2. Reward Points vs. Direct Cashback</h3>
            <p>
              If you prefer simplicity, direct cashback cards like the <strong>SBI Cashback Credit Card</strong> are ideal as savings are credited straight to your statement. For those who love luxury perks, lounge access, or premium travel transfers, reward-centric cards like the <strong>Axis Magnus</strong>, <strong>Axis Privilege</strong>, or <strong>FIRST Mayura Credit Card</strong> unlock extraordinary value through airline/hotel point conversions and luxurious dining privileges.
            </p>

            <h3>3. Fee Waivers and Spending Milestone Goals</h3>
            <p>
              Most premium cards have annual fees that can be completely waived if you hit specified annual spending milestones. For example, the annual fee for the <strong>MyZone Rupay Credit Card</strong> is waived on spending ₹1.5 Lakhs annually, whereas elite cards like the <strong>Axis Magnus Credit Card</strong> waive the fee at a higher threshold of ₹25 Lakhs. Choose a card whose waiver threshold aligns naturally with your annual budget.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
