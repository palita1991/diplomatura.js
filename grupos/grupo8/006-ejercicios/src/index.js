/* EJERCICIo 2 QUE INCLUYE EL 1 */

/* const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

function createTable() {
  const bodyTable = document.getElementById('cuerpoTabla');

  MOUNTAINS.forEach((m) => {
    let tr = document.createElement('tr');

    let tdNombre = document.createElement('td');
    tdNombre.textContent = m.name;
    tr.appendChild(tdNombre);

    let tdHeight = document.createElement('td');
    tdHeight.textContent = m.height;
    tr.appendChild(tdHeight);

    let tdPlace = document.createElement('td');
    tdPlace.textContent = m.place;
    tr.appendChild(tdPlace);

    bodyTable.appendChild(tr);
  });

  document.getElementById('table').setAttribute('border', '2');
}

let buttonEnglish = document.getElementById('buttonEnglish');
let buttonSpanish = document.getElementById('buttonSpanish');

buttonEnglish.addEventListener('click', function () {
  document.getElementById('app').innerHTML =
    '<table id=table><thead><tr><th>Name</th><th>Height</th><th>Place</th></tr></thead><tbody id=cuerpoTabla></tbody></table>';
  createTable();
});

buttonSpanish.addEventListener('click', function () {
  document.getElementById('app').innerHTML =
    '<table id=table><thead><tr><th>Nombre</th><th>Altura</th><th>Lugar</th></tr></thead><tbody id=cuerpoTabla></tbody></table>';
  createTable();
});
 */

/* EJERCICIO 3 */

// const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];
// let divTabla = document.getElementById('tabla');
// let buttonAgregate = document.getElementById('buttonAdd');

// let ul = document.createElement('ul');
// TODO.forEach((elem) => {
//   let li = document.createElement('li');
//   li.textContent = elem;
//   /* Creo el boton del li */
//   let buttonLi = document.createElement('button');
//   /* Al boton le agrego la funcion que se encarga de eleiminar el padre cuando se le haga click */
//   buttonLi.onclick = function removeParent(e) {
//     let triggerButon = e.target;
//     triggerButon.parentNode.remove();
//   };
//   buttonLi.textContent = 'X';
//   /* Le asigno como hijo el boton al li */
//   li.appendChild(buttonLi);
//   ul.appendChild(li);
// });
// divTabla.appendChild(ul);

// buttonAgregate.addEventListener('click', function () {
//   let inputContent = document.getElementById('inputElement').value;
//   if (!inputContent == '') {
//     /* Tomo la tabla */
//     let table = document.getElementById('tabla');
//     /* Tomo el hijo de la tabla, en este caso el UL */
//     let ulTable = document.getElementById('tabla').firstChild;
//     /*  Creo el elemento li */
//     let li = document.createElement('li');
//     li.textContent = inputContent;
//     /* Creo el boton del li */
//     let buttonLi = document.createElement('button');
//     /* Al boton le agrego la funcion que se encarga de eleiminar el padre cuando se le haga click */
//     buttonLi.onclick = function removeParent(e) {
//       let triggerButon = e.target;
//       triggerButon.parentNode.remove();
//     };
//     buttonLi.textContent = 'X';
//     /* Le asigno como hijo el boton al li */
//     li.appendChild(buttonLi);
//     /* Le asigno como hijo el li al ul de la tabla */
//     ulTable.appendChild(li);
//     /* Le asgino como hijo el ul a la tabla */
//     table.appendChild(ulTable);
//   }
// });

let divGeneral = document.getElementById('globos');

let cantGlobos = Math.floor(Math.random() * 20) + 10;
for (let i = 0; i < cantGlobos; i++) {
  let divGlobo = document.createElement('div');
  divGlobo.style.border = '2px solid red';
  divGlobo.style.height = '5em';
  divGlobo.style.width = '5em';
  divGlobo.style.borderRadius = '50px';
  divGlobo.onclick = removerGlobo;
  /* divGlobo.style = 'border: 2px solid red'; */
  divGeneral.appendChild(divGlobo);
}

function removerGlobo(e) {
  let cantHijos = divGeneral.children.length;
  if (cantHijos == 1) {
    alert('Felicidades ganaste');
  }
  e.target.remove();
}
