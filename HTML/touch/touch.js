document.getElementById("id_logic").innerHTML ="Logic version = 2019.11.29.1";
window.addEventListener("touchstart",touch_start_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var client_rect = canvas.getBoundingClientRact();

function touch_start_uab(e)
{
	var t = e.changeTouches;
	for (var i =0;i<t.length;i++)
	{
		context.beginPath();
		context.arc(t[i].pageX-client rect.left,t[i].pageY - client_rect.top,10,0,2*Math.PI);
		context.stroke();
		
	}
}