var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var pt = [];
for (var i = 0; i < 11; i++) {
    if (numbers.indexOf(i) === -1)
        pt.push(i);
}
console.log(pt);
// let kt: boolean[] = [];
//
// for (let i: number = 0; i < numbers.length; i++) {
//     kt[numbers[i]] = true;
// }
//
// for (let i: number = 0; i < 11; i++) {
//     if (!kt[i]) pt.push(i);
// }
//
// console.log(pt)
