
  var useragent = navigator.userAgent;
 
 //alert(useragent);
 
  //localStorage.setItem('uAgent', useragent);
  


  const user1 = "Mozilla/5.0 (Linux; Android 7.1; HUAWEI TAG-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36"
  
  const user2 = "Mozilla/5.0 (Linux; Android 7.1; HUAWEI TAG-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36"
  
  const user3 = "Mozilla/5.0 (Linux; Android 7.1; HUAWEI TAG-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36"
  
  delaySus = () => {
     window.location.replace('404.html');
  }

 /* if(useragent === user1 || useragent === user2 || useragent === user3){
    
    iziToast.error({
      timeout: 3500,
      title: 'Oops!',
      message: 'Your account has been suspended for submitting Invalid payment receipt!',
      position: 'topRight',
    });
    setTimeout(delaySus, 3500);
  }*/
