// Bài tập trên lớp 
// BT01 
// let n1 = parseInt(prompt("Nhập vào 1 số bất kì: "));
// for (let i = 0; i <= n1; i+=2) {
//     console.log(i);
// }
// BT02
// let n2 = parseInt(prompt("Nhập vào 1 số bất kì: "));
// let sum = 0;
// for (let i = 1; i <= n2; i++){
//     sum+=i;
// }
// console.log("Tổng là: ", sum);
// BT03
// let a = parseInt(prompt("Nhập vào 1 số bất kì: "));
// let b = parseInt(prompt("Nhập vào 1 số bất kì: "));
// let c = parseInt(prompt("Nhập vào 1 số bất kì: "));
// if (a > b && a > c) 
//     console.log(a, " là số lớn nhất");
// else if ( b > a && b > c) 
//     console.log(b, " là số lớn nhất");
// else 
//     console.log(c, " là số lớn nhất");
// BT04
// let n = parseInt(prompt("Nhập vào số nguyên n: "));
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }
// BT05
// let n = parseInt(prompt("Nhập vào 1 số nguyên n: "));

// let isCheck= true;

// if (n === 1)
//     console.log("không phải là số nguyên tố.");
// else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isCheck = false;
//             break;
//         }
//     }

//     if (isCheck) {
//         console.log(n, " là số nguyên tố.");
//     } else {
//         console.log(n, " không là số nguyên tố.");
//     }
// }

// BT06
// let n = parseInt(prompt("Nhập vào 1 số nguyên n: "));
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i === 0)
//         sum += i;
// }
// if (sum === n)
//     console.log(n, " là số hoàn hảo.");
// else
//     console.log(n, " không phải là số hoàn hảo.");

// BT07
// let str = prompt("Nhập vào số nguyên gồm n chữ số bất kì: ");
// let strRe = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     strRe += str.charAt(i);
// }
// console.log(strRe);
// BT08
// let sum = 0;
// while (true) {
//   let num = parseInt(prompt("Nhập một số nguyên dương: "));
//   if (num < 0) {
//     break;
//   }
//   sum += num;
// }
// console.log("Tổng các số nguyên dương đã nhập là:", sum);
// BT09 

let soTien = parseInt(prompt("Nhập vào số tiền gửi: "));
let soThangGui = parseInt(prompt("Nhập vào số tháng gửi: "));
let laiSuat = parseInt(prompt("Nhập vào lãi suất: "));

for (let i = 0; i < soThangGui; i++) {
    soTien += (soTien*laiSuat)/(12*100)    
}
console.log(soTien);

// BT10
// let n = parseInt(prompt("Nhập vào số nguyên n: "));
// console.log("Các số nguyên tố từ 1 đến", n, "là:");

// for (let num = 2; num <= n; num++) {
//   let isCheck = true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       isCheck = false;
//       break;
//     }
//   }
//   if (isCheck) {
//     console.log(num);
//   }
// }