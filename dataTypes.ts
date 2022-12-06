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

//8.Union
        //Bir type string veya number olsun demek istersek union type kullanırız. 
        let code : string | number | boolean = true;
        console.log(code);
        code="Test";
        console.log(code);
        code=8;   
        console.log(code);
        
//9.Any
        //Çok tavsiye edilmeyen bir veri tipi. Any denilen bir type için number,string,boolean,obje,array olabilir.
        //Tip korumasına izin vermeyiz.
        console.log("-----------ANY------");
        let something:any="Ben herşey olurum";
        something=5;
        console.log(something);
        something=true;
        console.log(something);
        let myPerson:{firstname:string,lastName:string,age:number};
        myPerson={firstname:"My",lastName:"Person",age:55};
        something= myPerson;
        console.log(something);

//9.void 
        //geri dönüş tipi olmayan yapıdır.
        console.log("-----------VOID------");
        function sayHello() : void { 
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
            let sayac=0;
            let sayac2:number=0;
            console.log(typeof(sayac)); // çıktı number yazar
            console.log(typeof(sayac2)); // çıktı number yazar

            //Ne işe yarar?
            function sum (a:number,b:number){
                return a+b;
            }
            //let total:string=sum(5,7);  -> hata verir.

//10.type Casting typecasting işlemidir.
            console.log("-----------TYPE Casting------");
            let myCodeX:unknown="1";
            console.log(typeof(myCodeX));//string 
            let myCodeY=<number>myCodeX;
            console.log(typeof(myCodeY));//string 


     
    
    

        





