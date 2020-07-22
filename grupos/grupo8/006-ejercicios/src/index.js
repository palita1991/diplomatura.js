const MOUNTAINS = [
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
