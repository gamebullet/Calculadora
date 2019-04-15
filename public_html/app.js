$(document).ready(function(){
	alert("ya esta bien jquery");

});









































/*
$("button").click(function(){
 alert("oprimiste el boton")
});
*/
/*
$("#btn-1").click(function(){
 alert("oprimiste el boton")
});

$(".btn-3").click(function(){
 alert("oprimiste el boton")
});
//
*/
/*
$("button").click(function(){
	var dato =$(this).attr("data");
	alert(dato);
});
*/
/*
$("button").click(function(){
	var boton=$(this).attr("identificador");
	alert(boton);

	if (boton=="1") {
		alert("has oprimido tu coprazon");
	}else if (boton=="2"){
		alert("has oprimido el 2");
	}else if (boton=="3"){
		alert( "has oprimido el boton 3");
	}
});
*/
$("button").click(function(){

		var boton = $(this).attr("identificador");

		$("#response").html(boton)
});