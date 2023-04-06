"use strict";
class Account {
    constructor(acc_id, acc_name) {
        this.acc_id = acc_id;
        this.acc_name = acc_name;
    }
    balance() {
        console.log("Hello " + this.acc_id + ' ' + this.acc_name);
    }
}
let s = new Account(101, "Ram");
let c = new Account(102, "Ravi");
s.balance();
c.balance();
