"use strict";
class Customer {
    constructor(CustomerName, Age, Address, ContactNumber) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
}
class loan extends Customer {
    constructor(CustomerName, Age, Address, ContactNumber, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        super(CustomerName, Age, Address, ContactNumber);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.InterestRate = InterestRate;
    }
    interestCalculate() {
        this.Total = this.LoanAmount * this.InterestRate;
    }
    Display() {
        console.log("Customer Details : " + this.CustomerName + ' ' + this.Age + ' ' + this.Address + ' ' + this.ContactNumber + '\n' + "Loan Details : " + this.LoanAccountNo + ' ' + this.LoanType + '  total LoanAmount : ' + this.Total + '|| ' + this.Duration + ' ' + this.InterestRate);
    }
}
let obj = new loan("Ram", 20, "Palakkad", 5775, 101, "Business", 20000, 5, 7);
obj.interestCalculate();
obj.Display();
