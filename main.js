
let kedvencek = [
    'Gyűrűk ura',
    'Harry Potter és a Bölcsek Köve',
    'Ragyogás',
    'Uncharted',
    'Orien Expressz',
];


function ujKedvencElem(cim){
    let label = document.createElement('label');
    label.textContent = cim + ': ';
    let number = document.createElement('input');
    number.type = 'number';
    number.min = 1;
    number.max = 5;
    number.value = 3;
    label.appendChild(number);
    return label;
}

function kedvencekBetoltese()
{
    let szuloElem = document.getElementById('lista');
    szuloElem.textContent = '';// Lista űrítése
    for( let k of kedvencek)
    {
        let listaElem = document.createElement('li');
        //listaElem.textContent = k;
        listaElem.appendChild(ujKedvencElem(k));
        szuloElem.appendChild(listaElem);
    }
}

function init(){
    document.getElementById('kedvencekBetoltesGomb').addEventListener('click', kedvencekBetoltese);
}

document.addEventListener('DOMContentLoaded', init);

