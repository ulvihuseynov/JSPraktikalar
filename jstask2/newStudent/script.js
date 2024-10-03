function Student(ad, qiymet, movzu) {
  (this.ad = ad),
    (this.qiymet = qiymet),
    (this.movzu = movzu),
    (this.study = function (saat) {
      return saat * 5;
    });

  this.getGrade = function () {
    return this.qiymet + this.study(5);
  };
  this.changeSubject = function (newSubject) {
    return (this.movzu = newSubject);
  };
}

const student1 = new Student("Arif", 4, "Kimya");
const student2 = new Student("Samir", 3, "Tarix");
const student3 = new Student("Rakif", 2, "Fizika");
const student4 = new Student("Zakir", 5, "Cografiya");
console.log(student3.changeSubject("Riyaziyyat"));
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student1.study(5));
console.log(student1.getGrade());

//*2
function createShoppingCart() {
  let basket = [];

  return {
    addItem(itemName, price) {
      basket.push({ itemName, price });
      console.log(`${itemName} baskete elave olundu`);
      console.log(basket);
    },
    RemoveItem(itemName) {
      const i = basket.findIndex((item) => item.itemName === itemName);
      if (i !== -1) {
        console.log(`${basket[i].itemName} silindi`);
        console.log(basket.splice(i, 1));
      } else {
        console.log(`${itemName} sebetde yoxdur`);
      }
    },
    getTotal() {
      let total = basket.reduce((acc, item) => {
        return (acc += item.price);
      }, 0);
      console.log(total);
    },
    showCart() {
      if (basket.length == 0) {
        console.log(`${basket}de esya yoxdur`);
      } else {
        basket.forEach((item, index) => {
          console.log(`${index + 1} ${item.itemName}  ${item.price}`);
        });
      }
    },
  };
}

const myShoppingCart = createShoppingCart();
myShoppingCart.addItem("ayaqqabi", 41);
myShoppingCart.addItem("koynek", 22);
myShoppingCart.addItem("salvar", 38);
myShoppingCart.addItem("telefon", 348);

myShoppingCart.RemoveItem("koynek");

myShoppingCart.getTotal();

myShoppingCart.showCart();
console.log("-------------");
console.log("-------------");

//!3
function CreateEventLogger() {
  let eventJournal = [];
  return {
    logEvent(eventName) {
      eventJournal.push({ eventName });
      console.log(`${eventName} elave olundu`);
      console.log(eventJournal);
    },
    getEvents() {
      let end = eventJournal
        .map((item, index) => {
          return `${index + 1}. ${item.eventName}`;
        })
        .join("  ");
      document.querySelector(".eventBox").innerHTML = end;
    },
    clearLog() {
      console.log((eventJournal.length = 0));
      console.log(eventJournal);
    },
  };
}
const eventLog = CreateEventLogger();
eventLog.logEvent("Tedbir");
eventLog.logEvent("Python course");
eventLog.logEvent("Kecmisden geleceye");

eventLog.getEvents();

eventLog.clearLog();

console.log("----------------");
console.log("----------------");
console.log("----------------");

//?5
function createBankAccountWithInterest() {
  let balance = 0;

  return {
    depozit(məbləğ) {
      // if (balance<1000) {
      balance += məbləğ;
      console.log(balance);
      return balance;
      // }else if(balance>1000){
      // alert('Max 1000 AZN')
      // }
      //
    },
    çıxarmaq(məbləğ) {
      if (balance > məbləğ) {
        console.log((balance -= məbləğ));
        // console.log(balance)
      }
    },
    checkBalance() {
      console.log(`${balance} AZN dir`);
    },
    addFaiz(dərəcə) {
      balance += (balance * dərəcə) / 100;
    },
  };
}

let bank = createBankAccountWithInterest();
bank.depozit(120);
bank.çıxarmaq(10);

bank.addFaiz(10);

bank.checkBalance();

const btn = document.querySelector("#downBtn");

btn.addEventListener("click", () => {
  let span = document.querySelector("#time");
  // console.log(type)
  let str = String(span.innerText).slice(-2);
  let interval;
  console.log(str);
  interval = setInterval(() => {
    str--
    if ( str== 0) {
      span.style.color = "red";
     setTimeout(()=>{
      alert("bitdi amma");
     },300) 
      span.innerText = str;
span.innerText='00:00'
      clearInterval(interval);
    }
    // str--
    // span.innerText = `00:${str}`.length==4 ? `00:0${str}` :`00:${str}` ;
     span.innerText = `00:${str}`
    if (str<10) {
    span.innerText = `00:0${str}`;
      
    }
  }, 1000);
});
