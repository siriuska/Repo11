arr1 = ["hello", "hey"];
arr2 = ["hello", "Hello"];
arr3 = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
arr4 = ["Mary", "Army"];
arr5 = ["Mary", "Aarmy"];
arr6 = ["Alien", "line"];
arr7 = ["floor", "for"];
arr8 = ["hello", "neo"];
arr9 = ["voodoo", "no"];
arr10 = ["ate", "date"];
arr11 = ["Tiger", "Zebra"];
arr12 = ["Noel", "Ole"];

function myMutation(arr) {
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase();
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            return false;
        }
    }
    return true;
}


console.log(myMutation(arr1));
console.log(myMutation(arr2));
console.log(myMutation(arr3));
console.log(myMutation(arr4));
console.log(myMutation(arr5));
console.log(myMutation(arr6));
console.log(myMutation(arr7));
console.log(myMutation(arr8));
console.log(myMutation(arr9));
console.log(myMutation(arr10));
console.log(myMutation(arr11));
console.log(myMutation(arr12));

module.exports = myMutation;