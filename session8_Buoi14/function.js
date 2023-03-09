// 1.
function thongBao() {
    console.log("Xin chào Rikkei Academy");
}
// 2.
function tinhBinhPhuong(num) {
    return Math.pow(num, 2);
}
// 3.
function tinhTheKi() {
    let num = +prompt("Nhap 1 nam bat ki de tinh the ki: ");
    return Math.ceil(num/100);
}
// 4.
function catChuoi(str) {
    return `${str.slice(0,10)}...`
}
// 5.
function chuanHoa(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
}
// 6. 
function timMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
// 7.
// Kiem tra chan-le
function kiemTraChanLe(num) {
    return num % 2 === 0;
  }
// Kiem tra so nguyen to
function checkSoNT(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
//   Kiem tra so hoan hao
function kiemTraSoHoanHao(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum == num;
  }
// 8.
function trungBinhMangSo(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function inSoNT(number) {
    let num = 2;
    let count = 0;
    let arrSNT = [];
    while (count < number) {
        if(checkSoNT(num)){
            arrSNT.push(num);
            count++;
        }
    num++; 
    }
    console.log(arrSNT);
}

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
// Bài tập 2