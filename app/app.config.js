(function() {
	'use strict';

	angular
		.module('planificacion')
		.config(ConfiguracionRutas);

	ConfiguracionRutas.$inject = ['$stateProvider','$urlRouterProvider'];

	function ConfiguracionRutas($stateProvider, $urlRouterProvider) {
		//Esta causando error con el evento onStateChangeStart()
		//$urlRouterProvider.otherwise('/inicio');
		//==solucion===
		$urlRouterProvider.otherwise(function($injector, $location){
	      	var $state = $injector.get("$state");
	      	$state.go('app.planificacion.inicio');
	  	});

		$stateProvider
			/**
			 * Estado principal de la aplicacion
			 */
			.state('app', {
				abstract : true,
				template : '<ui-view/>'
			});
	}

})(); 