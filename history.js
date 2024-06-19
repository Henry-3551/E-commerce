window.onload = function() {
  
  /*localStorage.removeItem('updatedPrice');
  localStorage.removeItem('updatedPriceB');
  localStorage.removeItem('updatedPriceC');
  localStorage.removeItem('updatedPriceD');
  localStorage.removeItem('updatedPriceE');
  localStorage.removeItem('updatedPriceF');
  localStorage.removeItem('updatedPriceG');
  localStorage.removeItem('updatedPriceH');
  localStorage.removeItem('updatedPriceI');
  localStorage.removeItem('updatedPriceJ');*/
  
  const noEvent = document.querySelector('.no_event')
  const historyContainer = document.querySelector('.history-container')
  
  
  if (localStorage.getItem('updatedPrice')) {
    var samePrice = JSON.parse(localStorage.getItem('updatedPrice'));
    localStorage.setItem('samePrice', samePrice);
    
    
    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPrice'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    

    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('updatedPriceB')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceB'));
    
    var textNodeBTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeBThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeBTwo);
    h6.appendChild(textNodeBThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container);
  }

  if (localStorage.getItem('c') || localStorage.getItem('updatedPriceC')) {

    let container = document.createElement('div');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let h6 = document.createElement('h6');
    
    let textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceC'));
    
    let textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    let textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('d') || localStorage.getItem('updatedPriceD')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceD'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('e') || localStorage.getItem('updatedPriceE')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceE'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('f') || localStorage.getItem('updatedPriceF')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceF'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('g') || localStorage.getItem('updatedPriceG')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceG'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('h') || localStorage.getItem('updatedPriceH')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceH'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('i') || localStorage.getItem('updatedPriceI')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceI'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }

  if (localStorage.getItem('j') || localStorage.getItem('updatedPriceJ')) {

    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
    
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPriceJ'));
    
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    
    var textNodeThree = document.createTextNode('APPROVED');
    
    
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
    
    
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
    
    noEvent.style.display = 'none';
    
    historyContainer.appendChild(container)
  }
  
  
  
  
  if (localStorage.getItem('updatedPrice') && localStorage.getItem('samePrice')) {
  
    var container = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    var h6 = document.createElement('h6');
  
    var textNode = document.createTextNode('Deposit Amount: NGN ' + localStorage.getItem('updatedPrice'));
  
    var textNodeTwo = document.createTextNode('Time: ' + localStorage.getItem('depositDate'));
    localStorage.setItem('textNodeTwo', textNodeTwo);
  
    var textNodeThree = document.createTextNode('APPROVED');
  
  
    h5.appendChild(textNode);
    p.appendChild(localStorage.getItem('textNodeTwo'));
    h6.appendChild(textNodeThree);
  
  
  
    h5.appendChild(textNode);
    p.appendChild(textNodeTwo);
    h6.appendChild(textNodeThree);
  
  
    container.appendChild(h5);
    container.appendChild(p);
    container.appendChild(h6);
  
    noEvent.style.display = 'none';
  
    historyContainer.appendChild(container)
  }
}
