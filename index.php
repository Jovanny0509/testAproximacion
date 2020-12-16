<!DOCTYPE html>
<html>
<head>
	<title>Test by Jovanny Ulloa</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<section class="text-center" style="margin: 20px;">
					<h1>Aproximación del punto medio</h1>
				</section>
				<section id="formularioDatos">
					<div class="form-group">
						<label for="limiteInicialSuperior">Límite Inicial Superior</label>
						<input type="text" id="limiteInicialSuperior" class="form-control">
					</div>
					<div class="form-group">
						<label for="limiteInicialInferior">Límite Inicial Inferior</label>
						<input type="text" id="limiteInicialInferior" class="form-control">
					</div>
					<div class="form-group">
						<label for="objetivo">Objetivo</label>
						<input type="text" id="objetivo" class="form-control">
					</div>
					<div class="form-group">
						<label for="error">Error</label>
						<input type="text" id="error" class="form-control">
					</div>
					<div class="form-group text-center">
						<button class="btn btn-success" id="calcular">Calcular</button>
						<button class="btn btn-info" id="reset">Reiniciar</button>
					</div>
				</section>
			</div>
			<div class="col-md-6">
				<div class="card" style="margin: 20px;">
					<div class="card-body">
						<h5 class="card-title">Bienvenido</h5>
						<p class="card-text">A continuación se muestra el siguiente formulario, en el que deberás ingresar todos los datos solicitados para realizar el cálculo de aproximación del punto medio.
						<ol>
							<li>Definir los límites superior e inferior de la aproximación.</li>
							<li>Definir el objetivo, es decir, el número al que se deberán acercar las iteraciones del algoritmo.</li>
							<li>Definir el error, es decir, el rango de dígitos al que se deberá acercar el algoritmo respecto al objetivo.</li>
							<li>Al terminar, presionar Calcular para desplegar las iteraciones realizadas para llegar al resultado esperado.</li>
						</ol>
						</p>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<section id="resultados" style="display: none;">
					<table class="table table-bordered">
						<thead class="thead-dark">
							<th>Iteración</th>
							<th>Valor 1</th>
							<th>Valor 2</th>
							<th>Resultado</th>
						</thead>
						<tbody id="iteraciones">
						</tbody>
						<tfoot>
							<tr>
								<td colspan="4" id="conclusion"></td>
							</tr>
						</tfoot>
					</table>
				</section>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</body>
</html>