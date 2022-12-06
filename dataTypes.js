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
