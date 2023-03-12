// // 1.
// function thongBao() {
//     console.log("Xin chào Rikkei Academy");
// }
// // 2.
// function tinhBinhPhuong(num) {
//     return Math.pow(num, 2);
// }
// // 3.
// function tinhTheKi() {
//     let num = +prompt("Nhap 1 nam bat ki de tinh the ki: ");
//     return Math.ceil(num/100);
// }
// // 4.
// function catChuoi(str) {
//     return `${str.slice(0,10)}...`
// }
// // 5.
// function chuanHoa(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
// }
// // 6. 
// function timMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// // 7.
// // Kiem tra chan-le
// function kiemTraChanLe(num) {
//     return num % 2 === 0;
//   }
// // Kiem tra so nguyen to
// function checkSoNT(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// //   Kiem tra so hoan hao
// function kiemTraSoHoanHao(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
//     return sum == num;
//   }
// // 8.
// function trungBinhMangSo(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// function inSoNT(number) {
//     let num = 2;
//     let count = 0;
//     let arrSNT = [];
//     while (count < number) {
//         if(checkSoNT(num)){
//             arrSNT.push(num);
//             count++;
//         }
//     num++; 
//     }
//     console.log(arrSNT);
// }

// let arr = ["a","b","c","a","b","c","a","b","c"]
// let newArr = [];

// function createSet(start, end, callback) {
//   if (start <= end) {
//     callback(start);
//     return createSet(start + 1, end, callback);
//   }
//   return newArr
// }

// console.log(createSet(0, arr.length - 1, (start) => {
//   if(newArr.indexOf(arr[start]) == -1) {
//     newArr.push(arr[start])
//   }
// }));

// Tạo đồng hồ điện tử

setInterval(time, 1000);
setInterval(playSong,20000);
setInterval(changeImage,10000);

let arrMusic = ["CauHuaChuaVenTronDaiMeoRemix-PhatHuyT4-7096843.mp3", "DoanTuyetNangDiFrexsRemixVersion2-PhatHuyT4-7197830.mp3","EmLaKeDangThuong-PhatHuyT4-8504796.mp3"]
let arrImg = ["cauhuachuaventron.jpg", "daotuyetnangdi.jpg", "loi-bai-hat-em-la-ke-dang-thuong-700.jpg"]
function time() {
    let today = new Date()
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById("hour").innerHTML = hour; 
    document.getElementById("minute").innerHTML = minute; 
    document.getElementById("second").innerHTML = second; 

}
function randomValue(length) {
    return Math.floor(Math.random() * length);
}
function playSong() {
    let num = randomValue(arrMusic.length);
    document.getElementById("audio").src = `./audio/${arrMusic[num]}`;
}
function changeImage() {
    let num = randomValue(arrImg.length);
    document.getElementsByTagName("body")[0].style.backgroundImage = `url("./image/${arrImg[num]}")`;
}

// Tạo đồng hồ đếm ngược
