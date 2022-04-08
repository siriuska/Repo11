var myStr = "Paragon is the best!";

function useMethods(str) {

    var myReverse;
    var countCharacters;

    var words = str.split(" ");

    words = words.reverse();

    countCharacters = words.map((y) => y.length);

    words = words.map((z) => z.split("").reverse().join(""));

    myReverse = words.join(" ");

    return { myReverse, countCharacters };
}

console.log(useMethods(myStr));

module.exports = useMethods;