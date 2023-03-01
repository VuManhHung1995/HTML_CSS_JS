// Bài tập trên lớp 
// BT01 
// let num = parseInt(prompt("Nhập vào số nguyên: "));
// if(!isNaN(num)) {
//     num % 2 == 0 ? console.log("số nhập vào là số chẵn")
//     :console.log("số nhập vào là số lẻ");
// } else {
//     console.log("giá trị nhập vào không phải số");
// }

// BT02 
// let year = parseInt(prompt("Nhập vào năm cần tính năm nhuận: "));
// if (!isNaN(year)) {
//     let isCheckYear = false;
//     if(year % 4 == 0 ) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0)
//             isCheckYear = true;
//         } else {
//             isCheckYear = true;
//         }
//     }
//     isCheckYear ? console.log("năm nhập vào là năm nhuận")
//     :console.log("năm nhập vào là năm không nhuận");
// } else {
//     console.log("giá trị nhập vào không phải số");
// }
// BT03
// let busCharge = parseInt(prompt("Nhập vào giá vé xe bus: "));
// let age = parseInt(prompt("Nhập vào tuổi người đi xe bus: "));
// if (!isNaN (busCharge) && !isNaN(age)) {
//     let chargedMoneyPercent = 1;
//     if (age < 6 )
//     chargedMoneyPercent = 0;
//     else if (6 < age <= 18)
//     chargedMoneyPercent = 0.5;
//     else if (18 < age <= 55)
//     chargedMoneyPercent = 1
//     else 
//     chargedMoneyPercent = 0
//     console.log("số tiền phải trả là: " + chargedMoneyPercent*busCharge);
// } else {
//     console.log("Giá trị nhập vào không phải số");
// }
// BT04 

// let oldPower = parseInt(prompt("Nhập vào số điện tiêu dùng cũ: "));
// let newPower = parseInt(prompt("Nhập vào số điện tiêu dùng mới: "));
// if (!isNaN (oldPower) && !isNaN(newPower) && (newPower > oldPower) && oldPower > 0 && newPower > 0 ){
//     let monthlyCharge = 10000;
//     let powerCharge;
//     let powerVolume = newPower - oldPower;
//     if (0 < powerVolume <= 50)
//         powerCharge = powerVolume*700;
//     else if (50 < powerVolume <= 100)
//         powerCharge = 50*700 + (powerVolume - 50)*900;
//     else if (100 < powerVolume <= 150)
//         powerCharge = 50*700 + 50*900 + (powerVolume - 100)*1100;
//     else 
//         powerCharge = 50*700 + 50*900 + 50*1100 + (powerVolume - 150)*1300;
// console.log("số tiền phải trả là: " + (monthlyCharge + powerCharge) + "đ")
// } else {
//     console.log("giá trị nhập không phải số hoặc giá trị số điện mới nhỏ hơn số cũ hoặc giá trị nhập vào âm");
// }

// BT05
// let a = parseInt(prompt("Nhập giá trị cạnh a:"));
// let b = parseInt(prompt("Nhập giá trị cạnh b:"));
// let c = parseInt(prompt("Nhập giá trị cạnh c:"));
// if ( a == b && b == c)
//     console.log("Tam giác đều");
// else if (a == b || b == c || c == a) {
//     if(a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b)
//     console.log("Tam giác vuông cân");
//     else
//     console.log("Tam giác cân");
// }
// else if (a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b)
//     console.log("tam giác vuông");
// else 
//     console.log("tam giác thường");

// BT06
// let month = parseInt(prompt("Nhập giá trị tháng:"));
// let year = parseInt(prompt("Nhập giá trị năm:"));
// let days;
// let isCheckYear = false;
// if(year % 4 == 0 ) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0)
//         isCheckYear = true;
//     } else {
//         isCheckYear = true;
//     }
// }
// switch(month) {
//     case 2:
//         if(!isCheckYear) {
//         days = 29;
//         } else
//         days = 28;
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//     break;
//     default:
//         days = 31;
//     break;
//   }
// console.log("tháng nhập vào có: " + days + " ngày");

// BT07
// let a = parseInt(prompt("Nhập giá trị số a:"));
// let b = parseInt(prompt("Nhập giá trị số b:"));
// if (a == 0 && b == 0)
//     console.log("Phương trình vô số nghiệm");
// else if (a == 0 && b != 0)
//     console.log("Phương trình vô nghiệm");
// else {
//     let x = -b/a;
//     console.log("Nghiệm của phương trình là x =", x);
// }
// BT08
// let a = parseInt(prompt("Nhập giá trị số a:"));
// let b = parseInt(prompt("Nhập giá trị số b:"));
// let c = parseInt(prompt("Nhập giá trị số c:"));

// if (a == 0) {
//     if (b == 0 && c == 0)
//         console.log("Phương trình có vô số nghiệm");
//     else if (b == 0 && c != 0)
//         console.log("Phương trình vô nghiệm");
//     else
//         console.log("Phương trình có một nghiệm là: ", -c/b);
// } else {
//     let delta = b*b - 4*a*c;
//     if (delta < 0)
//         console.log("Phương trình vô nghiệm");
//     else if (delta == 0)
//         console.log("Phương trình có nghiệm kép là: ", -b/(2*a));
//     else {
//       let x1 = (-b + Math.sqrt(delta))/(2*a);
//       let x2 = (-b - Math.sqrt(delta))/(2*a);
//       console.log("Phương trình có hai nghiệm: x1 =" + x1 + "và x2 =" + x2);
//     }
// }
// BT09

// let html = parseInt(prompt("Nhập vào điểm HTML:"));
// let css = parseInt(prompt("Nhập vào điểm CSS:"));
// let js = parseInt(prompt("Nhập vào điểm JS:"));

// let dTB = (html + css + js) / 3;
// let xloai = "";
// if (dTB >= 8) 
//     xloai = "Giỏi";
// else if (6.5 <= dTB < 8)
//     xloai = "Khá";
// else if (3.5 <= dTB < 6.5)
//     xloai = "Yếu";
// else 
//     xloai = "Kém";
// console.log("Xếp loại của học viên là: " + xloai);
