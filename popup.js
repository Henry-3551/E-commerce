const body = document.querySelector('#body');

const vip0Details = document.querySelector('.detail-container');

const vip1Details = document.querySelector('.detail-container1');

const vip2Details = document.querySelector('.detail-container2');

const vip3Details = document.querySelector('.detail-container3');

const vip4Details = document.querySelector('.detail-container4');

const vip5Details = document.querySelector('.detail-container5');

const vip6Details = document.querySelector('.detail-container6');

const vip7Details = document.querySelector('.detail-container7');

const vip8Details = document.querySelector('.detail-container8');

const vip9Details = document.querySelector('.detail-container9');

const firstModal = document.querySelector('.card-2');
    
    const secondModal = document.querySelector('.card-1');
    
    const closeBtn = document.querySelector('#closebtn2');
    
    const thirdModal = document.querySelector('#card3');
    
    const forthModal = document.querySelector('#card4');
    
    var curAccBalValue = localStorage.getItem('currentAccBal');
    
      function loadModal() {
        forthModal.style.display = 'block';
      }
      function cancelLoader() {
        forthModal.style.display = 'none';
        body.classList.remove("active");
      }
      function cancelModal() {
        thirdModal.style.display = 'none';
        body.classList.remove("active");
        
      }
      
      function payHere(){
            window.location.href = 'deposit.html'
      }
      
      //VIP0 PRODUCT//
      
      function showVip0(){
        vip0Details.classList.add('active');
        body.classList.add("active");
      }
      function buyVip0(){
        var vip0Price = 1500
       // localStorage.removeItem('vip0Price');
       // localStorage.removeItem('startDate');
        
        
        if (vip0Price > JSON.parse(curAccBalValue)) {
        
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please first fund your wallet!',
          });
          setTimeout(payHere, 5000);
        }
        
        else if(localStorage.getItem('vip0Price')){
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
        
        else {
         
          localStorage.setItem('vip0Price', vip0Price);
          
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'Your VIP product has been activated successfully!',
          });
          
          vip0Details.classList.remove('active');
          body.classList.remove("active");
          
          let startDate = new Date();
      
          let count = 0;
          
          function vipAmount() {
            //let balance = JSON.parse(localStorage.getItem("balance"));
          
            if (count < 7) {
              balance += 1500;
              localStorage.setItem("balance", balance);
          
              let currentDate = new Date();
              if (currentDate.getHours() === 0) {
                count++;
          
              }
            }
          }
          
          setInterval(vipAmount, 1000 * 60 * 60 * 24);
          
          }
        }  
          
      
      function cancelVip0() {
        vip0Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP1 PRODUCT////
      function showVip1(){
        vip1Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip1() {
        vip1Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP2 PRODUCT////
      function showVip2(){
        vip2Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip2() {
        vip2Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP3 PRODUCT////
      function showVip3(){
        vip3Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip3() {
        vip3Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP4 PRODUCT////
      function showVip4(){
        vip4Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip4() {
        vip4Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP5 PRODUCT////
      function showVip5(){
        vip5Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip5() {
        vip5Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP6 PRODUCT////
      function showVip6(){
        vip6Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip6() {
        vip6Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP7 PRODUCT////
      function showVip7(){
        vip7Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip7() {
        vip7Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP8 PRODUCT////
      function showVip8(){
        vip8Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip8() {
        vip8Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      ////VIP9 PRODUCT////
      function showVip9(){
        vip9Details.classList.add('active');
        body.classList.add("active");
      }
      function cancelVip9() {
        vip9Details.classList.remove('active');
        body.classList.remove("active");
      }
      
      
      function showModal(){
        firstModal.style.display = 'block'
        body.classList.add("active");
  
      }
      
      closeBtn.addEventListener("click",
        function hideModal() {
          firstModal.style.display = 'none'
          body.classList.remove("active");
   
        }
      )
  
        function hideModal(){
         firstModal.style.display = 'none'
         body.classList.remove("active");
  
        }
        function pay() {
          firstModal.style.display = 'none';
          
         let myTimeout = setTimeout(loadModal, 600);
         
          let t = setTimeout(cancelLoader, 4500);
          
          setTimeout(payHere, 4600);
        }
        
        
        
     
/* if (sessionStorage.getItem("userPhone") === null) {

  function prompt(){
    thirdModal.style.display = 'block';
    body.classList.add("active");
  }
  
   function redirectUser(){
     window.location.href = 'login.html'

   }
   
   let a = setTimeout(prompt, 1500);
   
   let b = setTimeout(redirectUser, 2500);
   };*/
