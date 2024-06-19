var accBal = document.getElementById('accountBal');
      accBal.readOnly = true;
      
      let initialBal = 200;
     // localStorage.removeItem('currentAccBal');
    
    funLoop = () => {
      if (localStorage.getItem('currentAccBal') == null){
        accBal.value = initialBal;
        localStorage.setItem('currentAccBal', accBal.value);
      }
      else{
         accBal.value = JSON.parse(localStorage.getItem('currentAccBal'));
      }
    }
    setInterval(funLoop, 100);
     
      var depo = localStorage.getItem('vip0');
      var depo1 = localStorage.getItem('vip1');
      var depo2 = localStorage.getItem('vip2');
      var depo3 = localStorage.getItem('vip3');
      var depo4 = localStorage.getItem('vip4');
      var depo5 = localStorage.getItem('vip5');
      var depo6 = localStorage.getItem('vip6');
      var depo7 = localStorage.getItem('vip7');
      var depo8 = localStorage.getItem('vip8');
      var depo9 = localStorage.getItem('vip9');
      
      
      //var curBal = localStorage.setItem('currentAccBal', accBal.value);
      
      
      var storedCurBal = localStorage.getItem('currentAccBal');
      
      
 
     // accBal.value = JSON.parse(localStorage.getItem('currentAccBal'));
      
      
      var vip0Invest = localStorage.getItem('balance');
      
      var withdrawAmount = localStorage.getItem('withdrawalAmount');
      
      var checkInBonus = localStorage.getItem('checkInBonus');
      
      
      
     /* if (depo == null && depo1 == null && depo2 == null && depo3 == null && depo4 == null && depo5 == null && depo6 == null && depo7 == null && depo8 == null && depo9 == null){
        
        accBalvalue = initialBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
      }*/
      
      if(depo && storedCurBal == null){
        var curAccBal = (JSON.parse(depo) + initialBal);
        
        accBalvalue = curAccBal;
        
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip0');
      }
      
      else if (depo1 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo1) + initialBal);
      
        accBalvalue = curAccBal;
        
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip1');
      }
      
      else if (depo2 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo2) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip2');
      }
      
      else if (depo3 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo3) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip3');
      }
      
      else if (depo4 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo4) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip4');
      }
      
      else if (depo5 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo5) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip5');
      }
      
      else if (depo6 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo6) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip6');
      }
      
      else if (depo7 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo7) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip7');
      }
      
      else if (depo8 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo8) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip8');
      }
      
      else if (depo9 && storedCurBal == null) {
        var curAccBal = (JSON.parse(depo9) + initialBal);
      
        accBalvalue = curAccBal;
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip9');
      }
      
      
      
      // if the client has deposited before and wants to deposit again but hasn't withdrawn, add the new deposited amount to the old wallet balance
      
      else if (depo && storedCurBal) {
        
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo);
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip0');
    
      }
      
      else if (depo1 && storedCurBal) {
        
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo1);
      
        localStorage.setItem('currentAccBal', accBalvalue);
        
        localStorage.removeItem('vip1');
      }
      
      else if (depo2 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo2);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip2');
      }
      
      else if (depo3 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo3);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip3');
      }
      
      else if (depo4 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo4);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip4');
      }
      
      else if (depo5 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo5);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip5');
      }
      
      else if (depo6 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo6);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip6');
      }
      
      else if (depo7 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo7);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip7');
      }
      
      else if (depo8 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo8);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip8');
      }
      
      else if (depo9 && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(depo9);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip9');
      }
      
      else if (vip0Invest) {
       
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip0Invest);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('balance');
      }
      
      else if (withdrawAmount) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(withdrawAmount);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('withdrawalAmount');
      }
      
      else if (checkInBonus) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(checkInBonus);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('checkInBonus');
      }
      
