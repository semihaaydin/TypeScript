console.log("Myfunction");
//1.return
        function add(a:number,b:number):number{
            return a+b;
        }
        console.log(add(10,20));
//2.void 
        function print():void{
            console.log("return nothing")
        } print();
//3.concat
        function myConcat(name:string,surname:string){
            console.log(name+" "+surname);
        } console.log(myConcat("Semiha","Aydin"));  console.log(myConcat("Semiha","Aydin")); 
        
//3.optional
        function multiple(a:number,b:number,c?:number):number{
            if(c!==undefined){
                return a*b*c;
            } else {
                return a*b;
            }
           
        } console.log(multiple(5,10,2));  console.log(multiple(8,10));

 
let carpim=(a:number,b:number):number => { 
    return a*b;
};console.log(carpim(5,1));

let printWithArrow = () => console.log("Heelliio");
console.log(printWithArrow());

//3.overloading : parametre sayıları aynı aldığı parametre değerleri farklı olan functionlar

function addOverloadingFunction(a:number,b:number):number;
function addOverloadingFunction(a:string,b:string):string;

function addOverloadingFunction(a:any,b:any):any{
    return a+b;
}

console.log(addOverloadingFunction(5,4));
console.log(addOverloadingFunction("Master","Degree"));

//4.rest Parametre : bir functiona istediğimiz kadar değer atayabilmek için kullanırız. 

function toplam(...numbers:number[]):number{
    let total=0;
    numbers.forEach((num)=> total +=num);
    return total;
}
console.log(toplam(1,2,5,585,52));
console.log(toplam(1,2,5,7,1));
console.log(toplam(1,2));
console.log(toplam(1,2,5,10));

