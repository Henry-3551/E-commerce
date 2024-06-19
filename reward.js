
const inviteLink = document.getElementById('invite-link');
      
      const inviteCode = document.getElementById('invite-code');
      
      const copyLink = document.getElementById('copy-link');
      
      const copyCode = document.getElementById('copy-code');
      
      
      inviteLink.value = 'https://primetek-org.netlify.app/signup?id=' + localStorage.getItem('userphone');
      inviteLink.readOnly = true;
      
      inviteCode.value = localStorage.getItem('userphone');
      inviteCode.readOnly = true;
      
      function remCopy1() {
        copyLink.classList.remove('active');
        copyLink.innerHTML = 'Copy';
      }
      function remCopy2() {
        copyCode.classList.remove('active');
        copyCode.innerHTML = 'Copy';
      }
      
      copyLink.addEventListener('click', function(){
        copyLink.classList.add('active');
        inviteLink.select();
        navigator.clipboard.writeText(inviteLink.value);
        copyLink.innerHTML = 'Copied!';
        setTimeout(remCopy1, 1000);
        iziToast.success({
          timeout: 3000,
          title: 'Success!',
          message: 'Invite Link Copied successfully!',
        });
      });
      
      copyCode.addEventListener('click', function(){
        copyCode.classList.add('active');
        inviteCode.select();
        navigator.clipboard.writeText(inviteCode.value);
        copyCode.innerHTML = 'Copied!';
        setTimeout(remCopy2, 1000);
        iziToast.success({
          timeout: 3000,
          title: 'Success!',
          message: 'Invite Code Copied successfully!',
        });
      });
   
 
 
    // code to add 30 Naira to client reward balance
      const claimBtn = document.getElementById('claim-reward')
      
      var rewardBalance = document.getElementById('rewardBal');
      
      rewardBalance.readOnly = true;
      
      let initialBal = 200;
      
      rewardLoop = () => {
        if (localStorage.getItem('currentRewardBal') == null) {
          rewardBalance.value = initialBal;
          localStorage.setItem('currentRewardBal', rewardBalance.value);
        }
        else {
          rewardBalance.value = JSON.parse(localStorage.getItem('currentRewardBal'));
        }
      }
      setInterval(rewardLoop, 100);
    
      
      rewardBalance.value = initialBal;
      
      var checkInBonus = localStorage.getItem('checkInBonus');
      
      if (checkInBonus) {
      
        rewardBalvalue = JSON.parse(localStorage.getItem('currentRewardBal')) + JSON.parse(checkInBonus);
      
        localStorage.setItem('currentAccBal', accBalvalue);
      
        localStorage.removeItem('checkInBonus');
      }
      
        
        
     // var checkInDate = document.getElementById('date').innerHTML = date;
      
      //localStorage.removeItem('claimed');
      //localStorage.removeItem('checkInBonus');
    
      
      claimBtn.addEventListener('click',
        
        function checkIn() {
          var lastCheckinDate = localStorage.getItem("lastCheckinDate");
          
          var checkInBonus = 30;
          
          var threshold = 1000 * 60 * 60 * 24; // 24 hours in milliseconds
          let currentDate = Date.now();
          
          var reTime = (threshold - (currentDate - lastCheckinDate)) / (1000 * 3600);
          var hoursLeftToCheckin = Math.round(reTime);
          
          if (currentDate - lastCheckinDate < threshold) {
            
            iziToast.error({
              timeout: 3000,
              title: 'Error!',
              message: "You can't check in again yet. Please come back in " + hoursLeftToCheckin + " hours time!",
            });
         
            
            //alert('Please check again in ' + hoursLeftToCheckin + ' hours');
            // Not enough time has passed since the last reward
          }
            
            else {
              localStorage.setItem('checkInBonus', checkInBonus);
          
              localStorage.setItem("lastCheckinDate", currentDate);
       
              iziToast.success({
                timeout: 3000,
                title: 'Congrats!',
                message: "You've earned N" + checkInBonus + "!",
              });
              var today = new Date();
              var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              var dateTime = date + ' ' + time;
              
              var checkInDate = dateTime;
              
              localStorage.setItem('checkInDate', checkInDate);
              
              document.getElementById('date').innerHTML = dateTime;
            }
          })
document.getElementById('date').innerHTML = localStorage.getItem('checkInDate');

      
      /*function addBonus(){
        var date = new Date();
        var checkInHour = date.getHours();
        
        
        let checkInBonus = 30;
        
       
        var elapsedHours = checkInHour - JSON.parse(localStorage.getItem('checkInHour'));
        //document.getElementById('daily-checkin').innerHTML = elapsedHours;
        
        
        if(localStorage.getItem('claimed') && elapsedHours < 12){
          //localStorage.removeItem('claimed');
          claimBtn.innerHTML = 'Claimed!';
          claimBtn.classList.add('active');
          
          iziToast.error({
            timeout: 3000,
            title: 'Error!',
            message: 'You have checked-in already!',
          });
        }
        else if (localStorage.getItem('claimed') && elapsedHours >= 12) {
          
          localStorage.removeItem('claimed');
          
        }
        else {
          claimBtn.innerHTML = 'Claimed!';
          claimBtn.classList.add('active');
          
          localStorage.setItem('checkInHour', checkInHour);
          
          
          var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
       
          var checkInDate = dateTime;
          
          localStorage.setItem('checkInDate', checkInDate);
          
          document.getElementById('date').innerHTML = dateTime;
          
          
          localStorage.setItem('checkInBonus', checkInBonus);
    
          iziToast.success({
            timeout: 3000,
            title: 'Congrats!',
            message: 'You have received ₦30 CheckIn reward!',
          });
          
          localStorage.setItem('claimed', claimBtn.value);
        }
        
          //block of code to add #30 to reward balance
          
      });
      
      document.getElementById('date').innerHTML = localStorage.getItem('checkInDate');
    
    close.addEventListener('click', function(){
      bonusCard.style.display = 'none'
    })*/
