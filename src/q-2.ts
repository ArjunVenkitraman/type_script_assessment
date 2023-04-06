interface SavingAccount{
    acc_id:number
    acc_name:string
    balance(accno?:number,acc_balance?:number):any
}
interface CurrentAccount{
    acc_id:number
    acc_name:string
    balance(accno?:number,acc_balance?:number):any
}

class Account implements SavingAccount,CurrentAccount{
    acc_id: number
    acc_name:string
    constructor(acc_id: number, acc_name:string){
        this.acc_id=acc_id
        this.acc_name=acc_name
    }
    balance(){
        console.log("Hello "+this.acc_id+' '+this.acc_name)
    }
}
let s:SavingAccount=new Account(101,"Ram")
let c:CurrentAccount=new Account(102,"Ravi")
s.balance()
c.balance()
