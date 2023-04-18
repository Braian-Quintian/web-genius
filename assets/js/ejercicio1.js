/* 
Dada la información sobre un usuario del servicio de agua:
- Nombre
- Estrato(1,2,3,4,5)
- consumo del mes (cm3)
Se pide calcular el valor a pagar por servicio de agua, conociendo que el servicio es
la suma de la tarifa básica más valor del consumo.
La tarifa básica depende del estrato, así:
Estrato   Tarifa Básica
   1       $10000
   2       $15000
   3       $30000
   4       $60000
   5       $80000
   El valor del consumo es la multiplicación entre el consumo del mes por $100 (valor de 1 cm3)
*/
function validarDatos(){
    var consumo = document.getElementById("consumo").value;
    if(isNaN(consumo) || consumo < 0){
      alert("El consumo del mes debe ser un número mayor o igual a cero.");
      return false;
    }
    return true;
  }
  
  function liquidarServicio(){
    if(!validarDatos()){
      return;
    }
    
    var name = document.getElementById("name").value 
    var estrato=parseInt(document.getElementById("estrato").value)
    var consumo=parseInt(document.getElementById("consumo").value)
    var tarifaBasica=0,valorConsumo=0,valorPagar=0
    switch(estrato){
      case 1:tarifaBasica=10000;break
      case 2:tarifaBasica=15000;break
      case 3:tarifaBasica=30000;break
      case 4:tarifaBasica=60000;break
      case 5:tarifaBasica=80000;break  
    }
    valorConsumo=consumo*100
    valorPagar=tarifaBasica + valorConsumo
    document.getElementById("titulo").innerHTML="Valor a pagar: "
    document.getElementById("valorPagar").innerHTML=valorPagar
  }
  