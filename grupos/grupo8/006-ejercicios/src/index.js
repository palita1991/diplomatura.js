//LISTADO ESTÁTICO

const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

const lista = document.getElementById('listado');

const ul = document.createElement('ul');

TODO.forEach((m) => {
  const li = document.createElement('li');
  li.textContent = m;

  ul.appendChild(li);
  let remove = document.createElement('button');
  remove.textContent = 'X';
  remove.style.background = 'red';
  remove.style.color = 'white';
  remove.style.borderRadius = '10px';
  remove.style.padding = '3px';
  remove.style.marginLeft = '3px';
  remove.style.fontSize = '10px';
  remove.onclick = removeElement;
  li.appendChild(remove);

  document.getElementById('listado').appendChild(li);
});

//LISTADO DINÁMICO
let add = document.getElementById('add');
add.style.background = 'green';
add.style.color = 'white';
add.style.borderRadius = '25px';
add.style.padding = '5px';

add.addEventListener('click', function () {
  agregarElementos();
});

function agregarElementos() {
  let textoIngresado = document.getElementById('input').value;
  if (textoIngresado === '') {
    alert('No es un valor correcto');
  } else {
    let li = document.createElement('li');
    li.textContent = textoIngresado;
    ul.appendChild(li);

    let remove = document.createElement('button');
    remove.textContent = 'X';
    remove.style.background = 'red';
    remove.style.color = 'white';
    remove.style.borderRadius = '10px';
    remove.style.padding = '3px';
    remove.style.marginLeft = '3px';
    remove.style.fontSize = '10px';
    remove.onclick = removeElement;
    li.appendChild(remove);
    document.getElementById('listado').appendChild(li);
  }
}

function removeElement(e) {
  //Obtiene el elemento que desencadeno el evento
  let elemento = e.target;
  //Elimina el padre del elemento
  elemento.parentNode.remove();
}

//EJERCICIO 4
let numeroAleatorio = getRandom(10, 30);
let colores = ['red', 'blue', 'yellow'];
for (let i = 0; i < numeroAleatorio; i++) {
  let globo = document.createElement('div');
  globo.onclick = removeGlobo;
  let color = getRandom(0, 3);
  globo.style.background = colores[color];
  globo.style.width = '50px';
  globo.style.height = '50px';
  globo.style.marginLeft = '10px';
  globo.style.marginBottom = '10px';
  globo.style.borderRadius = '50px';
  document.getElementById('globos').appendChild(globo);
}

function removeGlobo(e) {
  let cantidad = getGlobos();
  console.log('cantidad', cantidad);

  if (getGlobos() === 1) {
    let titulo = document.createElement('h5');
    document.getElementById('globos').innerHTML = '¡G A N A S T E!';
  }

  //Obtiene el elemento que desencadeno el evento
  let elemento = e.target;
  //Elimina el padre del elemento
  elemento.remove();
}

function getGlobos() {
  let cantGlobos = document.getElementById('globos').children;

  return cantGlobos.length;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}
