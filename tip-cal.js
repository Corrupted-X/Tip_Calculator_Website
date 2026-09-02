/*JS for Tip Calc*/

function compute(){
	let cost = window.document.tip.cost.value;
	let quality = 0.0;
	
	if(window.document.tip.quality[0].checked == true)
		quality = 0.15;
	else if(window.document.tip.quality[1].checked == true)
		quality = 0.18;
	else if(window.document.tip.quality[2].checked == true)
		quality = 0.22;
	
	let total = cost * (1 + quality);
	total = total.toFixed(2);
	
	window.document.tip.amount.value = total;
}