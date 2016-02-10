var app = app || {}; 

app.util = (function() {
	'use strict';
	/**
	 * Vector para realizar pruebas
	 * @type {Array}
	 */
	var vector = [1,2,3,4,5,6];

	/**
	 * Objeto de recursividad
	 *
	 * @public
	 * @constructor
	 * 
	 */
	var Recursividad = function() {
		
	};

	/**
	 * Recorre un array
	 *
	 * @public
	 * @method
	 * @param  {Array} vector vector a recorrer
	 */
	Recursividad.prototype.recorrer = function (vector) {
		
		if(vector instanceof Array) {
			this._recorrer(vector, vector.length - 1);
		} else {
			throw 'El objeto no es un array';
		}
	};

	/**
	 * Funcion sobrecarga para recorrer
	 *
	 * @private
	 * @param  {Array} vector  a recorrer
	 * @param  {Number} posicion actual del vector 
	 */
	Recursividad.prototype._recorrer = function (vector, posicion) {
		
		if(posicion === 0) {
			console.log(vector[posicion]);
			return;
		} else {
			this._recorrer(vector, (posicion - 1));
		}

		console.log(vector[posicion]);
	}

	/**
	 * Calcula el factorial de un numero
	 *
	 * @public
	 * @method
	 * @param  {Number} numero del cual queremos saber el factorial
	 * @return {Number}        Factorial del numero pasado por parametro
	 */
	Recursividad.prototype.factorial = function (numero) {
		if(isNaN(numero)) {
			throw new Error("No es un numero");
		} else if(numero === 1 || numero <= 0) {
			return 1;
		} else {
			return numero * this.factorial(numero - 1);
		}
	}

	/**
	 * Calcula la multiplicacion de dos numeros mediante sumas
	 *
	 * @public
	 * @method
	 * @param  {Number} numero1 primer numero
	 * @param {Number} numero2 segundo numero
	 * @return {Number}    Retorna el resultado de multiplicar los dos numeros
	 */
	Recursividad.prototype.multiplicacionPorSumas = function (numero1, numero2) {
		if(isNaN(numero1) || isNaN(numero2)) {
			throw new Error("No es un numero");
		} else if(numero1 === 1) {
			return numero2;
		} else {
			return this.multiplicacionPorSumas(numero1 - 1, numero2) + numero2; 
		}
	}

	/**
	 * Calcula el valor en el limite dado
	 *
	 * @public
	 * @method
	 * @param  {Number} limite el indice del cual se quiere el valor de la serie
	 * @return {Number}        el valor en el indice dado
	 */
	Recursividad.prototype.serieFibonacci = function (limite) {
		if(isNaN(limite)) {
			throw new Error("el limite no es un numero");
		} else if(limite === 1 || limite === 2) {
			return 1;
		} else {
			return this.serieFibonacci(limite - 2) + this.serieFibonacci(limite - 1);
		}
	}

	Recursividad.prototype.comprobarSerieFibonacci = function (numero) {
		if(isNaN(numero)) {
			return new Error('No es un numero');
		} else {
			return this._comprobarSerieFibonacci(numero, 1);
		}
	}

	Recursividad.prototype._comprobarSerieFibonacci = function (numero, indice) {
		if(numero == this.serieFibonacci(indice)) {
			return true;
		} else if(this.serieFibonacci(indice) > numero) {
			return false;
		} else {
			return this._comprobarSerieFibonacci(numero, indice + 1);
		}
	}


	/**
	 * Calcula la division de dos numeros mediante restas
	 *
	 * @public
	 * @method
	 * @param  {Number} numero1 dividendo de la division
	 * @param  {Number} numero2 divisor de la division
	 * @return {Number}         el cociente de la division
	 */
	Recursividad.prototype.divisionPorRestas = function (numero1, numero2) {
		if(isNaN(numero1) || isNaN(numero2) || numero1 < numero2) {
			throw new Error("tienes que ingresar numeros, donde el primero "
								+ "sea mayor o igual al segundo");
		} else if((numero1 - numero2) === 0 || (numero1 - numero2) < numero2) {
			return 1;
		} else {
			return 1 + this.divisionPorRestas((numero1 - numero2), numero2);
		}
	}


	return {
		Recursividad : Recursividad
	}
})();

app.model = (function() {
	
	var Persona = function(nombre) {
		this.nombre = nombre || 'nombre';

		this.modificar = function() {
			this.nombre = this.nombre + ' !!';
		};
	};

	Persona.prototype.getNombre = function () {
		return this.nombre;
	};

	var Empleado = function(profesion) {
		this.profesion = profesion || 'profesion';

		this.calcularParcial = function() {
			this.profesion = this.profesion + '!!';
		};
	};

	Empleado.prototype = new Persona();

	Empleado.prototype.getProfesion = function () {
		return this.profesion;
	};

	return {
		Persona : Persona,
		Empleado : Empleado
	};

})();

function factorial (numero, array) {
	var res = 0;

	if(numero === 1) {

		res = 1;
	} else {
		anterior = factorial(numero - 1, array);
		res = anterior * numero;
		//imprimir(res);
	}
	array.push(res);
	return res;
}

//'use strict'
function fibo (limite) {
	var res = 0;
	if(limite === 1 || limite === 2) {
		res = 1;
	} else {
		var primero = fibo(limite - 2);
		var segundo = fibo(limite - 1);
		res = primero + segundo;
		//res =  fibo(limite - 2) + fibo(limite - 1);
		console.log(res);
	}

	return res;
}

function mostrar (numero, indice) {
	if(indice < numero) {
		console.log(indice + 1);
		mostrar(numero, indice + 1);
	} else {
		console.log('llega al final');
	}
	console.log("volviendo : " +  (indice));
}

function invertir (n) {
	if (n < 10) {
	    return n;
	} else {
	    return (n % 10)*(Math.pow(10, digitos(n) - 1)) + invertir(parseInt(n/10));
	}
}

function digitos(numero) {
	if(numero < 10) {
		return 1;
	} else {
		return digitos(parseInt(numero / 10)) + 1;
	}
}

function sumaDig(numero) {
	var res = 0;
	console.log(numero);
	if(numero < 10) {
		res = numero;
	} else {

		res = (numero%10) + sumaDig(parseInt(numero/10));
	}

	return res;
}

function sumarVector (vector, indice) {
	var suma = 0;
	if(indice < vector.length) {
		suma = vector[indice] + sumarVector(vector, indice + 1);
		console.log("backtraking : " + suma);
	}

	return suma;
}

function permutar(cadena, permutacion) {
	if(cadena.length === 0) {
		console.log(permutacion);
	} else {
		for (var i = 0;i < cadena.length; i++) {
			permutar(extraer(cadena, i), permutacion + cadena[i]);
			//console.log(cadena);
		}
	}
}

function extraer(cadena, indice) {
	var nueva = "";

	if(indice > 0 && indice != (cadena.length - 1)) {
		nueva = ""+nueva + cadena.substring(0, indice);
		nueva = nueva + cadena.substring(indice + 1, cadena.length);
	} else if(indice == (cadena.length - 1)) {
		//console.log(cadena.length - 1);
		nueva = cadena.substring(0, cadena.length - 1);
	} else {
		nueva = cadena.substring(1);
	}

	return nueva;
}

(function(namespace) {
	var Hexadecimal = function() {
		this.letras = ['A', 'B', 'C', 'D', 'E', 'F'];
	}

	Hexadecimal.prototype.convertir = function (decimal) {
		var res = '';
		if(decimal <= 15) {
			if(decimal >= 10) {
			 
				res  = '' + this.letras[(decimal - 10)]; 
			} else {
				res = '' + decimal; 
			}
		} else {
			var hexa = '' + this.convertir(parseInt(decimal / 16));
			var valor = (decimal % 16) >= 10 ? this.letras[(decimal % 16) - 10] : (decimal % 16); 
			res = hexa + valor;
		}

		return res;
	}

	namespace.Hexadecimal = Hexadecimal;
})(app.util ? app.util : window);

/**
 * Funcion principal de la aplicacion
 *
 * @main
 * @param  {Array} stringargs argumentos de string
 */
(function static_void_main(stringargs) {
	var mat = [
				[5, 3, 5], 
				[1, 2, 2],
				[4, 7, 1]
	];
	// var array = [3,6,1,9,34,45,6];
	var array = [];

	//matrix(mat, 0, 0, "", 0,"",array);	
	//console.log(mat);
	//console.log(array);
	//console.log(buscar(array, 45, 0));
})();

function matrix12 (mat, fil, col, pro,suma, camino,array) {
	if(fil >= 0 && fil < mat.length && col >= 0 && col < mat.length) {
		if(pro.indexOf("" + col) == -1 && fil == mat.length - 1) {
			array.push({x :fil , y : col, suma :Number(suma + mat[fil][col]), camino :""+camino + "" + fil + "" + col});
			//console.log(pro);
		} else {
			if(pro.indexOf("" + col) == -1) {
				//array.push({x :fil , y : col, suma :Number(suma + mat[fil][col])});
				matrix12(mat, fil + 1, 0, pro + "" + col, Number(suma + mat[fil][col]), "" + camino + "" + fil + "" + col,array);
				//parece que es en "pro" y en suma
				matrix12(mat, fil, col + 1, pro, suma, camino,array);			
			} else {
				//console.log(pro);
				matrix12(mat, fil, col + 1, pro, suma, camino,array);			
			}
		}
	} 
}

function buscar(array, valor, indice) {
	if(indice == array.length) {
		return false;
	} else {
		console.log("Entrando :"+indice);
		if(valor == array[indice]) {
			console.log(indice);
			return true;
		} else {
			res = buscar(array, valor, indice + 1);
			console.log("Saliendo : " + indice);
			return res;
		}
	}
}

//mal mal mal mal
function palindromo(cadena, ini, fin) {
	if(cadena.length == 1) {
		return true;
	} else {
		if(cadena[ini] == cadena [fin]) {
			var nueva = cadena.substring(ini + 1, fin - 1);
		    console.log(cadena.substring(ini + 1, fin - 1));
		    return palindromo(nueva , 0, nueva.length-1);
		} else {
			return false;
		}
	}
}

function invertirCadena (cadena, indice) {
	var caracter = '';
	if(indice === 0) {
		return cadena.charAt(indice);
	} else {
		nuevo = invertirCadena(cadena, indice - 1);
		caracter = cadena[indice] + nuevo;
	}
	return caracter;
}

function abinario(decimal) {
	var res = '';

	if(decimal <= 1) {
		res = decimal;
	} else {
		res = abinario(parseInt(decimal / 2));
		res = '' + res + (decimal % 2);
	}

	return res;
}

function recorrer(limite, indice) {
	if(indice >= limite && indice >= 0) {
		//console.log(numero);
	} else {
		//console.log("Entrando :" + indice);
		recorrer(limite, indice + 1);
		recorrer(limite, indice + 2);
	}
	console.log("Backtraking : " + indice);
}
function recomat (mat, fil, col) {
	if(fil == (mat.length - 1) && col == (mat.length - 1)) {
		console.log("Caso Base (empezar a ir atras): "+mat[fil][col]);
	} else {
		console.log("Entrando : " +  mat[fil][col]);
		if(col == (mat.length - 1)) {
			recomat(mat, fil + 1, 0);
		} else {
			recomat(mat, fil, col + 1);
		}
		console.log("Backtraking : " + mat[fil][col]);
	}
}

