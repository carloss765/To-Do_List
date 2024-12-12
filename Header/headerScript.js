// Accion Click del Menu
document.getElementById("menuImg").onclick = function(){
    var hidenDiv = document.getElementById("HidenDiv");
    if(hidenDiv.style.display === "none"){
        hidenDiv.style.display = "block";
    }else{
        hidenDiv.style.display = "none";
    }
};