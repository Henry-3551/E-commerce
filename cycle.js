window.addEventListener('load', function(){
  //localStorage.removeItem('count');
  //localStorage.removeItem('lastIncomeDate');
  
  const noEvent = document.querySelector('.no_event')
  
  const chart0 = document.getElementById('cycle-0')
  const chart1 = document.getElementById('cycle-1')
  const chart2 = document.getElementById('cycle-2')
  const chart3 = document.getElementById('cycle-3')
  const chart4 = document.getElementById('cycle-4')
  const chart5 = document.getElementById('cycle-5')
  const chart6 = document.getElementById('cycle-6')
  const chart7 = document.getElementById('cycle-7')
  const chart8 = document.getElementById('cycle-8')
  const chart9 = document.getElementById('cycle-9')
  
  
  const btn0 = document.getElementById('btn0')
  const btn1 = document.getElementById('btn01')
  const btn2 = document.getElementById('btn02')
  const btn3 = document.getElementById('btn03')
  const btn4 = document.getElementById('btn04')
  const btn5 = document.getElementById('btn05')
  const btn6 = document.getElementById('btn06')
  const btn7 = document.getElementById('btn07')
  const btn8 = document.getElementById('btn08')
  const btn9 = document.getElementById('btn09')
  
  const frequency = 1000 * 60 * 60 * 24;


if(localStorage.getItem('vip0Price') || localStorage.getItem('vip1Price') || localStorage.getItem('vip2Price') || localStorage.getItem('vip3Price') ||  localStorage.getItem('vip4Price') ||  localStorage.getItem('vip5Price') || localStorage.getItem('vip6Price') || localStorage.getItem('vip7Price') ||  localStorage.getItem('vip8Price') || localStorage.getItem('vip9Price')){
  noEvent.style.display = 'none';
}

// VIP0 product activation cycle
if(localStorage.getItem('vip0Price')){
  chart0.style.display = 'block';
  
  
   //document.getElementById('proof').innerHTML = Date.now() - localStorage.getItem("vip0startDate");
  
   //document.getElementById('proof').innerHTML = JSON.parse(localStorage.getItem("balance"));
   
  let count = 0;
  const balance = 340;
  let currentDate = Date.now();
  var vip0startDate = localStorage.getItem('vip0startDate');
  let nextIncome = document.getElementById('next-vip0-income');
  var hourLeftForVip0Income;
  
function cycle0Loop(){
  if(localStorage.getItem('lastIncomeDate') == null){
    var hourLeftForVip0Income = (frequency - (currentDate - localStorage.getItem('vip0startDate')))/(1000*3600);
  }
  else {
    var hourLeftForVip0Income = (frequency - (currentDate - localStorage.getItem('lastIncomeDate')))/(1000*3600);
  }
    
  nextIncome.innerHTML = Math.round(hourLeftForVip0Income) + ' hours';
  
  }
  
  
  btn0.addEventListener('click', function addBalance() {
  
    if (JSON.parse(localStorage.getItem('count')) < 7 && localStorage.getItem('lastIncomeDate') == null && currentDate - vip0startDate >= frequency) {
      
      localStorage.setItem("balance", balance);
      localStorage.setItem("v0", balance);
      
      localStorage.setItem('lastIncomeDate', currentDate);
      
      alert("Congrats! You've received 340 NGN daily income");
      
        count++;
        
        localStorage.setItem("count", count);
    }
    
    else if (JSON.parse(localStorage.getItem('count')) < 7 && (currentDate - localStorage.getItem('lastIncomeDate')) < frequency) {
    
      alert("Oops! You can't claim another income yet. Please try again later");
    }
    
    else if (JSON.parse(localStorage.getItem('count')) < 7 && (currentDate - localStorage.getItem('lastIncomeDate')) >= frequency) {
    
      localStorage.setItem("balance", balance);
    
      localStorage.setItem('lastIncomeDate', currentDate);
    
      alert("Congrats! You've received 340 NGN daily income");
    
        count++;
    
        localStorage.setItem("count", count);
    }
    
    else {
      alert('You have earned a total sum of 2380 NGN');
    }
  })

}


// VIP1 product activation cycle
if (localStorage.getItem('vip1Price')) {
  chart1.style.display = 'block';
  //document.getElementById('proof').innerHTML = Date.now() - localStorage.getItem("vip1startDate");
  
      let btn1Count = 0;
      const vip1Balance = 500;
      let vip1currentDate = Date.now();
      let vip1startDate = localStorage.getItem('vip1startDate');

      let vip1nextIncome = document.getElementById('next-vip1-income');
      var hourLeftForVip1Income;
    
    cycle1Loop = () => {
      if (localStorage.getItem('vip1lastIncomeDate') == null) {
        var hourLeftForVip1Income = (frequency - (vip1currentDate - localStorage.getItem('vip1startDate'))) / (1000 * 3600);
      }
      else {
        var hourLeftForVip1Income = (frequency - (vip1currentDate - localStorage.getItem('vip1lastIncomeDate'))) / (1000 * 3600);
      }
    
      vip1nextIncome.innerHTML = Math.round(hourLeftForVip1Income) + ' hours';
    }

btn1.addEventListener('click', function addBalanceVip1() {

  if (JSON.parse(localStorage.getItem('btn1Count')) < 10 && localStorage.getItem('vip1lastIncomeDate') == null && vip1currentDate - vip1startDate >= frequency) {

    localStorage.setItem("vip1Balance", vip1Balance);
    localStorage.setItem("v1", vip1Balance);

    localStorage.setItem('vip1lastIncomeDate', vip1currentDate);

    alert("Congrats! You've received 500 NGN daily income");

    btn1Count++;

    localStorage.setItem("btn1Count", btn1Count);
  }

  else if (JSON.parse(localStorage.getItem('btn1Count')) < 10 && (vip1currentDate - localStorage.getItem('vip1lastIncomeDate')) < frequency) {

    alert("Oops! You can't claim another income yet. Please try again" + ' later');
  }

  else if (JSON.parse(localStorage.getItem('btn1Count')) < 10 && (vip1currentDate - localStorage.getItem('vip1lastIncomeDate')) >= frequency) {

    localStorage.setItem("vip1Balance", vip1Balance);

    localStorage.setItem('vip1lastIncomeDate', vip1currentDate);

    alert("Congrats! You've received 500 NGN daily income");

    btn1Count++;

    localStorage.setItem("btn1Count", btn1Count);
  }

  else {
    alert('You have earned a total sum of 5000 NGN');
  }
})
}


// VIP2 product activation cycle
if (localStorage.getItem('vip2Price')) {
  chart2.style.display = 'block';

  let btn2Count = 0;
  const vip2Balance = 700;
  let vip2currentDate = Date.now();
  let vip2startDate = localStorage.getItem('vip2startDate');

  let vip2nextIncome = document.getElementById('next-vip2-income');
  
  var hourLeftForVip2Income;

cycle2Loop = () => {
  if (localStorage.getItem('vip2lastIncomeDate') == null) {
    var hourLeftForVip2Income = (frequency - (vip2currentDate - localStorage.getItem('vip2startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip2Income = (frequency - (vip2currentDate - localStorage.getItem('vip2lastIncomeDate'))) / (1000 * 3600);
  }
  
  vip2nextIncome.innerHTML = Math.round(hourLeftForVip2Income) + ' hours';
}


  btn2.addEventListener('click', function addBalanceVip2() {

    if (JSON.parse(localStorage.getItem('btn2Count')) < 15 && localStorage.getItem('vip2lastIncomeDate') == null && vip2currentDate - vip2startDate >= frequency) {

      localStorage.setItem("vip2Balance", vip2Balance);
      localStorage.setItem("v2", vip2Balance);

      localStorage.setItem('vip2lastIncomeDate', vip2currentDate);

      alert("Congrats! You've received 700 NGN daily income");

      btn2Count++;

      localStorage.setItem("btn2Count", btn2Count);
    }

    else if (JSON.parse(localStorage.getItem('btn2Count')) < 15 && (vip2currentDate - localStorage.getItem('vip2lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn2Count')) < 15 && (vip2currentDate - localStorage.getItem('vip2lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip2Balance", vip2Balance);

      localStorage.setItem('vip2lastIncomeDate', vip2currentDate);

      alert("Congrats! You've received 700 NGN daily income");

      btn2Count++;

      localStorage.setItem("btn2Count", btn2Count);
    }

    else {
      alert('You have earned a total sum of 10,500 NGN');
    }
  })
}


// VIP3 product activation cycle
if (localStorage.getItem('vip3Price')) {
  chart3.style.display = 'block';

  let btn3Count = 0;
  const vip3Balance = 800;
  let vip3currentDate = Date.now();
  let vip3startDate = localStorage.getItem('vip3startDate');

  let vip3nextIncome = document.getElementById('next-vip3-income');
  
  var hourLeftForVip3Income;

cycle3Loop = () => {
  if (localStorage.getItem('vip3lastIncomeDate') == null) {
    var hourLeftForVip3Income = (frequency - (vip3currentDate - localStorage.getItem('vip3startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip3Income = (frequency - (vip3currentDate - localStorage.getItem('vip3lastIncomeDate'))) / (1000 * 3600);
  }

  vip3nextIncome.innerHTML = Math.round(hourLeftForVip3Income) + ' hours';
}

  btn3.addEventListener('click', function addBalanceVip3() {

    if (JSON.parse(localStorage.getItem('btn3Count')) < 20 && localStorage.getItem('vip3lastIncomeDate') == null && vip3currentDate - vip3startDate >= frequency) {

      localStorage.setItem("vip3Balance", vip3Balance);
      localStorage.setItem("v3", vip3Balance);

      localStorage.setItem('vip3lastIncomeDate', vip3currentDate);

      alert("Congrats! You've received 800 NGN daily income");

      btn3Count++;

      localStorage.setItem("btn3Count", btn3Count);
    }

    else if (JSON.parse(localStorage.getItem('btn3Count')) < 20 && (vip3currentDate - localStorage.getItem('vip3lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn3Count')) < 20 && (vip3currentDate - localStorage.getItem('vip3lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip3Balance", vip3Balance);

      localStorage.setItem('vip3lastIncomeDate', vip3currentDate);

      alert("Congrats! You've received 800 NGN daily income");

      btn3Count++;

      localStorage.setItem("btn3Count", btn3Count);
    }

    else {
      alert('You have earned a total sum of 16,000 NGN');
    }
  })
}


// VIP4 product activation cycle
if (localStorage.getItem('vip4Price')) {
  chart4.style.display = 'block';

  let btn4Count = 0;
  const vip4Balance = 900;
  let vip4currentDate = Date.now();
  let vip4startDate = localStorage.getItem('vip4startDate');

  let vip4nextIncome = document.getElementById('next-vip4-income');
  
  var hourLeftForVip4Income;

cycle4Loop = () => {
  if (localStorage.getItem('vip4lastIncomeDate') == null) {
    var hourLeftForVip4Income = (frequency - (vip4currentDate - localStorage.getItem('vip4startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip4Income = (frequency - (vip4currentDate - localStorage.getItem('vip4lastIncomeDate'))) / (1000 * 3600);
  }

  vip4nextIncome.innerHTML = Math.round(hourLeftForVip4Income) + ' hours';
}

  btn4.addEventListener('click', function addBalanceVip4() {

    if (JSON.parse(localStorage.getItem('btn4Count')) < 25 && localStorage.getItem('vip4lastIncomeDate') == null && vip4currentDate - vip4startDate >= frequency) {

      localStorage.setItem("vip4Balance", vip4Balance);
      localStorage.setItem("v4", vip4Balance);

      localStorage.setItem('vip4lastIncomeDate', vip4currentDate);

      alert("Congrats! You've received 900 NGN daily income");

      btn4Count++;

      localStorage.setItem("btn4Count", btn4Count);
    }

    else if (JSON.parse(localStorage.getItem('btn4Count')) < 25 && (vip4currentDate - localStorage.getItem('vip4lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn4Count')) < 25 && (vip4currentDate - localStorage.getItem('vip4lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip4Balance", vip4Balance);

      localStorage.setItem('vip4lastIncomeDate', vip4currentDate);

      alert("Congrats! You've received 900 NGN daily income");

      btn4Count++;

      localStorage.setItem("btn4Count", btn4Count);
    }

    else {
      alert('You have earned a total sum of 22,500 NGN');
    }
  })
}


// VIP5 product activation cycle
if (localStorage.getItem('vip5Price')) {
  chart5.style.display = 'block';

  let btn5Count = 0;
  const vip5Balance = 1100;
  let vip5currentDate = Date.now();
  let vip5startDate = localStorage.getItem('vip5startDate');

  let vip5nextIncome = document.getElementById('next-vip5-income');
  
  var hourLeftForVip5Income;

cycle5Loop = () => {
  if (localStorage.getItem('vip5lastIncomeDate') == null) {
    var hourLeftForVip5Income = (frequency - (vip5currentDate - localStorage.getItem('vip5startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip5Income = (frequency - (vip5currentDate - localStorage.getItem('vip5lastIncomeDate'))) / (1000 * 3600);
  }

  vip5nextIncome.innerHTML = Math.round(hourLeftForVip5Income) + ' hours';
}

  btn5.addEventListener('click', function addBalanceVip5() {

    if (JSON.parse(localStorage.getItem('btn5Count')) < 30 && localStorage.getItem('vip5lastIncomeDate') == null && vip5currentDate - vip5startDate >= frequency) {

      localStorage.setItem("vip5Balance", vip5Balance);
      localStorage.setItem("v5", vip5Balance);

      localStorage.setItem('vip5lastIncomeDate', vip5currentDate);

      alert("Congrats! You've received 1,100 NGN daily income");

      btn5Count++;

      localStorage.setItem("btn5Count", btn5Count);
    }

    else if (JSON.parse(localStorage.getItem('btn5Count')) < 30 && (vip5currentDate - localStorage.getItem('vip5lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn5Count')) < 30 && (vip5currentDate - localStorage.getItem('vip5lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip5Balance", vip5Balance);

      localStorage.setItem('vip5lastIncomeDate', vip5currentDate);

      alert("Congrats! You've received 1,100 NGN daily income");

      btn5Count++;

      localStorage.setItem("btn5Count", btn5Count);
    }

    else {
      alert('You have earned a total sum of 33,000 NGN');
    }
  })
}


// VIP6 product activation cycle
if (localStorage.getItem('vip6Price')) {
  chart6.style.display = 'block';

  let btn6Count = 0;
  const vip6Balance = 2200;
  let vip6currentDate = Date.now();
  let vip6startDate = localStorage.getItem('vip6startDate');

  let vip6nextIncome = document.getElementById('next-vip6-income');
  
  var hourLeftForVip6Income;
  
cycle6Loop = () => {
  if (localStorage.getItem('vip6lastIncomeDate') == null) {
    var hourLeftForVip6Income = (frequency - (vip6currentDate - localStorage.getItem('vip6startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip6Income = (frequency - (vip6currentDate - localStorage.getItem('vip6lastIncomeDate'))) / (1000 * 3600);
  }

  vip6nextIncome.innerHTML = Math.round(hourLeftForVip6Income) + ' hours';
}


  btn6.addEventListener('click', function addBalanceVip6() {

    if (JSON.parse(localStorage.getItem('btn6Count')) < 35 && localStorage.getItem('vip6lastIncomeDate') == null && vip6currentDate - vip6startDate >= frequency) {

      localStorage.setItem("vip6Balance", vip6Balance);
      localStorage.setItem("v6", vip6Balance);

      localStorage.setItem('vip6lastIncomeDate', vip6currentDate);

      alert("Congrats! You've received 2,200 NGN daily income");

      btn6Count++;

      localStorage.setItem("btn6Count", btn6Count);
    }

    else if (JSON.parse(localStorage.getItem('btn6Count')) < 35 && (vip6currentDate - localStorage.getItem('vip6lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn6Count')) < 35 && (vip6currentDate - localStorage.getItem('vip6lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip6Balance", vip6Balance);

      localStorage.setItem('vip6lastIncomeDate', vip6currentDate);

      alert("Congrats! You've received 2,200 NGN daily income");

      btn6Count++;

      localStorage.setItem("btn6Count", btn6Count);
    }

    else {
      alert('You have earned a total sum of 77,000 NGN');
    }
  })
}


// VIP7 product activation cycle
if (localStorage.getItem('vip7Price')) {
  chart7.style.display = 'block';

  let btn7Count = 0;
  const vip7Balance = 3400;
  let vip7currentDate = Date.now();
  let vip7startDate = localStorage.getItem('vip7startDate');

  let vip7nextIncome = document.getElementById('next-vip7-income');
  
  var hourLeftForVip7Income;

cycle7Loop = () => {
  if (localStorage.getItem('vip7lastIncomeDate') == null) {
    var hourLeftForVip7Income = (frequency - (vip7currentDate - localStorage.getItem('vip7startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip7Income = (frequency - (vip7currentDate - localStorage.getItem('vip7lastIncomeDate'))) / (1000 * 3600);
  }

  vip7nextIncome.innerHTML = Math.round(hourLeftForVip7Income) + ' hours';
}


  btn7.addEventListener('click', function addBalanceVip7() {

    if (JSON.parse(localStorage.getItem('btn7Count')) < 40 && localStorage.getItem('vip7lastIncomeDate') == null && vip7currentDate - vip7startDate >= frequency) {

      localStorage.setItem("vip7Balance", vip7Balance);
      localStorage.setItem("v7", vip7Balance);

      localStorage.setItem('vip7lastIncomeDate', vip7currentDate);

      alert("Congrats! You've received 3,400 NGN daily income");

      btn7Count++;

      localStorage.setItem("btn7Count", btn7Count);
    }

    else if (JSON.parse(localStorage.getItem('btn7Count')) < 40 && (vip7currentDate - localStorage.getItem('vip7lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again " + 'later');
    }

    else if (JSON.parse(localStorage.getItem('btn7Count')) < 40 && (vip7currentDate - localStorage.getItem('vip7lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip7Balance", vip7Balance);

      localStorage.setItem('vip7lastIncomeDate', vip7currentDate);

      alert("Congrats! You've received 3,400 NGN daily income");

      btn7Count++;

      localStorage.setItem("btn7Count", btn7Count);
    }

    else {
      alert('You have earned a total sum of 136,000 NGN');
    }
  })
}


// VIP8 product activation cycle
if (localStorage.getItem('vip8Price')) {
  chart8.style.display = 'block';

  let btn8Count = 0;
  const vip8Balance = 4300;
  let vip8currentDate = Date.now();
  let vip8startDate = localStorage.getItem('vip8startDate');

  let vip8nextIncome = document.getElementById('next-vip8-income');
  
  var hourLeftForVip8Income;

cycle8Loop = () => {
  if (localStorage.getItem('vip8lastIncomeDate') == null) {
    var hourLeftForVip8Income = (frequency - (vip8currentDate - localStorage.getItem('vip8startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip8Income = (frequency - (vip8currentDate - localStorage.getItem('vip8lastIncomeDate'))) / (1000 * 3600);
  }

  vip8nextIncome.innerHTML = Math.round(hourLeftForVip8Income) + ' hours';
}

  btn8.addEventListener('click', function addBalanceVip8() {

    if (JSON.parse(localStorage.getItem('btn8Count')) < 45 && localStorage.getItem('vip8lastIncomeDate') == null && vip8currentDate - vip8startDate >= frequency) {

      localStorage.setItem("vip8Balance", vip8Balance);
      localStorage.setItem("v8", vip8Balance);

      localStorage.setItem('vip8lastIncomeDate', vip8currentDate);

      alert("Congrats! You've received 4,300 NGN daily income");

      btn8Count++;

      localStorage.setItem("btn8Count", btn8Count);
    }

    else if (JSON.parse(localStorage.getItem('btn8Count')) < 45 && (vip8currentDate - localStorage.getItem('vip8lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + 'later');
    }

    else if (JSON.parse(localStorage.getItem('btn8Count')) < 45 && (vip8currentDate - localStorage.getItem('vip8lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip8Balance", vip8Balance);

      localStorage.setItem('vip8lastIncomeDate', vip8currentDate);

      alert("Congrats! You've received 4,300 NGN daily income");

      btn8Count++;

      localStorage.setItem("btn8Count", btn8Count);
    }

    else {
      alert('You have earned a total sum of 193,500 NGN');
    }
  })
}


// VIP9 product activation cycle
if (localStorage.getItem('vip9Price')) {
  chart9.style.display = 'block';

  let btn9Count = 0;
  const vip9Balance = 5700;
  let vip9currentDate = Date.now();
  let vip9startDate = localStorage.getItem('vip9startDate');

  let vip9nextIncome = document.getElementById('next-vip9-income');
  
  var hourLeftForVip9Income;

cycle9Loop = () => {
  if (localStorage.getItem('vip9lastIncomeDate') == null) {
    var hourLeftForVip9Income = (frequency - (vip9currentDate - localStorage.getItem('vip9startDate'))) / (1000 * 3600);
  }
  else {
    var hourLeftForVip9Income = (frequency - (vip9currentDate - localStorage.getItem('vip9lastIncomeDate'))) / (1000 * 3600);
  }

  vip9nextIncome.innerHTML = Math.round(hourLeftForVip9Income) + ' hours';
}


  btn9.addEventListener('click', function addBalanceVip9() {

    if (JSON.parse(localStorage.getItem('btn9Count')) < 50 && localStorage.getItem('vip9lastIncomeDate') == null && vip9currentDate - vip9startDate >= frequency) {

      localStorage.setItem("vip9Balance", vip9Balance);
      localStorage.setItem("v9", vip9Balance);

      localStorage.setItem('vip9lastIncomeDate', vip9currentDate);

      alert("Congrats! You've received 5,700 NGN daily income");

      btn9Count++;

      localStorage.setItem("btn9Count", btn9Count);
    }

    else if (JSON.parse(localStorage.getItem('btn9Count')) < 50 && (vip9currentDate - localStorage.getItem('vip9lastIncomeDate')) < frequency) {

      alert("Oops! You can't claim another income yet. Please try again" + ' later');
    }

    else if (JSON.parse(localStorage.getItem('btn9Count')) < 50 && (vip9currentDate - localStorage.getItem('vip9lastIncomeDate')) >= frequency) {

      localStorage.setItem("vip9Balance", vip9Balance);

      localStorage.setItem('vip9lastIncomeDate', vip9currentDate);

      alert("Congrats! You've received 5,700 NGN daily income");

      btn9Count++;

      localStorage.setItem("btn9Count", btn9Count);
    }

    else {
      alert('You have earned a total sum of 285,000 NGN');
    }
  })
}


setInterval(cycle0Loop, 1000);
setInterval(cycle1Loop, 1000);
setInterval(cycle2Loop, 1000);
setInterval(cycle3Loop, 1000);
setInterval(cycle4Loop, 1000);
setInterval(cycle5Loop, 1000);
setInterval(cycle6Loop, 1000);
setInterval(cycle7Loop, 1000);
setInterval(cycle8Loop, 1000);
setInterval(cycle9Loop, 1000);
})
