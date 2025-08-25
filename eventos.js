let div = document.querySelector('div');
let btn = document.querySelector('button');
let alertdiv = true;

btn.addEventListener('click', ()=>{
    alertdiv = false;
});

div.addEventListener('click', ()=>{
    if(alertdiv){
        alert('Hola! Soy el div');
    }
    alertdiv = true;
});