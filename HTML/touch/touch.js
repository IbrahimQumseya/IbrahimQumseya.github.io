document.getElementById("id_logic").innerHTML ="Logic version = 2019.11.29.5";
window.addEventListener("touchstart",touch_start_uab);
window.addEventListener("touchmove",touch_move_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var client_rect = canvas.getBoundingClientRect();
var last_touch = [];

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
		context.fill();
		context.stroke();
		
		var touchInfo = {};
		touchInfo.x = t[i].pageX;
		touchInfo.y = t[i].pageY;
		touchInfo.color =context.fillStyle;
		touchInfo.id =t[i].identifier;
		
		last_touch.push(touchInfo);
		
	}
}

function touch_move_uab(e){
		var t = e.changeTouches;
	for (var i =0;i<t.length;i++)
	{
		var touchIndex = -1;
		for (var j=0;j<last_touch.length; j++)
		{
			if (t[i].identifier == last_touch[j].id)
			{
				touchIndex =j;
				break;
				
			}
		}
		context.beginPath();
		context.moveTo(last_touch[touchIndex].x - client_rect.left,last_touch[touchIndex].y - client_rect.top);
		context.lineTo(t[i].pageX - client_rect.left,t[i].pageY - client_rect.top);
		context.lineWidth = 20;
		context.strokeStyle = last_touch[touchIndex].color;
		context.fillStyle = last_touch[touchIndex].color;
		context.fill();
		context.stroke();
	}
	
	
	
	
	
}