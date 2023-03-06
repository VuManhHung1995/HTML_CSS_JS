// // BT trên lớp
// // BT01
// let arr = [1,9,8,7,12,5,4,11];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i] > max)
//         max = arr[i]
// }
// console.log(`số lớn nhất là ${max}`);
// // BT02
// let arr1 = [1,9,8,7,12,5,4,11];
// for (let i = 0; i < arr1.length - 1; i++) {
//     for (let j =  i + 1; j < arr1.length; j++) {
//         if (arr1[i] > arr1[j]) {
//             let tem = arr1 [i];
//             arr1[i] = arr1[j];
//             arr1[j] = tem;
//         }
//     }
// }
// console.log(arr1);
// // BT03
// let arr2 = [1,1,1,1,5,5,5,4,8,4,4,6,7,9,9,7];
// let newArr = arr2.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
//   });
// console.log(newArr);

// Bài tập LMS
// BT01 Tính chỉ số cân nặng
// let weight = +prompt("Nhập vào cân nặng");
// let height = +prompt("Nhập vào chiều cao");
// let bmi = weight / ( Math.pow(height,2) );
// if (bmi < 18.5)
//         console.log("Cân nặng gầy");
//     else if (18.5 <= bmi < 25.0)
//         console.log("Bình thường");
//     else {
//         console.log("Thừa cân");
//         if(25 <= bmi < 29.9) 
//             console.log("Tiền béo phì");
//         else if(30 <= bmi < 34.9) 
//             console.log("Béo phí I");
//         else if(35 <= bmi < 39.9) 
//             console.log("Béo phí II");
//         else
//             console.log("Béo phí III");
//     }

// BT02 tính số ngày theo tháng

// document.getElementById('tinh').onclick = function() {
// let month = document.getElementById("thang").value;
// let days;
// switch(month) {
//     case "2":
//         days = "28 or 29";
//     break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         days = 30;
//     break;
//     default:
//         days = 31;
//     break;
//   }
//       document.getElementById("hienThi").innerHTML = `tháng ${month} có: ${days} ngày`;
//   }

// BT03 máy tính đơn giản 

var arrsTd = document.querySelectorAll("td:not([colspan])");
for (const item of arrsTd) {
    item.onclick = (e) => {
        handle(e);
    }
}
let a,b,phepTinh;
function handle(e) {
    let val = e.target.innerHTML;
    switch (val) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            document.getElementById("manHinh").innerHTML += val;
            break;
        case "+":
        case "-":
        case "x":
        case "/":
            a = document.getElementById("manHinh").innerHTML;
            phepTinh = val;
            document.getElementById("manHinh").innerHTML = "";
            break;
        case "=":
            b = document.getElementById("manHinh").innerHTML;
            eval(phepTinh, a, b);
            break;
    }
}

function eval(phepTinh, a, b) {
    console.log(phepTinh, a, b);
    switch (phepTinh) {
        case "+":
            document.getElementById("manHinh").innerHTML = (+a) + (+b)
            break;
        case "-":
            document.getElementById("manHinh").innerHTML = (+a) - (+b)
            break;
        case "x":
            document.getElementById("manHinh").innerHTML = (+a) * (+b)
            break;
        case "/":
            document.getElementById("manHinh").innerHTML = (+a) / (+b)
            break;
    }
}

// BT04 Do You Love Me

document.getElementById("yes").onclick = function() {
    alert("<3")
}
let windowHeight = window.innerHeight;
let windowWidth = window.window.innerWidth;
document.getElementById("No").onmouseover = function(e) {
    e.target.offsetTop = Math.random().windowHeight;
    e.target.offsetWidth = Math.random.windowWidth;
}

// BT05
var inputs = document.querySelectorAll("span+input");
var good = true, fast = true, cheap = false;
for (const input of inputs) {
    input.onclick = function(e) {
        xuLiClick(e);
    }
}
function xuLiClick(e) {
    switch (e.target.id) {
        case "good":
            if(fast && cheap){
                good = true;
                cheap = false;
                document.getElementById("cheap").checked = false
            }
            break;
        case "fast":
            if(good && cheap){
                fast = true;
                good = false;
                document.getElementById("good").checked = false
            }
            break;
        case "cheap":
            if(fast && good){
                cheap = true;
                fast = false;
                document.getElementById("fast").checked = false
            }
            break;
    }
}