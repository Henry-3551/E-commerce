const backBtn = document.querySelector("#fi");

const notifyBtn = document.querySelector("#fi-bell");


backBtn.addEventListener("click", function goBack(){
  window.history.back();
})

notifyBtn.addEventListener("click", function notifyPage() {
  window.location.href = 'notification.html';
})

iziToast.settings({
      timeout: 3000,
      resetOnHover: true,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'topRight',
      onOpening: function() {
        console.log('callback abriu!');
      },
      onClosing: function() {
        console.log("callback fechou!");
      }
    });
    


// addingAmount


const vip0 = document.getElementById('500').value;
const vip1 = document.getElementById('2500').value;
const vip2 = document.getElementById('5000').value;
const vip3 = document.getElementById('8000').value;
const vip4 = document.getElementById('12000').value;
const vip5 = document.getElementById('15000').value;
const vip6 = document.getElementById('24000').value;
const vip7 = document.getElementById('30000').value;
const vip8 = document.getElementById('51000').value;
const vip9 = document.getElementById('68000').value;

const custom = document.getElementById('custom');
const inputField = document.getElementById('amount');

const inputFieldValue = document.querySelector('#amount').value;

const recharge = document.getElementById('recharge');


function addfH() {
  "use strict";
  
  inputField.value = 500;
  inputField.readOnly = true;
}

function addtF() {
  "use strict";

  inputField.value = 2500;
  inputField.readOnly = true;
}
  
  
function addfK() {
    "use strict";

    inputField.value = 5000;
    inputField.readOnly = true;
}
function addeK() {
    "use strict";

    inputField.value = 8000;

    inputField.readOnly = true;
}

function addtwfK() {
    "use strict";
  
    inputField.value = 12000;

    inputField.readOnly = true;
}

function addftnK() {
    "use strict";
    inputField.value = 15000;

    inputField.readOnly = true;
}

function addtfK() {
  "use strict";

  inputField.value = 24000;
  inputField.readOnly = true;
}

function addthK() {
  "use strict";

  inputField.value = 30000;
  inputField.readOnly = true;
}

function addfoK() {
  "use strict";

  inputField.value = 51000;
  inputField.readOnly = true;
}

function addseK() {
  "use strict";

  inputField.value = 68000;
  inputField.readOnly = true;
  
}

function addCustom() {
    "use strict";
    /*fp.classList.remove('onchange');
    sp.classList.remove('onchange');
    tp.classList.remove('onchange');
    ftp.classList.remove('onchange');
    custom.classList.add('onchange');*/
    inputField.value = '';

    inputField.readOnly = false;
}



amountMatch = () => {
  
  if(inputField.value == 500){
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    localStorage.removeItem('j');
    localStorage.setItem('a', vip0);
    window.location.href = 'pay.html';
    
  }
  
  else if (inputField.value == 2500) {
    //redirect to checkout page
    localStorage.removeItem('a');
    localStorage.removeItem('j');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
  localStorage.setItem('b', vip1);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 5000) {
    //redirect to checkout page
    
    localStorage.removeItem('a');
    localStorage.removeItem('b');
    localStorage.removeItem('j');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('c', vip2);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 8000) {
    //redirect to checkout page
    
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('j');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('d', vip3);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 12000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('j');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('e', vip4);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 15000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('j');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('f', vip5);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 24000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('j');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('g', vip6);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 30000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('j');
    localStorage.removeItem('i');
    
    localStorage.setItem('h', vip7);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 51000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('j');
    
    localStorage.setItem('i', vip8);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value == 68000) {
    //redirect to checkout page
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    
    localStorage.setItem('j', vip9);
    window.location.href = 'pay.html';
  }
  
  else if (inputField.value === '') {
    localStorage.removeItem('b');
    localStorage.removeItem('c');
    localStorage.removeItem('d');
    localStorage.removeItem('e');
    localStorage.removeItem('f');
    localStorage.removeItem('g');
    localStorage.removeItem('h');
    localStorage.removeItem('i');
    localStorage.removeItem('j');
    
    iziToast.error({
      title: 'Error!',
      message: 'Please enter recharge amount!',
    });
   // alert('Please enter recharge amount!');
  }
  
  else if(inputField.value < 500){
    iziToast.error({
      title: 'Error!',
      message: 'Minimum Recharge amount is 500 NGN!',
    });
    //alert('Minimum Recharge amount is 500 NGN!');
  }
  else if (inputField.value !== 500 || inputField.value !== 2500 || inputField.value !== 5000 || inputField.value !== 8000 || inputField.value !== 12000 || inputField.value !== 15000 || inputField.value !== 24000 || inputField.value !== 30000 || inputField.value !== 51000 || inputField.value !== 68000) {
  
    iziToast.info({
      message: 'Please choose an amount below',
    });
  }
  
  else if (inputField.value > 68000) {
    iziToast.error({
      title: 'Error!',
      message: 'Recharge limit exceeded! Please Recharge 68000NGN instead',
    });
    //alert('Recharge limit exceeded! Please Recharge 68000NGN instead');
  }
  else{
    // do nothing
  }
  
}
