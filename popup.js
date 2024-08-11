const backBtn = document.querySelector("#fi");

const notifyBtn = document.querySelector("#fi-bell");


backBtn.addEventListener("click", function goBack() {
  window.history.back();
})

notifyBtn.addEventListener("click", function notifyPage() {
  window.location.href = 'notification.html';
})


const body = document.querySelector('#body');

const vip0Details = document.querySelector('.detail-container')

const vip1Details = document.querySelector('.detail-container1')

const vip2Details = document.querySelector('.detail-container2')

const vip3Details = document.querySelector('.detail-container3')

const vip4Details = document.querySelector('.detail-container4')

const vip5Details = document.querySelector('.detail-container5')

const vip6Details = document.querySelector('.detail-container6')

const vip7Details = document.querySelector('.detail-container7')

const vip8Details = document.querySelector('.detail-container8')

const vip9Details = document.querySelector('.detail-container9')

const firstModal = document.querySelector('.card-2')
    
    const secondModal = document.querySelector('.card-1')
    
    const closeBtn = document.querySelector('#closebtn2')
    
    const thirdModal = document.querySelector('#card3')
    
    const forthModal = document.querySelector('#card4')
    
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
      function myAssetPage() {
        window.location.href = 'my-investment.htm';
      }
      
      //VIP0 PRODUCT//
      
      function showVip0(){
        vip0Details.classList.add('active');
        body.classList.add("active");
      }
      function buyVip0(){
        var vip0Price = 1500;
       // localStorage.removeItem('vip0Price');
       // localStorage.removeItem('startDate');
        
        
        if (vip0Price > JSON.parse(curAccBalValue)) {
        
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please first fund your wallet!',
          });
          setTimeout(payHere, 3000);
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
          localStorage.setItem('vipPrice0', vip0Price);
          
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 0 product has been successfully activated!',
          });
          
          vip0Details.classList.remove('active');
          body.classList.remove("active");
          
          let vip0startDate = Date.now();
          localStorage.setItem('vip0startDate', vip0startDate);
          
          setTimeout(myAssetPage, 3000);
          
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
      
      function buyVip1(){
        var vip1Price = 2500;
       // localStorage.removeItem('vip0Price');
       // localStorage.removeItem('startDate');
        
        
        if (vip1Price > JSON.parse(curAccBalValue)) {
        
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please first fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
        
        else if(localStorage.getItem('vip1Price')){
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
        
        else {
         
          localStorage.setItem('vip1Price', vip1Price);
          localStorage.setItem('vipPrice1', vip1Price);
          
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 1 product has been successfully activated!',
          });
          
          vip1Details.classList.remove('active');
          body.classList.remove("active");
          
          let vip1startDate = Date.now();
          localStorage.setItem('vip1startDate', vip1startDate);
          
          setTimeout(myAssetPage, 3000);
          
          }
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
      
      function buyVip2() {
        var vip2Price = 5000;
      
      
        if (vip2Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip2Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip2Price', vip2Price);
          localStorage.setItem('vipPrice2', vip2Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 2 product has been successfully activated!',
          });
      
          vip2Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip2startDate = Date.now();
          localStorage.setItem('vip2startDate', vip2startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip3() {
        var vip3Price = 8000;
      
      
        if (vip3Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip3Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip3Price', vip3Price);
          localStorage.setItem('vipPrice3', vip3Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 3 product has been successfully activated!',
          });
      
          vip3Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip3startDate = Date.now();
          localStorage.setItem('vip3startDate', vip3startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip4() {
        var vip4Price = 12000;
      
      
        if (vip4Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip4Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip4Price', vip4Price);
          localStorage.setItem('vipPrice4', vip4Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 4 product has been successfully activated!',
          });
      
          vip4Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip4startDate = Date.now();
          localStorage.setItem('vip4startDate', vip4startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip5() {
        var vip5Price = 15000;
      
      
        if (vip5Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip5Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip5Price', vip5Price);
          localStorage.setItem('vipPrice5', vip5Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 5 product has been successfully activated!',
          });
      
          vip5Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip5startDate = Date.now();
          localStorage.setItem('vip5startDate', vip5startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip6() {
        var vip6Price = 24000;
      
      
        if (vip6Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip6Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip6Price', vip6Price);
          localStorage.setItem('vipPrice6', vip6Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 6 product has been successfully activated!',
          });
      
          vip6Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip6startDate = Date.now();
          localStorage.setItem('vip6startDate', vip6startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip7() {
        var vip7Price = 30000;
      
      
        if (vip7Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip7Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip7Price', vip7Price);
          localStorage.setItem('vipPrice7', vip7Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 7 product has been successfully activated!',
          });
      
          vip7Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip7startDate = Date.now();
          localStorage.setItem('vip7startDate', vip7startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip8() {
        var vip8Price = 51000;
      
      
        if (vip8Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip8Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip8Price', vip8Price);
          localStorage.setItem('vipPrice8', vip8Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 8 product has been successfully activated!',
          });
      
          vip8Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip8startDate = Date.now();
          localStorage.setItem('vip8startDate', vip8startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
      
      function buyVip9() {
        var vip9Price = 68000;
      
      
        if (vip9Price > JSON.parse(curAccBalValue)) {
      
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Insufficient balance! Please fund your wallet!',
          });
          setTimeout(payHere, 3000);
        }
      
        else if (localStorage.getItem('vip9Price')) {
          iziToast.error({
            timeout: 5000,
            title: 'Error!',
            message: 'Sorry! This product is already activated! Please purchase another VIP product',
          });
        }
      
        else {
      
          localStorage.setItem('vip9Price', vip9Price);
          localStorage.setItem('vipPrice9', vip9Price);
      
          iziToast.success({
            //icon: 'check_circle',
            title: 'Congrats!🎉',
            message: 'VIP 9 product has been successfully activated!',
          });
      
          vip9Details.classList.remove('active');
          body.classList.remove("active");
      
          let vip9startDate = Date.now();
          localStorage.setItem('vip9startDate', vip9startDate);
      
          setTimeout(myAssetPage, 3000);
      
        }
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
