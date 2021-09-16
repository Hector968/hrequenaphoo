const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const campos = {
	usuario: false,
	usuario: false,
	usuario: false,
	usuario: false,
	usuario: false,
	usuario: false,
	usuario: false,
}




const validarFormulario = (e) => {
switch (e.target.name){
	case "usuario":
	validarCampo(expresiones.usuario, e.target, 'usuario');
	break;
	
	case "nombre":
	validarCampo(expresiones.nombre, e.target, 'nombre');
	break;
	
	case "apellido":
	validarCampo(expresiones.nombre, e.target, 'apellido');
	break;
	
	case "correo":
	validarCampo(expresiones.correo, e.target, 'correo');
	break;
	
	case "telefono":
	validarCampo(expresiones.telefono, e.target, 'telefono');
	break;
	
	case "estado":
	validarCampo(expresiones.nombre, e.target, 'estado');
	break;
	
	case "municipio":
	validarCampo(expresiones.nombre, e.target, 'municipio');
	break;
	
	case "parroquia":
	validarCampo(expresiones.nombre, e.target, 'parroquia');
	break;
}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById( `grupo__$(campo)`).classList.remove('formulario__grupo-incorecto');
		document.getElementById( `grupo__$(campo)`).classList.add('fomulario__grupo-correcto');
		document.querySelector(`#grupo__$ i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__$ i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__$ .formulario__input-error`).classList.remove('formulario__input-error-activo');
	} else {
		document.getElementById( `grupo__$(campo)`).classList.add('formulario__grupo-incorecto');
		document.getElementById( `grupo__$(campo)`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__$ i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__$ i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__$ .formulario__input-error`).classList.add('formulario__input-error-activo');
	}
}

inputs.forEach((input) => {
input.addEventListener('keyup' , validarFormulario);
input.addEventListener('blur' , validarFormulario);
} );
formulario.addEventListener('submit' , (e) => {

});