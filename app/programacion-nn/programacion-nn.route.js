(function() {
	'use strict';

	angular
		.module('planificacion.programacionNN')
		.config(ConfiguracionRutasProgramacionNN);

	ConfiguracionRutasProgramacionNN.$inject = ['$stateProvider'];

	function ConfiguracionRutasProgramacionNN($stateProvider) {

		$stateProvider
			.state('app.planificacion', {
				url : '/planificacion',
				abstract : true,
				template : '<ui-view/>'
			})
			.state('app.planificacion.inicio', {
				url : '/inicio',
				templateUrl : 'app/programacion-nn/programacion-nn.view.html',
				controller : 'ProgramacionNNController',
				controllerAs : 'vm'
			})
		
	}

})();