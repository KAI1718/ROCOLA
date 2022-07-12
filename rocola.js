class Rocola{

	constructor(){
		this.creditos=0;
		this.canciones=[
			"canciones/Amanecer.mp3",
			"canciones/Die For You.mp3",
			"canciones/Joji - Ew.mp3",
			"canciones/neon.mp3"
		];
	}

	actualizarCreditos(num=null){
		if(num==-1){
			this.creditos--;
		}else
		if(num!=null){
			this.creditos=num;
		}
		document.getElementById('titulo').innerHTML="ROCOLA - "+this.creditos+" creditos";
	}

}

var audio=document.getElementById("audio");
var btn_play=document.getElementById('btn-play');
var rocola=new Rocola();
btn_play.innerHTML="Pausar";
rocola.actualizarCreditos();

document.getElementById('btn-aceptar').addEventListener("click",()=>{
	this.rocola.actualizarCreditos(3);
});

// Reprodiir y pausar cancion
btn_play.addEventListener("click",()=>{
	if(this.audio.currentTime>0 && this.audio.currentTime<this.audio.duration){
		if(this.audio.paused){
			this.audio.play();
			this.btn_play.innerHTML="Pausar";
		}else{
			this.audio.pause();
			this.btn_play.innerHTML="Continuar";
		}
	}
});

// Reproducir canciones
document.getElementById('cancion_1').addEventListener("click",()=>{
	this.reproducir(0);
});

document.getElementById('cancion_2').addEventListener("click",()=>{
	this.reproducir(1);
});

document.getElementById('cancion_3').addEventListener("click",()=>{
	this.reproducir(2);
});

document.getElementById('cancion_4').addEventListener("click",()=>{
	this.reproducir(3);
});

function reproducir(op){
	if(this.rocola.creditos>0){
		this.audio.currentTime=0;
		this.audio.src=this.rocola.canciones[op];
		this.audio.play();
		this.rocola.actualizarCreditos(-1);
	}else{
		alert("No tienes creditos");
	}
}