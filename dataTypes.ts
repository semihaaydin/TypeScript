console.log("Data Types");

let age:number= 29;
//age="semiha"; // hata alacaktır typescript ile tip koruması yaptık. 
let myName:string="Semiha";
let isUpdated:boolean = true;
//STRING AND BOOLEAN
    //let: değer değişiyorsa kullanılır. 
    //const: değer sabitse kullanırız.  

//1.number : 
    //hexadecimal,binary ve octal olarak kullanabiliriz.Çıktı olarak hepsinde tamsayı verir. 
    let numberUndefined:number //console.log(numberUndefined); //undefined çıktı hata. 
    let numberFormat:number=123; console.log(numberFormat);
    let hexadecimalFormat:number=0x37CF; console.log(hexadecimalFormat);

//2.String :
    let firstName: string="Semiha"; console.log(firstName); //tek tırmak veya çift tırnat tanımlayabiliriz sorun yoktur.
    let lastName: string='Aydin'; console.log(lastName);
//3.Boolean
    let isPresent: boolean = true; console.log(isPresent); 
//4.Arrays
    let names: string[] = ["deneme1","deneme2","deneme3"]; console.log(names);
    let names2: Array<String> = ["deneme1","deneme2","deneme3"]; console.log(names2);
    let nonTypes = ['AllTypes',1,2,'Test','Sem'];  console.log(nonTypes);
    let values:(string | number) [] = ['Apple',2,5,'Banana']; // yalnızca string ve number değerleri veririz diğer değerlerde patlar.
    let values2:Array<string | number> = ['Apple',2,5,'Banana']; 
    console.log(values2[0]);

//5.Tuple, Map gibi düşünebiliriz.Çıktı array gibi gösterilir. 
    let tuple1 :[number,string] = [1,"Semiha"]; console.log(tuple1);   
    let tuple2 :[number,string,boolean,number,boolean,string] = [1,"Semiha",true,5,false,"Aydin"];  console.log(tuple2);
    let tupleArray:[number,string][]= [[1,"1"],[2,"2"],[3,"3"]]; console.log(tupleArray);
    console.log(tupleArray[0][1]);

//6.Object
    let user: object={
        firstName:'Semiha',
        lastName:'Aydin',
        age:25, 
        jobTitle:'software engineer'};
   // console.log(user.age); // hata alır.

   let person :{ firstName:string, lastName:string,age:number,jobTitle:string};
    person={
        firstName:'Semiha',
        lastName:'Aydin',
        age:25, 
        jobTitle:'software engineer'};
        console.log(person.age);
//7.Enum
        enum SocialMedia{
            Facebook,Twitter,Instagram,Youtube
        };
        console.log(SocialMedia.Twitter); //Çıktı 1 olur 
        console.log(SocialMedia[0]); //Çıktı Facebook olur 

        enum Readable{
            Book="Book",Newspaper="Newspaper",Magazine="Magzine"
        };
        console.log(Readable.Book); // Çıktı book olur 
        


     
    
    

        





