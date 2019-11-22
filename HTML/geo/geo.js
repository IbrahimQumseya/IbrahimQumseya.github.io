document.getElementById("id_logic").innerHTML = "logic version = 2019.11.22.1";
document.getElementById("id_button").addEventListener("click",start);
navigator.geolocation;

function start()
{
	navigator.geolocation.getCurrentPosition(on_ok_geo_uab,on_fail_geo_uab);
}

function on_ok_geo_uab(e){
	document.getElementById("geo-location").innerHTML = e.latitude +" "+e.coords+" "+ e.longtitude + " "+ e.coords.accuracy;
	
}

function on_fail_geo_uab(e){
	alert("Failed" + e);
}

