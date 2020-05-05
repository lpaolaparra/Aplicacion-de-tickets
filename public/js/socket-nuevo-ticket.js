
//comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

// on - escuchar sucesos
socket.on('connect',function(){
    console.log('Conectado al sevidor');
});

socket.on('disconnect',function(){
    console.log('Perdimos conexion con el servidor');
})

// on 'estadoActual'
socket.on('estadoActual',function(resp){
    label.text(resp.actual);
    console.log(resp.actual);
})

//evento listener para los botones
$('button').on('click',function(){

    //quiero que el servidor diga cual es el siguiente ticket
    socket.emit('siguienteTicket',null,function(siguienteTicket){

        label.text(siguienteTicket);

    });
})