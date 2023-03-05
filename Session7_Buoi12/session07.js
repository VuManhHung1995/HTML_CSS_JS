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