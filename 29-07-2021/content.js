const fs = require("fs");
let text = fs.readFileSync("1.txt", "utf-8");
let lengthtext = text.length;
for (let i = 0; i<lengthtext; i++){
    text = text.replace("a" , "");
    text = text.replace("e" , "");
    text = text.replace("i" , "");
    text = text.replace("o" , "");
    text = text.replace("u" , "");
}

const txt = fs.writeFileSync("Node.txt", text);