// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(+prompt("Nhập giá trị vào mảng: "))  
// }
// console.log("Các phần từ của mảng là: ");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log("Các phần tử chẵn của mảng là: ");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 === 0){
//         console.log(arr[i]);
//         sum += arr[i];
//     }
// }
// console.log("Tổng các số chẵn là: ", sum);
// console.log("Các phần tử lẻ của mảng là: ");
//     sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 !== 0){
//         console.log(arr[i]);
//         sum += arr[i];
//     }
// }
// console.log("Tổng các số lẻ là: ", sum);
// console.log("các số nguyên tố trong mảng là: ");

// for (let i = 0; i < arr.length; i++) {
//     let isCheck = false;
//     if(arr[i] <=1)
//         continue;
//     for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//         if(arr[i] % j === 0) {
//             isCheck = true;
//             break;
//         }
//     }
//     if(!isCheck) {
//         console.log(arr[i]);
//     }
// }

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i] > max) 
//     max = arr[i];
// }
// console.log("Phần tử lớn nhất là: ", max);

// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i] < min) 
//     min = arr[i];
// }
// console.log("Phần tử nhỏ nhất là: ", min);
// console.log("Các giá trị của mảng sau khi sắp xếp là: ");
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j =  i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let tem = arr [i];
//             arr[i] = arr[j];
//             arr[j] = tem;
//         }
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let searchNum = +prompt("Nhập vào 1 số nguyên để tìm trong mảng")
// let searchArr = arr.filter(function (value) {
//     return value === searchNum
// })
// console.log(`số phần tử trong mảng là số ${searchNum} là ${searchArr.length}`);
// Mảng 2 chiều
// let hang = +prompt("Nhập số hàng mảng 2 chiều")
// let cot = +prompt("Nhập số cột mảng 2 chiều")
// let mang2Chieu = []
// for (let i = 0; i < hang; i++) {
//     let mang1Chieu = []
//     for (let j = 0; j < cot; j++) {
//         mang1Chieu.push(+prompt(`Nhập giá trị hàng ${i} cột ${j} `));
//     }
//     mang2Chieu.push(mang1Chieu)
// }
// console.log(mang2Chieu);
// console.log("Các giá trị của mảng là: ");
// for (let i = 0; i < hang; i++) {
//     for (let j = 0; j < cot; j++) {
//         console.log(mang2Chieu[i][j]);
//     }
// }
// console.log("Các phần tử nằm trên đường biên là: ");
// for (let i = 0; i < hang; i++) {
//   for (let j = 0; j < cot; j++) {
//     if (i == 0 || i == hang - 1 || j == 0 || j == cot - 1) {
//       console.log(mang2Chieu[i][j]);
//     }
//   }
// }
// console.log("Các phần tử nằm trên đường chéo chính là: ");
// for (let i = 0; i < hang; i++) {
//   for (let j = 0; j < cot; j++) {
//     if (i == j) {
//       console.log(mang2Chieu[i][j]);
//     }
//   }
// }

// console.log("Các phần tử nằm trên đường chéo phụ là: ");
// for (let i = 0; i < hang; i++) {
//   for (let j = 0; j < cot; j++) {
//     if (i == hang - j - 1) {
//       console.log(mang2Chieu[i][j]);
//     }
//   }
// }

// console.log("Mảng sắp xếp theo dòng là: ");
// // sort ko dùng hàm sort
// for (let i = 0; i < hang; i++) {
//     for (let j = 0; j < cot; j++) {
//         for (let k = 0; k < cot; k++) {
//             if (mang2Chieu[i][j] < mang2Chieu[i][k]) {
//                let tem = mang2Chieu[i][j];
//                mang2Chieu[i][j] = mang2Chieu[i][k];
//                mang2Chieu[i][k] = tem;
//             }   
//         }
//     }
// }
// // sort theo hàm sort
// for (let i = 0; i < hang; i++) {
//     mang2Chieu[i].sort((a,b) => a-b);
// }
// console.log(mang2Chieu);

// var style = ["Jazz", "Blues"];
// // thêm phần tử Rock-n-Roll vào cuối mảng
// style.push("Rock-n-Roll");
// if(style.length % 2 != 0){
//     style[Math.floor(style.length/2)] = "Classics";
// }
// // Xóa phần từ đầu tiên và hiển thị mảng
// style.shift();
// console.log(style);
// style.splice(0,0,"Rap","Reggae");
// console.log(style);

// let arr = [];
// while (true) {
//     let value = parseInt(prompt("Nhập giá trị cho mảng: "));
//     if(isNaN(value))
//     break;
//     else
//     arr.push(value);
// }
// // Tổng các giá trị của mảng là
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// // console.log(sum);
// BT05
// let arrSoNguyen = [];
// let a = +prompt("Nhap vao so nguyen a: ");
// let b = +prompt("Nhap vao so nguyen b: ");

// for (let i = a + 1; i < b; i++) {
//     arrSoNguyen.push(i);
// }


// Bai tap tren LMS
// Bai tap 1 
// Sử dụng các hàm có sẵn của mảng
// Bài 1
var myColor = ["Red", "Green", "Blue"];
myColor.join();
// Bài 2
var arr = [0,4,3,5,6,8];
var arrCoDau = [];
for (let i = 0; i < arr.length - 1; i++) {
  arrCoDau.push(arr[i]);
  if(arr[i] % 2 ==0 && arr[i + 1] % 2 ==0){
    arrCoDau.push("-");
  }
}
arrCoDau.push(arr[arr.length - 1]);
console.log(arrCoDau.join(""));
// Bài 3
var str = "The Quick Brown Fox";
var strDaoNguocChuHoaThuong = "";
for (let i = 0; i < str.length; i++) {
    if("a" <= str[i] && str[i] <= "z"){
      strDaoNguocChuHoaThuong+=str[i].toUpperCase();
    }else {
      strDaoNguocChuHoaThuong+=str[i].toLowerCase();
    }
}
console.log(strDaoNguocChuHoaThuong);
// Bài tập 2 Ứng dụng từ điển 

// Bài tập 3 Ứng dụng vui Faking TextArea
let str3 = "Mày Ngu Quá ";
let strHienThi = "";
let count = 0;
let textArea = document.getElementById("textArea");
textArea.onkeyup = function() {
    if(count < str3.length) {
        strHienThi +=str3[count];
        count++;
        textArea.value = strHienThi;
    } else {
        count = 0;
        textArea.value = "";
        strHienThi = ""
    }
    
}