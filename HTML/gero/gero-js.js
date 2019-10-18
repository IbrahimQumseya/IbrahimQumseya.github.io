window.addEventListener("deviceorientation", on_rotate_uab);

function on_rotate_uab(e){
	documentElement.getElementById("id_alpha").innerHTML = e.alpha;
	documentElement.getElementById("id_beta").innerHTML = e.beta;
	documentElement.getElementById("id_gamma").innerHTML = e.gamma;
}