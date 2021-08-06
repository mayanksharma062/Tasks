var Prompt_Box = /** @class */ (function () {
    function Prompt_Box() {
    }
    Prompt_Box.prototype.show = function () {
        var Arguments = 1;
        do {
            var id = prompt('Enter id: ');
            var name = prompt('Enter name: ');
            var marks = prompt('Enter marks: ');
            var choice = prompt('You want to continue? ');
            var data = document.getElementById('Data');
            var Data1 = document.createElement('div');
            Data1.setAttribute('id', 'Id' + Arguments);
            data.appendChild(Data1);
            var Data2 = document.createElement('div');
            Data2.setAttribute('id', 'Name' + Arguments);
            data.appendChild(Data2);
            var Data3 = document.createElement('div');
            Data3.setAttribute('id', 'Marks' + Arguments);
            data.appendChild(Data3);
            document.getElementById('Id' + Arguments).innerHTML = "Id: " + id;
            document.getElementById('Name' + Arguments).innerHTML = "Name: " + name;
            document.getElementById('Marks' + Arguments).innerHTML = "Marks: " + marks;
            Arguments++;
        } while (choice == 'y');
    };
    return Prompt_Box;
}());
window.onload = function () {
    console.log('enter in click function');
    var obj = new Prompt_Box();
    obj.show();
};
