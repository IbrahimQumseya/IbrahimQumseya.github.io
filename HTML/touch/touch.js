document.getElementById("id_logic").innerHTML ="Logic version = 2019.11.29.2";
window.addEventListener("touchstart",touch_start_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var client_rect = canvas.getBoundingClientRact();

function get_randomColor()
{
	var tmp ="01234566789ABCDEF";
	var culoare = "#";
	for (var i=0;i<6;i++)
	{
		culoare += tmp[Math.floor(Math.random() * 16)]
		
	}
	return culoare;
	
}
function touch_start_uab(e)
{
	var t = e.changeTouches;
	for (var i =0;i<t.length;i++)
	{
		context.beginPath();
		context.arc(t[i].pageX - client_rect.left,t[i].pageY - client_rect.top,10,0,2*Math.PI);
		context.fillStyle = get_randomColor();
		context.strokeStyle = context.fillStyle;
		context.stroke();
		
	}
}