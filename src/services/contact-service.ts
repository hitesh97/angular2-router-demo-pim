export class ContactService {
  serviceDate: Date;
  constructor() {
   console.log('contact service is alive');
   var serviceDate = new Date();
   this.serviceDate = serviceDate;
   console.log('another contact service at', serviceDate);
  }

  getDate() {
    return this.serviceDate;
  }

  sayHello() {
    return "Hiya from Contact service";
  }
}
