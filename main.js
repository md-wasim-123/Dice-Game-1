 function playGame(){
let number = Math.floor(Math.random() * 6) + 1;

let imgLink = "dice" + number + ".png";

let randomimage="img/"+ imgLink;
let img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimage);



let number2 = Math.floor(Math.random() * 6) + 1;

let imgLink2 = "dice" + number2 + ".png";

let randomimage2="img/"+ imgLink2;
let img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimage2);
 

if(number> number2){
    document.querySelector('h2').innerHTML="First winner"
}
else if(number< number2) {
    document.querySelector('h2').innerHTML="Second winner"
} 
else {
   document.querySelector('h2').innerHTML="Both are winner"
} 

}
 document.querySelector("button").addEventListener("click",playGame);


 