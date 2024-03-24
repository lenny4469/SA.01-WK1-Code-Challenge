const prompt = require("prompt-sync")();
const basicSalary = parseInt(prompt("Enter basic salary:"));
const benefits = parseInt(prompt("Enter benefits:"));

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net salary: " + netSalary);
const KRA_TAX_RATES = [
    0, 
    10, 
    25, 
    30, 
    32, 
    35];
const KRA_TAX_BANDS = [
    0, 
    12272, 
    23816, 
    35398, 
    47074, 
    58748, 
    Number.MAX_VALUE];
const NHIF_RATES = [
    150, 
    300, 
    400, 
    500, 
    600, 
    750, 
    850, 
    900, 
    950, 
    1000];
const NHIF_BANDS = [
    0, 
    5999, 
    7999,
    11999, 
    14999, 
    19999, 
    24999, 
    29999,
    34999, 
    39999, 
    44999, 
    49999, 
    Number.MAX_VALUE];
const NSSF_RATE = 0.06;

function calculateTax(salary, taxRates, taxBands) {
  let totalTax = 0;
  for (let i = 0; i < taxRates.length; i++) {
    if (salary > taxBands[i]) {
      totalTax += taxRates[i] * (taxBands[i] - taxBands[i - 1]);
    } else {
      totalTax += taxRates[i] * (salary - taxBands[i - 1]);
      break;
    }
  }
  return totalTax;
}

function calculateNHIF(salary, nhifRates, nhifBands) {
  for (let i = nhifBands.length - 1; i >= 0; i--) {
    if (salary >= nhifBands[i]) {
      return nhifRates[i];
    }
  }
  return nhifRates[0];
}

function calculateNSSF(salary, nssfRate) {
  return salary * nssfRate;
}

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  const tax = calculateTax(grossSalary, KRA_TAX_RATES, KRA_TAX_BANDS);

  const nhif = calculateNHIF(grossSalary, NHIF_RATES, NHIF_BANDS);

  const nssf = calculateNSSF(grossSalary, NSSF_RATE);

  const netSalary = grossSalary - tax - nhif - nssf;

  return netSalary;
}