function selectTypeProduct() {
  const selectElement = document.getElementById('product-type');
  const selectValue = selectElement.value;

  switch(selectValue) {
    case 'frutas':
      addFruits();
      break;
    case 'verduras':
      addVegetables();
      break;
    case 'granos':
      addgranos();
      break;
    case 'carnes':
      addCarnes();
    break;
  }
}

function addFruits() {
  cleanOptions();
  const fruits = ['manzana', 'fresa', 'naranja', 'melon'];
  const selectProductElement = document.getElementById('product'); 
  fruits.forEach(function(frt) {
    const fruitElement = document.createElement('option');
    fruitElement.value = frt;
    fruitElement.className = 'product-item';
    fruitElement.text = frt.toUpperCase();

    selectProductElement.appendChild(fruitElement);
  });
}

function addVegetables() {
  cleanOptions();
  const vegetables = ['tomate', 'papa', 'rabano', 'zanahoria'];
  const selectProductElement = document.getElementById('product'); 
  vegetables.forEach(function(frt) {
    const fruitElement = document.createElement('option');
    fruitElement.value = frt;
    fruitElement.className = 'product-item';
    fruitElement.text = frt.toUpperCase();

    selectProductElement.appendChild(fruitElement);
  });
}

function addgranos(){
  cleanOptions();
  const granos = ['frijoles','trigo','cafe','arroz'];
  const selectProductElement = document.getElementById('product');
  granos.forEach(function(frt) {
    const fruitEelement = document.createElement('option');
    fruitEelement.value = frt;
    fruitEelement.className = 'product-item';
    fruitEelement.text = frt.toUpperCase();
    selectProductElement.appendChild(fruitEelement);
  });
}

function addCarnes(){
  cleanOptions();
  const granos = ['costilla','viuda','lomo','culotte'];
  const selectProductElement = document.getElementById('product');
  granos.forEach(function(frt) {
    const fruitEelement = document.createElement('option');
    fruitEelement.value = frt;
    fruitEelement.className = 'product-item';
    fruitEelement.text = frt.toUpperCase();
    selectProductElement.appendChild(fruitEelement);
  });
}

function cleanOptions() {
  const selectProductElement = document.getElementById('product');
  const options = document.getElementsByClassName('product-item');
  [...options].forEach(function(opt) {
    selectProductElement.removeChild(opt);
  });
}