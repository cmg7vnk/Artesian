var suite = "100";


function rsvTennis(id){
	var rsvId = id;
	var day = rsvId.substring(1,3);
	var time = rsvId.substring(3);
	var calElement = document.getElementById(rsvId).innerHTML;

	if (calElement.includes("RSV") ) {
		alert("The requested time slot is unavailable. Please refer to the key below and try again.");
	}else{
		var rsvMsg = "Your request has been processed.<br>Suite: "+suite+"<br>Day: "+day+"<br>Time: "+time;
		document.getElementById("tennisMsg").innerHTML = rsvMsg;
		document.getElementById("tennisMsg").style.display = "block";
		document.getElementById(rsvId).innerHTML = "RSV<br>Ste<br>"+suite;
		document.getElementById(rsvId).style.backgroundColor = "#ffff4d";
	}
	
}

function rsvBasket(id){
	var rsvId = id;
	var day = rsvId.substring(1,3);
	var time = rsvId.substring(3);
	var calElement = document.getElementById(rsvId).innerHTML;

	if (calElement.includes("RSV") ) {
		alert("The requested time slot is unavailable. Please refer to the key below and try again.");
	}else{
		var rsvMsg = "Your request has been processed.<br>Suite: "+suite+"<br>Day: "+day+"<br>Time: "+time;
		document.getElementById("basketMsg").innerHTML = rsvMsg;
		document.getElementById("basketMsg").style.display = "block";
		document.getElementById(rsvId).innerHTML = "RSV<br>Ste<br>"+suite;
		document.getElementById(rsvId).style.backgroundColor = "#ffb833";
	}
	
}