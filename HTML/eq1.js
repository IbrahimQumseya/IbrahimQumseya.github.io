document.getElementById("id_logic_version").innerHTML = "Logic bersion = 2019.10.11.1";
document.getElementById("id_solve").addEventListener("click",solve);

function read_coefficients(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;
	var coef = {};
	coef.a = a;
	coef.b = b;
	coef.c = c;
	return coef;
	
}

function compute_solutions(coef){
	var delta = coef.b * coef.b - 4 *coef.a *coef.c;
	var x1_im,x1_re,x2_im,x2_re;
	
	if (delta >= 0){
		x1_re = (-coef.b - Math.sqrt(delta)) / (2*coef.a);
		x2_re = (-coef.b + Math.sqrt(delta)) / (2*coef.a);
		x1_im =0;
		x2_im=0;
		
	}else{
		x1_re = -coef.b / (2*coef.a);
		x2_re = -coef.b / (2*coef.a);
		x1_im =(- Math.sqrt(-delta)) / (2*coef.a);
		x2_im=(+ Math.sqrt(-delta)) / (2*coef.a);
		
	}
	var solution ={};
	solution.x1_re = x1_re;
	solution.x2_re = x2_re;
	solution.x1_im = x1_im;
	solution.x2_im = x2_im;
	return solution;
}

function print_solutions(solution){
	document.getElementById("id_x1").innerHTML = solution.x1_re + " + " + solution.x1_im + " i ";
	document.getElementById("id_x2").innerHTML = solution.x2_re + " + " + solution.x2_im + " i ";
	
}


function solve()
{
	var coef = read_coefficients();
	var solution = compute_solutions(coef);
	print_solutions(solution);
}