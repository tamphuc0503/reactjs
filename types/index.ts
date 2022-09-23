import { CarType, CarType1 } from "./carTypes";
import { Prices, Subscriptions, TransactionStatus } from "./enum";

let transactionStatus: TransactionStatus = TransactionStatus.Failed;
console.log(`${transactionStatus}`);

let subscription: Subscriptions = Subscriptions.a
console.log(`${subscription}`);

let price: Prices = Prices.a;
console.log(`${price}`);

let carType: CarType = { name: 'Honda', year: 2020 };
console.log(carType);
console.log(carType.name);

let carType1: CarType1 = 'Honda';
console.log(carType1);

