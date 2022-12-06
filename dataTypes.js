console.log("Data Types");
var age = 29;
//age="semiha"; // hata alacaktır typescript ile tip koruması yaptık. 
var myName = "Semiha";
var isUpdated = true;
//STRING AND BOOLEAN
//let: değer değişiyorsa kullanılır. 
//const: değer sabitse kullanırız.  
//1.number : 
//hexadecimal,binary ve octal olarak kullanabiliriz.Çıktı olarak hepsinde tamsayı verir. 
var numberUndefined; //console.log(numberUndefined); //undefined çıktı hata. 
var numberFormat = 123;
console.log(numberFormat);
var hexadecimalFormat = 0x37CF;
console.log(hexadecimalFormat);
//2.String :
var firstName = "Semiha";
console.log(firstName); //tek tırmak veya çift tırnat tanımlayabiliriz sorun yoktur.
var lastName = 'Aydin';
console.log(lastName);
//3.Boolean
var isPresent = true;
console.log(isPresent);
//4.Arrays
var names = ["deneme1", "deneme2", "deneme3"];
console.log(names);
var names2 = ["deneme1", "deneme2", "deneme3"];
console.log(names2);
var nonTypes = ['AllTypes', 1, 2, 'Test', 'Sem'];
console.log(nonTypes);
var values = ['Apple', 2, 5, 'Banana']; // yalnızca string ve number değerleri veririz diğer değerlerde patlar.
var values2 = ['Apple', 2, 5, 'Banana'];
console.log(values2[0]);
//5.Tuple, Map gibi düşünebiliriz.Çıktı array gibi gösterilir. 
var tuple1 = [1, "Semiha"];
console.log(tuple1);
var tuple2 = [1, "Semiha", true, 5, false, "Aydin"];
console.log(tuple2);
var tupleArray = [[1, "1"], [2, "2"], [3, "3"]];
console.log(tupleArray);
console.log(tupleArray[0][1]);
//6.Object
var user = {
    firstName: 'Semiha',
    lastName: 'Aydin',
    age: 25,
    jobTitle: 'software engineer'
};
// console.log(user.age); // hata alır.
var person;
person = {
    firstName: 'Semiha',
    lastName: 'Aydin',
    age: 25,
    jobTitle: 'software engineer'
};
console.log(person.age);
//7.Enum
var SocialMedia;
(function (SocialMedia) {
    SocialMedia[SocialMedia["Facebook"] = 0] = "Facebook";
    SocialMedia[SocialMedia["Twitter"] = 1] = "Twitter";
    SocialMedia[SocialMedia["Instagram"] = 2] = "Instagram";
    SocialMedia[SocialMedia["Youtube"] = 3] = "Youtube";
})(SocialMedia || (SocialMedia = {}));
;
console.log(SocialMedia.Twitter); //Çıktı 1 olur 
console.log(SocialMedia[0]); //Çıktı Facebook olur 
var Readable;
(function (Readable) {
    Readable["Book"] = "Book";
    Readable["Newspaper"] = "Newspaper";
    Readable["Magazine"] = "Magzine";
})(Readable || (Readable = {}));
;
console.log(Readable.Book); // Çıktı book olur 
//8.Union
//Bir type string veya number olsun demek istersek union type kullanırız. 
var code = true;
console.log(code);
code = "Test";
console.log(code);
code = 8;
console.log(code);
//9.Any
//Çok tavsiye edilmeyen bir veri tipi. Any denilen bir type için number,string,boolean,obje,array olabilir.
//Tip korumasına izin vermeyiz.
console.log("-----------ANY------");
var something = "Ben herşey olurum";
something = 5;
console.log(something);
something = true;
console.log(something);
var myPerson;
myPerson = { firstname: "My", lastName: "Person", age: 55 };
something = myPerson;
console.log(something);
//9.void 
//geri dönüş tipi olmayan yapıdır.
console.log("-----------VOID------");
function sayHello() {
    console.log("Say Hello Mehod call");
}
sayHello();
//10.never geriye hiçbir değer dönmeyeceğini söyleriz. Genelde hata fırlatan yapılarda kullanırız. 
/* console.log("-----------NEVER------");
     function hataFirlat(errorMsg:string) : never {
         throw new Error(errorMsg);
     }
 hataFirlat("Hatayim");*/
//void geriye undefined gönderir.
//10.type Inference 
console.log("-----------TYPE INFERENCE------");
var sayac = 0;
var sayac2 = 0;
console.log(typeof (sayac)); // çıktı number yazar
console.log(typeof (sayac2)); // çıktı number yazar
//Ne işe yarar?
function sum(a, b) {
    return a + b;
}
//let total:string=sum(5,7);  -> hata verir.
//10.type Casting typecasting işlemidir.
console.log("-----------TYPE Casting------");
var myCodeX = "1";
console.log(typeof (myCodeX)); //string 
var myCodeY = myCodeX;
console.log(typeof (myCodeY)); //string 
