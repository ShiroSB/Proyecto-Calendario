const horas_dia = 24;

function store(){
  let horas_necesarias = parseInt(document.getElementById("horas_necesarias").value);
  let lunes = parseInt(document.getElementById("lunes").value);
  let martes = parseInt(document.getElementById("martes").value);
  let miercoles = parseInt(document.getElementById("miercoles").value);
  let jueves = parseInt(document.getElementById("jueves").value);
  let viernes = parseInt(document.getElementById("viernes").value);
  let sabado = parseInt(document.getElementById("sabado").value);
  let domingo = parseInt(document.getElementById("domingo").value);
  let horas_semanales = lunes + martes + miercoles + jueves + viernes + sabado + domingo;
  localStorage.setItem("horas_semanales", horas_semanales);
  alert("Horas de la semana guardadas en localStorage");

  let fecha_final = fechaFinal(horas_semanales, horas_necesarias);
  document.getElementById("fecha_final").innerHTML = "Fecha final: " + fecha_final.toLocaleDateString();

}

function fechaFinal(horas_semanales, horas_necesarias) {
  const dias_totales = Math.ceil(horas_necesarias / horas_semanales);
  const fecha_actual = new Date();
  const fecha_final = new Date(fecha_actual.getTime() + (dias_totales * horas_dia * 60 * 60 * 1000));
  return fecha_final;
}
