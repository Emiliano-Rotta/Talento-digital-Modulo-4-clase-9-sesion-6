//Asi hubiera sido con JS puro
// const botonUno = document.getElementById("btn1")
// const botonDos = document.getElementById("btn2")
// const botonTres = document.getElementById("btn3")


JQuery
$(function(){
    $("#btn1").click(function(){
        $("#valorNom").val("Rodolfo")
    })
    $("#btn2").mouseenter(function(){
        $("body").css("background-color", "red")
    })
    $("#btn2").mouseleave(function(){
        $("body").css("background-color", "gray")
    })
})