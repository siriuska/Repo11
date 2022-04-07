var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(newPar) {
    var monitorsList = [];
    for (var i = 0; i < 3; i++) {
        monitorsList.push([newPar[i], i + 1]);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;