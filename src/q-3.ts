abstract class Customer{
    CustomerName:string;
    Age:number;
    Address:string;
    ContactNumber:number;

   constructor(CustomerName:string, Age:number,Address:string,ContactNumber:number){
       this.CustomerName=CustomerName;
       this.Age=Age;
       this.Address=Address;
       this.ContactNumber=ContactNumber;
   }
   public abstract Display():any;
}

class loan extends Customer{
   LoanAccountNo:number;
   LoanType:string;
   LoanAmount:number;
   Duration:string|number;
   InterestRate:number;
   Total:number | undefined;
   constructor(CustomerName:string, Age:number,Address:string,ContactNumber:number,LoanAccountNo:number,LoanType:string,LoanAmount:number,Duration:string|number,InterestRate:number){
       super(CustomerName, Age,Address,ContactNumber)
       this.LoanAccountNo=LoanAccountNo;
       this.LoanType=LoanType;
       this.LoanAmount=LoanAmount;
       this.Duration=Duration;
       this.InterestRate=InterestRate;
   }
   public interestCalculate(){
       this.Total=this.LoanAmount*this.InterestRate;
   }
   public Display() {
       console.log("Customer Details : "+this.CustomerName+' '+this.Age+' '+this.Address+' '+this.ContactNumber+'\n'+"Loan Details : "+this.LoanAccountNo+' '+this.LoanType+'  total LoanAmount : '+this.Total+'|| '+this.Duration+' '+this.InterestRate);
   }
}
let obj=new loan("Ram",20,"Palakkad",5775,101,"Business",20000,5,7)
obj.interestCalculate();
obj.Display();