$(document).ready(function(){

	// Validación de campos
	function validarCampos(){
		let error = 0;
		$("input").each(function(){
			if($(this).val().length == 0){
				error = 1;
			}
		});
		if(error == 1){
			alert("Error: Revisar la entrada de datos");
			return false;
		}
		if(parseFloat($("#limiteInicialSuperior").val()) < parseFloat($("#limiteInicialInferior").val())){
			alert("Error: Revisar límites ingresados");
			$("#limiteInicialSuperior").val("");
			$("#limiteInicialInferior").val("");
			return false;
		}
		if((parseFloat($("#objetivo").val()) < parseFloat($("#limiteInicialInferior").val())) || (parseFloat($("#objetivo").val()) > parseFloat($("#limiteInicialSuperior").val()))){
			alert("El objetivo debe encontrarse entre los límites");
			$("#objetivo").val("");
			return false;
		}
		return true;
	}

	// Función para llenar la tabla con los resultados finales
	function llenarTabla(iteraciones,limSuperior, limInferior, cociente){
		$("#iteraciones").append("<tr>");
		$("#iteraciones").append("<td>"+iteraciones+"</td>");
		$("#iteraciones").append("<td>"+limSuperior.toFixed(2)+"</td>");
		$("#iteraciones").append("<td>"+limInferior.toFixed(2)+"</td>");
		$("#iteraciones").append("<td>"+cociente.toFixed(2)+"</td>");
		$("#iteraciones").append("</tr>");
	}

	// Función para cálculo de aproximación del punto medio 
	function calcularAproximacion(limSuperior, limInferior, objetivo, error){
		
		var valMax = parseFloat(objetivo + error).toFixed(2);
		var valMin = parseFloat(objetivo - error).toFixed(2);

		// Operación inicial para obtener primer cociente
		var cociente = ((limSuperior+limInferior)/2);
		var status = 0;
		var superiorRes = 0;
		var inferiorRes = 0;
		var iteraciones = 1;

		$("#resultados").css("display","block")
		$("#iteraciones").html("");
		$("#conclusion").html("");
		llenarTabla(iteraciones,limSuperior,limInferior,cociente);

		do{
			iteraciones = iteraciones + 1;
			superiorRes = limSuperior - objetivo;
			inferiorRes = objetivo - limInferior;

			// Inicializar valor con resultado anterior
			if((superiorRes) > (inferiorRes)){
				limSuperior = cociente;
			}
			else{
				limInferior = cociente;
			}
			
			cociente = ((limSuperior+limInferior)/2);
			llenarTabla(iteraciones,limSuperior,limInferior,cociente);
console.log(status);
			if(cociente >= valMin && cociente <= valMax){

				status = 1; // OK
				console.log(status);
			}

		}while(status == 0);
		$("#conclusion").html("Objetivo: "+objetivo.toFixed(2)+" -- Valores permitidos: "+valMin+" a "+valMax+" -- "+iteraciones+" iteraciones -- Error: "+error+" -- Valor obtenido: "+cociente.toFixed(2));
	}

	$('input').keypress(function(event) {
	    if (event.which != 46 && (event.which < 47 || event.which > 59))
	    {
	        event.preventDefault();
	        if ((event.which == 46) && ($(this).indexOf('.') != -1)) {
	            event.preventDefault();
	        }
	    }
	});

	$("#calcular").click(function(){
		if(validarCampos() == true){
			let limSuperior = parseFloat($("#limiteInicialSuperior").val());
			let limInferior = parseFloat($("#limiteInicialInferior").val());
			let objetivo    = parseFloat($("#objetivo").val());
			let error       = parseFloat($("#error").val());
			calcularAproximacion(limSuperior, limInferior, objetivo, error);
		}
	});

	$("#reset").click(function(){
		$("input").val("");
		$("#iteraciones").html("");
		$("#conclusion").html("");
		$("#resultados").css("display","none");
	});
});