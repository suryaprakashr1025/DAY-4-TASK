//1.json properties compare without order.

var obj1 = {name:"person 1",age:5};
var obj2 = {age:5,name:"person 1"}; 
for (key in obj1,obj2){
    console.log(obj1[key]==obj2[key]);
 }

 //2.display all the country flags in console.

 const fla=new XMLHttpRequest();
 fla.open("GET","https://restcountries.com/v3.1/all");
 fla.send();
 fla.responseType="json";
 fla.onload =function displayResult(){
    const countries = fla.response;
    for( key of countries){
    console.log(key.flag);  
 }
}

//3.display all the countries names,region,subregion and population

const xhr=new XMLHttpRequest();
 xhr.open("GET","https://restcountries.com/v3.1/all");
 xhr.send();
 xhr.responseType="json";
 xhr.onload =function displayResult(){
    const countries = xhr.response;
    for( key of countries){
    console.log(key.name);
    console.log(key.region);
    console.log(key.subregion);
    console.log(key.population);   
 }
}