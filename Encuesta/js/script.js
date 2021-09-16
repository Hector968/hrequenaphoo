function verificarRespuestas(){
    
    var total = 5;

    var puntos = 0;

    var myForm = document.forms["quizForm"];

    for( var i = 1; i < total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === "" ){
            alert("Por favor responder la pregunta" + i);
            return false;
        }else{
            if(myForm["p" + i].value){

            }
        }
    }
    
    return false;
}