"use strict";

// ===== TIP lar bo'limi =====

// 1-m

// document.write("1-m: <br>");
// let l = +prompt(`1-m: L uzunligini kiriting! (sm)`);
// document.write(`L = ${l} sm <br>`);
// document.write(`L ning uzunlgi ${l / 100} m ga teng`);
// console.log(alert(`L ning uzunlgi ${l / 100} m ga teng`));
// document.write("<br><br>");

// // 2-m

// document.write("2-m: <br>");
// let m = +prompt(`2-m: M ni kiriting! (kg)`);
// document.write(`M = ${m} kg <br>`);
// document.write(`${m} kg ${m / 1000} tonnaga teng`);
// console.log(alert(`${m} kg ${m / 1000} tonnaga teng`));
// document.write("<br><br>");

// 3-m

// let a=+prompt(`A kesmaning qiymatini kiriting!`),
//  b=+prompt(`B kesmaning qiymatini kiriting!`), s;

// if(a>0 && b>0){
//   if(a>=b){
//     s=a/b;
//     console.log(Math.floor(s));
//   }
//   else{
//     console.log('joylashtirib bo\'lmaydi');
//   }
// }

// else if(a===0){
//   console.log('a kesma mavjud emas!');
// }
// else if(b===0){
//   console.log('b kesma mavjud emas!');
// }

// else{
//   console.log('musbat qiymat kiriting!');
// }

// 4-m

// let son= +prompt('ikki xonali sonni kiriting'), x, y;

// if(son>=100 || son<10 && -10<son || -100>=son){
//   console.log('bu ikki xonali son emas!');
// }
// else if(son<100 && son>9){
//   x=Math.floor(son/10);
//   y=son%10;
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`)
// }

// else if(son>-100 && son<-9){
//   x=Math.abs(Math.ceil(son/10));
//   y=Math.abs(son%10);
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`)
// }

// else{
//   console.error('404 NOT FOUND')
// }

//  5-m

// let son= +prompt('ikki xonali sonni kiriting'), x, y, s;

// if(son>=100 || son<10 && -10<son || -100>=son){
//   console.log('bu ikki xonali son emas!');
// }
// else if(son<100 && son>9){
//   x=Math.floor(son/10);
//   y=son%10;
//   s=x+y;
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`);
//   console.log(`raqamlar yig'indisi => ${s} ga teng.`);
// }

// else if(son>-100 && son<-9){
//   x=Math.abs(Math.ceil(son/10));
//   y=Math.abs(son%10);
//   s=x+y;
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`);
//   console.log(`raqamlar yig'indisi => ${s} ga teng.`);
// }

// else{
//   console.error('404 NOT FOUND');
// }

// 6-m

// let son= +prompt('ikki xonali sonni kiriting'), x, y, s;

// if(son>=100 || son<10 && -10<son || -100>=son){
//   console.log('bu ikki xonali son emas!');
// }
// else if(son<100 && son>9){
//   x=Math.floor(son/10);
//   y=son%10;
//   s=x*y;
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`);
//   console.log(`raqamlar ko'paytmasi => ${s} ga teng.`);
// }

// else if(son>-100 && son<-9){
//   x=Math.abs(Math.ceil(son/10));
//   y=Math.abs(son%10);
//   s=x*y;
//   console.log(`o'nliklar xonasidagi raqam => ${x}`);
//   console.log(`birliklar xonasidagi raqam => ${y}`);
//   console.log(`raqamlar ko'paytmasi => ${s} ga teng.`);
// }

// else{
//   console.error('404 NOT FOUND');
// }

// 7-m

// let son=+prompt('999 dan katta raqam kiriting!');

// if(son>999){
//   console.log(`${Math.trunc((son%1000)/100)}`);
// }
// else{
//   console.log('999 dan katta son kiriting!')
// }

// 8-m

// let s=+prompt('sekundni qiymatini kiriting!');

// if(s>0){
//   console.log(`Kun boshidan ${s} sekund o'tdi u ${Math.floor(s/3600)} soat/${Math.floor((s%3600)/60)} minut/${s%60} sekundga teng yoki ${Math.floor(s/60)} minut/${s%60} sekundga teng.`);
// }

// else if(s===0){
//   console.log('qiymat kiriting!')
// }
// else {
//   console.error('404 NOT FOUND')
// }

// ===== Mantiqiy amallar (if, else) =====

// 1-m

// let a=+prompt('a ning qiymatini kiriting!');

// if (a>0){
//   console.log(true);
//   console.log('a musbat');
// }
// else if(a===0){
//   console.log('musbat ham manfiy ham emas!')
// }
// else{
//   console.log(false);
//   console.log('a manfiy');
// }

// 2-m & 3-m

// let a=+prompt('a ning qiymatini kiriting!');

// if(a>0 && a%2===1){
//   console.log(` ${a} toq son`);
// }
// else if(a>0 && a%2===0){
//   console.log(` ${a} juft son`);
// }
// else if(a===0){
//   console.log(`${a} juft ham toq ham emas`);
// }
// else if(a<0 && (-a)%2===1){
//   console.log(` ${a} toq son`);
// }
// else if(a<0 && (-a)%2===0){
//   console.log(` ${a} juft son`);
// }
// else{
//   console.error('404 NOT FOUND');
// }

// 4-m

// let a = +prompt("a ning qiymatini kiriting!"),
//   b = +prompt("b ning qiymatini kiriting!");

//   if(a===Math.trunc(a) && b===Math.trunc(b)){
//     console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//     console.log('a va b butun sonlar!')
//   }
//   else if(a===Math.trunc(a) && b!==Math.trunc(b)){
//     console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//     console.log('a butun son ammo b butun son emas!')
//   }
//   else if(a!==Math.trunc(a) && b===Math.trunc(b)){
//     console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//     console.log('b butun son ammo a butun son emas!')
//   }
//   else if(a!==Math.trunc(a) && b!==Math.trunc(b)){
//     console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//     console.log('a va b butun son emas!')
//   }

// 5-m

// let a=+prompt('a ning qiymatini kiriting');
// let b=+prompt('b ning qiymatini kiriting');
// let c=+prompt('c ning qiymatini kiriting');

// if(a>b && b>c){
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// 6-m

// let a=+prompt('a ning qiymatini kiriting'),
//  b=+prompt('b ning qiymatini kiriting'),
//  c=+prompt('c ning qiymatini kiriting');

//  if(a>b && b>c || c>b && b>a){
//   console.log(true);
//   }

//   else{
//     console.log(false);
//   }

// 7-m

// let a=+prompt('a ning qiymaqtini kiritin!'),
// b=+prompt('b ning qiymatini kiriting!');

// if(a>0 && b>0 && a%2===1 && b%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a va b toq sonlar!');
// }
// else if(a>0 && b>0 && a%2===0 && b%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a juft son b esa toq son');
// }
// else if(a>0 && b>0 && a%2===1 && b%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a toq son b esa juft son');
// }
// else if(a>0 && b>0 && a%2===0 && b%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a va b toq sonlar emas!');
// }
// else if(a===0 && b===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a va b toq ham juft ham emas!');
// }
// else if(a>0 && b===0 && a%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a juft son va b toq ham juft ham emas!');
// }
// else if(a>0 && b===0 && a%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a toq son va b toq ham juft ham emas!');
// }
// else if(b>0 && a===0 && b%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('b toq son va a toq ham juft ham emas!');
// }
// else if(b>0 && a===0 && b%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('b juft son va a toq ham juft ham emas!');
// }
// else if(a<0 && b===0 && (-a)%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a juft son va b toq ham juft ham emas!');
// }
// else if(a<0 && b===0 && (-a)%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('a toq son va b toq ham juft ham emas!');
// }
// else if(b<0 && a===0 && (-b)%2===1){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('b toq son va a toq ham juft ham emas!');
// }
// else if(b<0 && a===0 && (-b)%2===0){
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
//   console.log('b juft son va a toq ham juft ham emas!');
// }
// else if(a<0 && b<0 && (-a)%2===0 && (-b)%2===0){
//   console.log('a va b juft sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a<0 && b<0 && (-a)%2===1 && (-b)%2===0){
//   console.log('a toq son va b juft son!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a<0 && b<0 && (-a)%2===0 && (-b)%2===1){
//   console.log('a juft son va b toq son!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a<0 && b<0 && (-a)%2===1 && (-b)%2===1){
//   console.log('a va b toq sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a>0 && b<0 && a%2===1 && (-b)%2===1){
//   console.log('a va b toq sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a>0 && b<0 && a%2===0 && (-b)%2===0){
//   console.log('a va b juft sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a<0 && b>0 && (-a)%2===0 && b%2===0){
//   console.log('a va b juft sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }
// else if(a<0 && b>0 && (-a)%2===1 && b%2===1){
//   console.log('a va b toq sonlar!');
//   console.log(`kiritilgan sonlar =>  a=${a}, b=${b}`);
// }

// 8-m

// let a=+prompt('a ning qiymatini kiriting!'),
// b=+prompt('a ning qiymatini kiriting!'),
// c=+prompt('a ning qiymatini kiriting!'),
// d=+prompt('a ning qiymatini kiriting!');

// if(a>0 && b>0 && c>0 && d>0){
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// 9-m

// let a=+prompt('a ning qiymatini kiriting'),
//   b=+prompt('b ning qiymatini kiriting'),
//   c=+prompt('c ning qiymatini kiriting');

//   if(a>0 && b>0 && c>0){
//     console.log(true);
//   }
//   else if(a>0 && b>0 && c<0){
//     console.log(true);
//   }
//   else if(a>0 && c>0 && b<0){
//     console.log(true);
//   }
//   else if(b>0 && c>0 && a<0){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }

// 10-m

// let kun=+prompt('hafta raqamini kiriting!');

// if(kun===1){
//   console.log("Dushanba");
// }
// else if(kun===2){
//   console.log("Seshanba")
// }
// else if(kun===3){
//   console.log("Chorshanba")
// }
// else if(kun===4){
//   console.log("Payshanba")
// }
// else if(kun===5){
//   console.log("Juma")
// }
// else if(kun===6){
//   console.log("Shanba")
// }
// else if(kun===7){
//   console.log("Yakshanba")
// }
// else{
//   console.log("bunday hafta kuni yo'q")
// }

// 11-m

// let a=+prompt('telfon nomer kodini kiriting (2 xonali son)'),
// b=+prompt('5 xonali son kiriting');

// console.log(`+998(${a})${b}`);

// if(a===93 || a===94){
//   console.log('Ucell');
// }
// else if(a===99 || a===95){
//   console.log('Uzmobile');
// }
// else if(a===90 || a===91){
//   console.log('Beeline');
// }
// else if(a===97 || a===88){
//   console.log('Mobiuz');
// }
// else if(a===33){
//   console.log('Humans');
// }
// else if(a>2 && a<2){
//   console.error('404 NOT FOUND')
// }
// else if(b>5 && b<5){
//   console.error('404 NOT FOUND')
// }
// else{
//   console.error('404 NOT FOUND')
// }

// 12-m

// let a=+prompt('sonni kiriting!');

// if(a>0){
//   console.log(`kiritilgan son ${a} ga teng va u musbat shartga ko'ra natija ${++a} ga teng`);
// }
// else if (a===0){
//   console.log(`kiritilgan son ${a} ga teng. Shart bajarilmadi.`);
// }
// else{
//   console.log(`kiritilgan son ${a} ga teng va u manfiy shartga ko'ra natija ${--a} ga teng`);
// }

// 13-m

// let a=+prompt('sonni kiriting!');

// if(a>0){
//   console.log(`kiritilgan son ${a} ga teng va u musbat shartga ko'ra natija ${a+=3} ga teng`);
// }
// else if (a===0){
//   console.log(`kiritilgan son ${a} ga teng. Shart bajarilmadi.`);
// }
// else{
//   console.log(`kiritilgan son ${a} ga teng va u manfiy shartga ko'ra natija ${a-=2} ga teng`);
// }

// 14-m

// let a=+prompt('a ning qiymatini kiriting!'),
// b=+prompt('b ning qiymatini kiriting!');

// if(a>b){
//   console.log(`${a} > ${b}`);
// }
// else if(a===b){
//   console.log('kiritlgan sonlar teng');
// }
// else{
//   console.log(`${b} > ${a}`)
// }

// 15-m

// let a = +prompt("a ning qiymatini kiriting!"),
//   b = +prompt("b ning qiymatini kiriting!"),
//   c = +prompt("c ning qiymatini kiriting!");

//   if(a>b && a>c){
//     console.log(`kiritilgan sonlar ichida eng kattasi ${a} ga teng.`);
//   }
//   else if(b>a && b>c){
//     console.log(`kiritilgan sonlar ichida eng kattasi ${b} ga teng.`)
//   }
//   else if(c>a && c>b){
//     console.log(`kiritilgan sonlar ichida eng kattasi ${c} ga teng.`)
//   }
//   else if(a===b && a===c){
//   console.log('kiritilgan sonlar teng')
// }

// 16-m 


let a = +prompt("a ning qiymatini kiriting!"),
  b = +prompt("b ning qiymatini kiriting!"),
  c = +prompt("c ning qiymatini kiriting!");

  if(a>b && b>c){
    console.log(`kiritlgan sonlar ichida eng kichigi ${c} ga teng`);
  }
  else if(b>a && a>c){
    console.log(`kiritlgan sonlar ichida eng kichigi ${c} ga teng`);
  }
  else if(a>c && c>b){
    console.log(`kiritlgan sonlar ichida eng kichigi ${b} ga teng`);
  }
  else if(c>a && a>b){
    console.log(`kiritlgan sonlar ichida eng kichigi ${b} ga teng`);
  }
  else if(b>c && c>a){
    console.log(`kiritlgan sonlar ichida eng kichigi ${a} ga teng`);
  }
  else if(c>b && b>a){
    console.log(`kiritlgan sonlar ichida eng kichigi ${a} ga teng`);
  }
