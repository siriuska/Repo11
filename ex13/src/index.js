var str = "Paragon!";

function myReverse(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(myReverse(str));
module.exports = myReverse;