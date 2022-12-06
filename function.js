console.log("Myfunction");
//1.return
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//2.void 
function print() {
    console.log("return nothing");
}
print();
//3.concat
function myConcat(name, surname) {
    console.log(name + " " + surname);
}
console.log(myConcat("Semiha", "Aydin"));
console.log(myConcat("Semiha", "Aydin"));
//3.optional
function multiple(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    else {
        return a * b;
    }
}
console.log(multiple(5, 10, 2));
console.log(multiple(8, 10));
var carpim = function (a, b) {
    return a * b;
};
console.log(carpim(5, 1));
var printWithArrow = function () { return console.log("Heelliio"); };
console.log(printWithArrow());
function addOverloadingFunction(a, b) {
    return a + b;
}
console.log(addOverloadingFunction(5, 4));
console.log(addOverloadingFunction("Master", "Degree"));
//4.rest Parametre : bir functiona istediğimiz kadar değer atayabilmek için kullanırız. 
function toplam() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(toplam(1, 2, 5, 585, 52));
console.log(toplam(1, 2, 5, 7, 1));
console.log(toplam(1, 2));
console.log(toplam(1, 2, 5, 10));
