export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
}

export interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number): EMIResult {
  if (principal <= 0 || tenureMonths <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0, principal: 0 };
  }

  if (annualRate === 0) {
    const emi = principal / tenureMonths;
    return {
      emi,
      totalInterest: 0,
      totalPayment: principal,
      principal,
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalInterest,
    totalPayment,
    principal,
  };
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  tenureMonths: number,
  emi: number
): AmortizationRow[] {
  const schedule: AmortizationRow[] = [];
  let balance = principal;
  const monthlyRate = annualRate / 12 / 100;

  for (let month = 1; month <= tenureMonths; month++) {
    const interest = balance * monthlyRate;
    let principalPaid = emi - interest;

    // Adjust last month rounding
    if (month === tenureMonths) {
      principalPaid = balance;
    }

    balance -= principalPaid;
    if (balance < 0) balance = 0;

    schedule.push({
      month,
      emi,
      principal: principalPaid,
      interest,
      balance,
    });
  }

  return schedule;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
