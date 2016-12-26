

		
function playsound(a){

		const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${a.keyCode}"]`);
	
		console.log(audio,key);
		audio.currentTime = 0;
		audio.play();
		key.classList.add("playing");
}


function endoftransition(a){

		

		this.classList.remove("playing");
}

const keys =document.querySelectorAll(".key");
window.addEventListener("keydown",playsound);
keys.forEach(key => key.addEventListener("transitionend",endoftransition));

