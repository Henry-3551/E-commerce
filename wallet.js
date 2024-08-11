//localStorage.removeItem('currentAccBal');
//localStorage.removeItem('todayIncome');
//localStorage.removeItem('totalIncome');

const backBtn = document.querySelector("#fi");

const notifyBtn = document.querySelector("#fi-bell");


backBtn.addEventListener("click", function goBack() {
  window.history.back();
})

notifyBtn.addEventListener("click", function notifyPage() {
  window.location.href = 'notification.html';
})


var accBal = document.getElementById('accountBal');
      accBal.readOnly = true;
      
      let initialBal = 200;
      //localStorage.removeItem('currentAccBal');
      
      var withdrawable = document.getElementById('withdrawable');
      
      
    funLoop = () => {
      if (localStorage.getItem('currentAccBal') == null){
        accBal.value = initialBal;
        localStorage.setItem('currentAccBal', accBal.value);
        withdrawable.innerHTML = initialBal;
      }
      else{
         accBal.value = Math.round(JSON.parse(localStorage.getItem('currentAccBal')));
         
         withdrawable.innerHTML = Math.round(JSON.parse(localStorage.getItem('currentAccBal')));
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
      
      var checkInBonus = localStorage.getItem('checkInBonus');
      var reward = localStorage.getItem('reward');
      
      
      const todayIncome = document.getElementById('today-income')
      
      const totalIncome = document.getElementById('total-income')
      
      totalIncomeLoop = () => {
        if(localStorage.getItem('totalIncome')
){
          totalIncome.innerHTML = JSON.parse(localStorage.getItem('totalIncome'));
      }
      else{
        totalIncome.innerHTML = 200;
      }
    }
    setInterval(totalIncomeLoop, 100);
         
      
      
      var v0 = localStorage.getItem('balance');
      var v1 = localStorage.getItem('vip1Balance');
      var v2 = localStorage.getItem('vip2Balance');
      var v3 = localStorage.getItem('vip3Balance');
      var v4 = localStorage.getItem('vip4Balance');
      var v5 = localStorage.getItem('vip5Balance');
      var v6 = localStorage.getItem('vip6Balance');
      var v7 = localStorage.getItem('vip7Balance');
      var v8 = localStorage.getItem('vip8Balance');
      var v9 = localStorage.getItem('vip9Balance');
      var reward = localStorage.getItem('reward');
      
      const todayTimeframe = 24 * 60 * 60 * 1000 * 1;
      var todayDate = new Date();
      var theHour = todayDate.getHours();
      var day = todayDate.getDate();
      
      const lastDate = localStorage.getItem('todayDate');
      var todayIn;
      
      todayIncomeLoop = () => {
      if (localStorage.getItem('todayIncome') == null){
        todayIncome.innerHTML = 200;
      }
      else if(day == 1 + lastDate && v0 == null && v1 == null && v2 == null && v3 == null && v4 == null && v5 == null && v6 == null && v7 == null && v8 == null && v9 == null && reward == null){
        //localStorage.setItem('newDay', newDay);
        localStorage.removeItem('todayIncome');
        todayIncome.innerHTML = 0;
      }
      else{
         
         todayIncome.innerHTML = JSON.parse(localStorage.getItem('todayIncome'));
         localStorage.setItem('todayDate', day);
      }
    }
    setInterval(todayIncomeLoop, 100);
     
    var storedTodayIncome = localStorage.getItem('todayIncome');
      
      if(v0 && storedTodayIncome == null){
        todayIn = 340 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
       // localStorage.removeItem('v0');
      }
      else if (v1 && storedTodayIncome == null) {
        todayIn = 500 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
        //localStorage.removeItem('v1');
      }
      else if (v2 && storedTodayIncome == null) {
        todayIn = 700 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
        //localStorage.removeItem('v2');
      }
      else if (v3 && storedTodayIncome == null) {
        todayIn = 800 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
       // localStorage.removeItem('v3');
      }
      else if (v4 && storedTodayIncome == null) {
        todayIn = 900 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
        //localStorage.removeItem('v4');
      }
      else if (v5 && storedTodayIncome == null) {
        todayIn = 1100 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
       // localStorage.removeItem('v5');
      }
      else if (v6 && storedTodayIncome == null) {
        todayIn = 2200 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
        //localStorage.removeItem('v6');
      }
      else if (v7 && storedTodayIncome == null) {
        todayIn = 3400 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
        //localStorage.removeItem('v7');
      }
      else if (v8 && storedTodayIncome == null) {
        todayIn = 4300 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
       // localStorage.removeItem('v8');
      }
      else if (v9 && storedTodayIncome == null) {
        todayIn = 5700 + 200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
       // localStorage.removeItem('v9');
      }
      else if (reward && storedTodayIncome == null) {
      
        todayIn = 200 + JSON.parse(reward);
        totalIn = todayIn;
      
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      
        localStorage.removeItem('reward');
      }
      
      else if (v0 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 340;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v1 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 500;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v2 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 700;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v3 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 800;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v4 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 900;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v5 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 1100;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v6 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 2200;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v7 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 3400;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v8 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 4300;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (v9 && storedTodayIncome !== null) {
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + 5700;
        totalIn = todayIn;
        
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      }
      else if (reward && storedTodayIncome) {
      
        todayIn = JSON.parse(localStorage.getItem('todayIncome')) + JSON.parse(localStorage.getItem('reward'));
        totalIn = todayIn;
      
        localStorage.setItem('todayIncome', todayIn);
        localStorage.setItem('totalIncome', totalIn);
      
        localStorage.removeItem('reward');
      }
      
      var storedCurBal = localStorage.getItem('currentAccBal');
      
      
 
     // accBal.value = JSON.parse(localStorage.getItem('currentAccBal'));
      
      
      const vip0Invest = localStorage.getItem('vip0Price')
      
      const vip1Invest = localStorage.getItem('vip1Price')
      
      const vip2Invest = localStorage.getItem('vip2Price')
      
      const vip3Invest = localStorage.getItem('vip3Price')
      
      const vip4Invest = localStorage.getItem('vip4Price')
      
      const vip5Invest = localStorage.getItem('vip5Price')
      
      const vip6Invest = localStorage.getItem('vip6Price')
      
      const vip7Invest = localStorage.getItem('vip7Price')
      
      const vip8Invest = localStorage.getItem('vip8Price')
      
      const vip9Invest = localStorage.getItem('vip9Price')
      
      
      
      //evidence of buying vip product
      
      const vip0Price = localStorage.getItem('vipPrice0')
      
      const vip1Price = localStorage.getItem('vipPrice1')
      
      const vip2Price = localStorage.getItem('vipPrice2')
      
      const vip3Price = localStorage.getItem('vipPrice3')
      
      const vip4Price = localStorage.getItem('vipPrice4')
      
      const vip5Price = localStorage.getItem('vipPrice5')
      
      const vip6Price = localStorage.getItem('vipPrice6')
      
      const vip7Price = localStorage.getItem('vipPrice7')
      
      const vip8Price = localStorage.getItem('vipPrice8')
      
      const vip9Price = localStorage.getItem('vipPrice9')
      
      
      var withdrawAmount = localStorage.getItem('withdrawalAmount');
      
      
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
      
      // code for reducing wallet balance after a purchasing vip product
      
      else if (vip0Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip0Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice0');
      }
      
      else if (vip1Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip1Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice1');
      }
      
      else if (vip2Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip2Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice2');
      }
      
      else if (vip3Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip3Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice3');
      }
      
      else if (vip4Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip4Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice4');
      }
      
      else if (vip5Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip5Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice5');
      }
      
      else if (vip6Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip6Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice6');
      }
      
      else if (vip7Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip7Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice7');
      }
      
      else if (vip8Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip8Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice8');
      }
      
      else if (vip9Price) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(vip9Price);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vipPrice9');
      }
      
      // code for adding daily income for each vip product to wallet balance
      else if (vip0Invest && localStorage.getItem('balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('balance');
      }
      
      else if (vip1Invest && localStorage.getItem('vip1Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip1Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip1Balance');
      }
      
      else if (vip2Invest && localStorage.getItem('vip2Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip2Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip2Balance');
      }
      
      else if (vip3Invest && localStorage.getItem('vip3Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip3Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip3Balance');
      }
      
      else if (vip4Invest && localStorage.getItem('vip4Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip4Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip4Balance');
      }
      
      else if (vip5Invest && localStorage.getItem('vip5Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip5Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip5Balance');
      }
      
      else if (vip6Invest && localStorage.getItem('vip6Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip6Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip6Balance');
      }
      
      else if (vip7Invest && localStorage.getItem('vip7Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip7Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip7Balance');
      }
      
      else if (vip8Invest && localStorage.getItem('vip8Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip8Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip8Balance');
      }
      
      else if (vip9Invest && localStorage.getItem('vip9Balance')) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(localStorage.getItem('vip9Balance'));
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('vip9Balance');
      }
      
      else if (withdrawAmount) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) - JSON.parse(withdrawAmount);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('withdrawalAmount');
      }
      
      else if (checkInBonus && storedCurBal == null) {
      
        accBalvalue = 200 + JSON.parse(checkInBonus);
      
        localStorage.setItem('currentAccBal', accBalvalue);
        localStorage.removeItem('checkInBonus');
      }
      
      else if (checkInBonus && storedCurBal) {
      
        accBalvalue = JSON.parse(localStorage.getItem('currentAccBal')) + JSON.parse(checkInBonus);
      
        localStorage.setItem('currentAccBal', accBalvalue);
        localStorage.removeItem('checkInBonus');
      }
