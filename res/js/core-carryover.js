document.addEventListener( "DOMContentLoaded", function codeCarryOver () {

	var core = document.querySelector( "#core" ),
		code = document.querySelector( "#code" );
	
	if ( core && code ) {
		code.textContent = core.outerHTML;
	}

});