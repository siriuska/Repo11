var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
temps[0][2]

function myArrayFunction(celsius) {
    var averageDayTemp = [];
    var sum = 0;

    for (var i = 0; i < celsius.length; i++) {
        sum = 0;
        for (var j = 0; j < celsius[i].length; j++) {
            sum += celsius[i][j];
        }
        averageDayTemp.push(sum / 4);
    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));

module.exports = myArrayFunction;