// // BT01
// let a = parseInt(prompt("Nhập vào số a :"));
// let b = parseInt(prompt("Nhập vào số b :"));
// if(isNaN(a)||isNaN(b)) {
//     console.log("Bạn đã nhập giá trị không phải số");
// } else {
//     console.log("Tổng là: " + (a+b));
//     console.log("Hiệu là: " + (a-b));
//     console.log("Thương là: " + (a*b));
//     console.log("Tích là: " + (a/b));
// }
// // BT02
// let cD = parseInt(prompt("Nhập vào chiều dài :"));
// let cR = parseInt(prompt("Nhập vào chiều rộng :"));
// if(isNaN(cD)||isNaN(cR)) {
//     console.log("Bạn đã nhập giá trị không phải số");
// } else {
//     console.log("Chu vi là: " + (cD+cR)*2);
//     console.log("Hiệu là: " + cD*cR);
// }
// // BT03
// let birthYear = parseInt(prompt("Nhập vào năm sinh của bạn :"));
// if(isNaN(birthYear)) {
//         console.log("Bạn đã nhập giá trị không phải số");
//     } else {
//         var age = (new Date()).getFullYear() - birthYear
//         console.log("Tuổi của bạn là : " + age)
//     }

// // BT04
// let num = parseInt(prompt("Nhập vào số có 3 chữ số :"));

//     if(num < 100 || num > 999 || isNaN(num)) {
//         console.log("Bạn đã nhập số lớn hơn 3 chữ số hoặc giá trị nhập ko phải số");
//     }else {
//         console.log("Số hàng trăm: " + Math.floor(num/100));
//         console.log("số hàng chục: " + Math.floor((num%100)/10));
//         console.log("số hàng đơn vị: " + num%10);
//     }

// // BT05
// let str = prompt("Nhập vào chuỗi kí tự :")
// let reversedStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   console.log("Chuỗi đảo ngược là: " + reversedStr);

// BT trên LMS 
// BT01 
// let VL = parseInt(prompt("Nhập vào điểm VL :"));
// let HH = parseInt(prompt("Nhập vào điểm HH :"));
// let SH = parseInt(prompt("Nhập vào điểm SH :"));
//     if(isNaN(VL) || isNaN(HH) || isNaN(SH)) {
//         console.log("giá trị nhập ko phải số");
//     }else {
//         console.log("Điểm trung bình là " + (VL + HH + SH) / 3);
//         console.log("Điểm tổng là : " + VL + HH + SH);
//         console.log("số hàng đơn vị: " + num%10)
//     }
// BT02
// let doC = parseInt(prompt("Hãy nhập giá trị độ C :"));
//     if(isNaN(doC)) {
//         console.log("giá trị nhập ko phải số");
//     }else {
//         console.log("Độ F: " + 9*doC/5 + 32);
//     }
// // BT03 + BT04
// let r = parseInt(prompt("Hãy nhập bán kính đường tròn :"));
    // if(isNaN(r)) {
    //     console.log("giá trị nhập ko phải số");
    // }else {
    //     console.log("diện tích: " + r*r);
    //     console.log("chu vi: " + 2*Math.PI*r);
    // }