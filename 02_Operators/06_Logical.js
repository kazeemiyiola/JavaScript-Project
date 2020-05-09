// These operators to make logical decisions

//logical AND (&&) , 
//        0R (||),
//       NOT (!)

// AND returns of true if both operands are true
let goodCredit = false;
let highIncome = false;

// AND OR
let isElligible = highIncome || goodCredit;
console.log(isElligible);

// NOT OPERATOR
let rejectLoanApplication = !isElligible;
console.log(rejectLoanApplication);