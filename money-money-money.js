// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired)
    {
      years+=1;
      principal = principal*(1+interest*(1-tax))
   }
    return years;
  }