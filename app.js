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




// faq

document.querySelectorAll('.faq-box').forEach(box => {
    const outer = box.querySelector('.outer');
    const inner = box.querySelector('.inner');
    const button = box.querySelector('.btn-faq');

    button.addEventListener('click', function() {
        box.classList.toggle('active');
        if (box.classList.contains('active')) {
            inner.style.display = 'block';
            box.style.maxHeight = inner.clientHeight + outer.clientHeight + 'px';
        } else {
            inner.style.display = 'none';
            box.style.maxHeight = outer.clientHeight + 'px';
        }
    });
});
