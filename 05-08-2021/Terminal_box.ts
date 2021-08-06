const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class data{
    id;
    Name;
    Marks;
    constructor(i,n,m){
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
    // show(){
    //     console.log(`Id is ${this.id}`);
    //     console.log(`Name is ${this.Name}`);
    //     console.log(`Marks is ${this.Marks}`);  
    // }
};
var i = [];
var w = 0;
var recursiveFunc = function(){

rl.question('Enter ID ', (id) => {
    rl.question('Enter Name ', (Name) => {
        rl.question('Enter Marks ', (Marks) => {
            rl.question('Do You Want To Enter More Values? Y/N ', (answer4) =>{

                if (answer4 == "n" || answer4 == "N"){
                    var obj = new data(id,Name,Marks);
                    i.push(obj);
                    // console.log(i);
                    for (let q=0; q<i.length; q++){
                    console.log(`Name is: ${i[q].Name}`);
                    console.log(`Marks is: ${i[q].Marks}`);
                    console.log(`id is: ${i[q].id}`);
                    }
                    rl.close();
                }
                else{
                    var obj = new data(id,Name,Marks);
                    i.push(obj);
                    w++;
                    recursiveFunc();
                }
        });
    });
});
});
};

recursiveFunc();