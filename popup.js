const body = document.querySelector('#body');

const overlap = document.querySelector('#overlap');

const firstModal = document.querySelector('.card-2');
    
    const secondModal = document.querySelector('.card-1');
    
    const closeBtn = document.querySelector('#closebtn2');
    
    const thirdModal = document.querySelector('#card3');
    
    const forthModal = document.querySelector('#card4');
    
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
        
        
        
     
 if (sessionStorage.getItem("userPhone") === null) {

  function prompt(){
    thirdModal.style.display = 'block';
    body.classList.add("active");
  }
  
   function redirectUser(){
     window.location.href = 'login.html'

   }
   
   let a = setTimeout(prompt, 1500);
   
   let b = setTimeout(redirectUser, 2500);
   };
