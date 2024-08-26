document.getElementById('show-nav-bar').addEventListener('click',()=>{
   
    document.getElementById("show-in").style.display="block" 
    // document.getElementById('show-in').style.width="50%"

});
document.getElementById('hide-drop').addEventListener('click',()=>{

document.getElementById("show-in").style.display="none" 


});
// document.getElementById("search-bar").addEventListener("click",()=>{
//      document.getElementById("input-show").style.display="block"
//      document.getElementById("clearx").style.display="inline"
//      document.getElementById("input-show").style.width="100%"
//      document.getElementById("shop-bar").style.display="none" 
//      document.getElementById("show-nav-bar").style.display="none" 
//      document.getElementById("search-bar").style.display="none" 
//      document.getElementById("logo").style.display="none" 

// })
// document.getElementById("clearx").addEventListener("click",()=>{
//     document.getElementById("input-show").style.display="none"
//     document.getElementById("clearhide").style.display="block"
//     // document.getElementById("input-show").style.width="100%"
//     document.getElementById("show-nav-bar").style.display="block" 
//     document.getElementById("search-bar").style.display="inline" 
//     document.getElementById("shop-bar").style.display="inline"
//     document.getElementById("logo").style.display="block" 

//onclick-----------------------
// document.getElementById("click-link").addEventListener("click",function(){
//     document.getElementById("click-link").style.display="none";
//     document.getElementById("again").style.display="block"
//     document.getElementById("drop-link").style.display="block";
// })
// document.getElementById("again").addEventListener("click",function(){
//     document.getElementById("click-link").style.display="block"
//     document.getElementById("again").style.display="none"
//     document.getElementById("drop-link").style.display="none";
// })
// runing number----------------------
let valuedisplays=document.querySelectorAll(".num");
let interval=8000;
  valuedisplays.forEach((valuedisplays)=>{
    let startvalue=0;
    let endvalue=parseInt(valuedisplays.getAttribute("data-val"));
    let duration=Math.floor(interval / endvalue);
    let counter=setInterval(function(){
        startvalue +=1;
        valuedisplays.textContent=startvalue;
        if(startvalue==endvalue){
            clearInterval(counter);
        }
    },duration);
   

});
// console.log(valuedisplays);


// using for asynchonous
setTimeout(myFunction, 9000);

function myFunction() {
  document.getElementById("alertbox").style.display="block"
  document.getElementById("clear-btn").addEventListener("click",()=>{
  document.getElementById("alertbox").style.display="none"
});
};
// content chenge heading

document.getElementById('fbtn').addEventListener('click',()=>{
  document.getElementById('demo').innerHTML="Front-end web development is the development of the graphical user interface of a website through the use of HTML, CSS, and JavaScript so users can view and interact with that website.";

 });
 document.getElementById('sbtn').addEventListener('click',()=>{
  document.getElementById('demo').innerHTML="Backend Development refers to the server-side development of the web application. It is the part of the application where the server and database reside and the logics is build to perform operations. It includes the main features and functionalities of the application on the server. Programming languages for the backend are mainly Node. JS (for JavaScript), Django (for Python), Spring (Java), etc.";
  
 })
 document.getElementById('tbtn').addEventListener('click',()=>{
  document.getElementById('demo').innerHTML="Full Stack web developers have the ability to design complete web applications and websites. They work on the frontend, backend, database, and debugging of web applications or websites.";
  
 })

