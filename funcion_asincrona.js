"use strict";

console.log("Comienzo");

var escribeTras2Segundos = function(texto, callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 2000);

};

escribeTras2Segundos('texto', function(){
	escribeTras2Segundos("text2", function(){
		console.log("Fin");
	});
});

