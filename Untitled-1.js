// const Uplitte = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const Lowlitter = 'abcdefghijklmnopqrstuvwxyz'.split('');
// function encodeToRot13(str) {
//   const rot = [];
//   let k;
//   for (const i of str) {
//     if (i.startsWith(' ') || i.startsWith('!') || i.startsWith('?') || i.startsWith('.') || i.startsWith(',')) {
//       rot.push(i);
//       continue;
//     }
//     if (i === i.toLowerCase()) {
//       k = Lowlitter.indexOf(i) + 13;

const { RuleTester } = require("eslint")

//       if (Number(Lowlitter.length - 1) >= k) {
//         rot.push(Lowlitter[k]);
//       } else {
//         rot.push(Lowlitter[k - Number(Lowlitter.length - 1) - 1]);
//       }
//     } else if (i === i.toUpperCase()) {
//       k = Uplitte.indexOf(i) + 13;

//       if (Number(Uplitte.length - 1) >= k) {
//         rot.push(Uplitte[k]);
//       } else {
//         rot.push(Uplitte[k - Number(Uplitte.length - 1) - 1]);
//       }
//     }
//   }
//   return rot.join('');
// }
// console.log(encodeToRot13('hello'));

// function doubleArray( arr ) {

// }

let arr =  [ 1, 2, 3, 4, 5];

function getArrayOfPositives(arr) {
  return arr.filter(e =>  typeof e === 'string' || e instanceof String)
}

console.log(getArrayOfPositives(arr))


