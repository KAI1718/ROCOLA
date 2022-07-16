alerta();
function alerta(){
	alert("De click en la persona para subir del ascensor. Click en la primera planta para bajarla");
}
var piso_actual=5;
var imagenes=[
    {img:document.createElement("img"),piso:null},
    {img:document.createElement("img"),piso:null},
    {img:document.createElement("img"),piso:null},
    {img:document.createElement("img"),piso:null},
    {img:document.createElement("img"),piso:null}
];
var persona=null;
var puntos=0;
var content_puntos=document.getElementById("puntos");
content_puntos.innerHTML=puntos;
for(let a=0; a<5; a++){
    this.imagenes[a].piso=(a+1);
    this.imagenes[a].img.src="imagenes/nada.svg";
    this.imagenes[a].img.addEventListener("click",()=>{
        this.cambiarPersona(this.imagenes[a]);
    });
    document.getElementById("piso"+(a+1)).appendChild(this.imagenes[a].img);
}

$(document).keydown(function(tecla){
    $('#subir').css('position', 'relative');
    if(tecla.keyCode == 38) { 
        if(piso_actual>1){
            piso_actual-=1;
            $('#subir').animate({top: "-=110px"}, 'fast');
        }
    }else if(tecla.keyCode == 40){
        if(piso_actual<5){
            piso_actual+=1;
           $('#subir').animate({top: "+=110px"}, 'fast'); 
        }
    }
});
agregarPersona();

function agregarPersona(){
    let num_img=Math.round(Math.random()*3);
    this.imagenes[num_img].img.src="imagenes/"+(num_img+1)+".png";
    //document.getElementById("piso"+num_piso).appendChild(this.imagenes[num_img].img);
}

function cambiarPersona(img){
     if(this.piso_actual==img.piso && this.piso_actual==5){
        if(this.persona==null){
            alert("No hay persona en el ascensor");
        }else{
            img.img.setAttribute("src",this.persona.img.getAttribute("src"));
            this.persona=null;
            this.puntos++;
            this.content_puntos.innerHTML=puntos;
            agregarPersona();
            document.getElementById("ascensor").innerHTML="0 / 1 Persona";
        }
    }else
    if(img.img.getAttribute("src")!="imagenes/nada.svg"){
        if(this.piso_actual==img.piso){
            if(this.persona==null){
                let img_temp={img:document.createElement("img"),piso:null};
                img_temp.img.setAttribute("src",img.img.getAttribute("src"));
                img_temp.piso=img.piso;
                this.persona=img_temp;
                img.img.setAttribute("src","imagenes/nada.svg");
                document.getElementById("ascensor").innerHTML="1 / 1 Persona";
            }else{
                alert("Ya hay una persona");
            }
        }
    }
}