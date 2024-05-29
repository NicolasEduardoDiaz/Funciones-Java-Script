const saludar = (function(){
    let num = 0;
    return function(){
        num++;
        return num
    }
})()

console.log(saludar());
console.log(saludar());
console.log(saludar());