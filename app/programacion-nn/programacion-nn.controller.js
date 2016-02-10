(function() {
	'use strict';

	angular
		.module('planificacion.programacionNN')
		.controller('ProgramacionNNController', ProgramacionNNController);

	ProgramacionNNController.$inject = ['$log', '$interval', '$timeout'];

	function ProgramacionNNController($log, $interval, $timeout) {
		var vm = this;

		vm.resultados = [];
		vm.costoMinimo = 0;

		vm.calcular = function() {
			vm.resultados = [];
			vm.costoMinimo = 0;

			$timeout(function(argument) {
				vm.costoMinimo = costoTotal;
				vm.resultados = asignacionOptima;
				
			}, 1000);
			//console.log("imprimiendo");
			//console.log(mapaResultado);	
		}

		function procesar(resultados) {
			
			console.log("fjdsalkjkl");
			var res = [];

			for(var i = 0;i < resultados.length;i++) {
				var objeto = {};
				var numero = Number(resultados[i].camino[i]) + 1;
				var numero2 = Number(resultados[i].camino[i+1]) + 1;
				objeto.tarea = "Tarea " + numero;
				objeto.maquina = "Maquina " + numero2;
				objeto.costominimo = resultados[i].suma; 
				res.push(objeto);
				vm.costoMinimo = vm.costoMinimo + resultados[i].suma;
			}		
			
			return res;
		}
	}
})();