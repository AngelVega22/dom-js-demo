//================================================================//

//1 - querySelectorAll
// alert(document.querySelector('h1').textContent)
parrafos = document.querySelectorAll('li')

for (let i = 0; i < parrafos.length; i++) {
    const element = parrafos[i];
    console.log(element.textContent)
}
//================================================================//

//2- getElementById
document.getElementById('dom').innerHTML = 'HTML'
document.getElementById('dom').style.color = 'blue'
document.getElementsByClassName('clase')[0].style.fontSize = '50px'

function escribir() {
    const texto = document.getElementById('escribir').value
    document.getElementById('texto').innerHTML = texto
}
function cambiarImagen() {
    document.getElementById('imagen').src = "img/dom_tree.png"
}
//================================================================//

//3- getElementByClassName
function borrar() {
    const collection = document.getElementsByClassName('borrado')[0];
    collection.innerHTML = "";
}
//================================================================//

//4- Validations
function validar() {

    let x = document.getElementById("numb").value;

    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Ingrese un número del 1 al 10";
    } else {
        text = "Correcto";
    }
    document.getElementById("demo").innerHTML = text;
}
function upperCase() {
    const x = document.getElementById("minuscula");
    x.value = x.value.toUpperCase();
}
//================================================================//

//5- Animations
function animar() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(mover, 5);
    function mover() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}


function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies estan habilitados.";
    } else {
        text = "Cookies no estan habilitados.";
    }
    document.getElementById("Cookies").innerHTML = text;
}
//================================================================//

// 6- Events
function mOver(obj) {
    obj.style.color = "blue"
}

function mOut(obj) {
    obj.style.color = "red"
}
//================================================================//

// 7- EventListener

document.getElementById("evento").addEventListener("click", alerta);

function alerta() {
    alert("Hola!");
}

document.getElementById("Abajo").innerHTML = document.getElementById("Dom").nodeName;



const body = document.body

body.append("Hola Mundo")

const div = document.createElement('div')
// div.innerText = "Hola"
div.textContent = "Hola"
body.append(div)

const div2 = document.createElement('div')

div2.innerHTML = "<strong>Hola</strong>"
body.append(div2)

const remover = document.querySelector('#remover')
remover.remove()
//================================================================//

//8- AJAX
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("ajax").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}