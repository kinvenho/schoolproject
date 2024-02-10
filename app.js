/*const incomeInput = document.getElementById('gross_income');
const btn = document.getElementById('get_tax');
const ul = document.querySelector('ul');
let taxesArray = localStorage.getItem('taxes') ?
    JSON.parse(localStorage.getItem('taxes')) : [];

taxesArray.forEach(addTax);
function addTax(text) {
    const li = document.createElement('li')
    li.textContent = text;
    ul.appendChild(li);
}


btn.addEventListener('click', function () {
    if (incomeInput.value) {
        taxesArray.push(incomeInput.value);
        localStorage.setItem('taxes', JSON.stringify(taxesArray));
        addTax(incomeInput.value);
        incomeInput.value = '';
        location.href = './tax.html'
    } else {
        console.log('Please enter an income amount!');
    }
})*/


const incomeInput = document.querySelector('#gross_income');
const calculateBtn = document.querySelector('.calculate-btn');
const period = document.querySelector('#period');

calculateBtn.addEventListener('click', function(){
    console.log(incomeInput.value)
});