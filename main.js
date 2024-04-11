const body = document.querySelector('#body');

const thirdModal = document.querySelector('.card-3');

const homeModal = document.querySelector('.entice-modal');
    
const setBg = document.querySelector('.settings-modal');

     
 if (sessionStorage.getItem("userPhone") === null) {

  function prompt(){
    thirdModal.style.display = 'block';
    body.classList.add("active");
  }
  
   function redirectUser(){
     thirdModal.style.display = 'none';
     body.classList.remove("active");
     window.location.replace("login.html")
   }
   
   let a = setTimeout(prompt, 1000);
   
   let b = setTimeout(redirectUser, 2500);
 };
 
 function showSet(){
   
   setBg.style.display = 'block';
 }
 
 /*window.onscroll = function() {
   displayEntice();
 }
 
 function displayEntice() {
   
 
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
     homeModal.classList.add("active");
   } else {
     homeModal.classList.remove("active");
   }
 }*/
