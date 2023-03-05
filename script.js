
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      if (string.length > 0) {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = "";
    }
    else if(e.target.innerHTML == '√'){
      string = Math.sqrt(parseFloat(string));
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '%') {
      // Evaluate the percentage
      string = eval(string) / 100;
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
