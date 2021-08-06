var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var data = /** @class */ (function () {
    function data(i, n, m) {
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
    data.prototype.show = function () {
        console.log("Id is " + this.id);
        console.log("Name is " + this.Name);
        console.log("Marks is " + this.Marks);
    };
    return data;
}());
;
var i = [];
var recursiveFunc = function () {
    rl.question('Enter ID ', function (id) {
        rl.question('Enter Name ', function (Name) {
            rl.question('Enter Marks ', function (Marks) {
                rl.question('Do You Want To Enter More Values? Y/N ', function (answer4) {
                    if (answer4 == "n" || answer4 == "N") {
                        var obj = new data(id, Name, Marks);
                        i.push(obj);
                        console.log(JSON.stringify(i));
                        rl.close();
                    }
                    else {
                        var obj = new data(id, Name, Marks);
                        i.push(obj);
                        recursiveFunc();
                    }
                });
            });
        });
    });
};
recursiveFunc();
