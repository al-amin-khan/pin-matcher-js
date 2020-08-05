function pinGenerator() {
  let pin = Math.round(1000 + Math.random()*9000);
  return pin;
}


document.getElementById('pin-generator-btn').addEventListener('click', function(){
  let pinValue = document.getElementById('pin').value = pinGenerator();
  console.log(pinValue);
});

const valueCapture = document.getElementsByClassName('number');

let output = '';
for (var i = 0; i < valueCapture.length; i++) {
  valueCapture[i].addEventListener('click', function(){
    let value = event.target.innerText;
    console.log(value);
    output=output+value;
  });
}
console.log(output);
