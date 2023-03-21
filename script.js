let keys = document.querySelectorAll('.key');
let keyboard = document.querySelector('.keyboard');
let input = document.querySelector("#display");
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');
let exp = '';

for (key of keys) {
    key.addEventListener('click', ()=>{
        exp = exp + event.target.textContent;
        input.value = exp;
    })
}

result.addEventListener('click', ()=>{
    exp = eval(input.value);
    input.value = exp;
})

reset.addEventListener('click', ()=>{
    exp = ''
    input.value = exp;
});