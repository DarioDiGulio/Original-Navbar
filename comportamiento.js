let botones = [
  document.getElementById(0),
  document.getElementById(1),
  document.getElementById(2),
  document.getElementById(3),
  document.getElementById(4),
];


function efecto(id) {
  let anterior = parseInt(id) - 1;
  let posterior = parseInt(id) + 1;
  let nav = document.getElementById("nav");
  for (let i = 0; i < botones.length; i++) {
    let elemento = document.getElementById(i);
    let colorFondo = elemento.value;
    if (i == id) {
      document.getElementById(anterior).style.borderRadius = "0px 30px 30px 0px";
      elemento.style.backgroundColor = colorFondo;
      elemento.className = 'italic'
      nav.style.backgroundColor = colorFondo;
      if (posterior != 5) {
        document.getElementById(posterior).style.borderRadius = "30px 0px 0px 30px";
      }
    } else {
      elemento.style.backgroundColor = "#0c2c53";
      if (i != posterior) {
        elemento.style.borderRadius = 0;
        elemento.className = 'bold'
      }
    }
  }
}
