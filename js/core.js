function page_setup(){
	// Update last modification date
	var myDate = new Date(document.lastModified);
	console.log('toISOString', myDate.toISOString());
	myNewDate = new Intl.DateTimeFormat("de-AT", {year: "numeric", month: "numeric", day: "numeric"}).format(myDate).replace(/\./g, '-');
	document.getElementById("last_updated").innerText = myNewDate; //document.lastModified;
}

function show_abstract(id){
	var button_text = document.getElementById(id).innerText;
	if(button_text == "[+Abs]"){
		document.getElementById(id).innerText = "[-Abs]";
		document.getElementById(id.split('_')[2]).style.display = "block";
	}
	else if(button_text == "[-Abs]"){
		document.getElementById(id).innerText = "[+Abs]";
		document.getElementById(id.split('_')[2]).style.display = "none";
	}
}
function focus_segment(id){
	if(id=="teaching_exp"){
		document.getElementById("teaching_exp").style.display = "block";
		document.getElementById("work_exp").style.display = "none";
		document.getElementById("talks").style.display = "none";
		document.getElementById("teaching_exp_false_button").style.backgroundColor = "rgba(230, 242, 189, 1)";
		document.getElementById("work_exp_false_button").style.backgroundColor = "white";
		document.getElementById("talks_false_button").style.backgroundColor = "white";
	}
	else if(id=="work_exp"){
		document.getElementById("teaching_exp").style.display = "none";
		document.getElementById("work_exp").style.display = "block";
		document.getElementById("talks").style.display = "none";
		document.getElementById("teaching_exp_false_button").style.backgroundColor = "white";
		document.getElementById("work_exp_false_button").style.backgroundColor = "rgba(242, 222, 250, 1)";
		document.getElementById("talks_false_button").style.backgroundColor = "white";
	}
	else if(id=="talks"){
		document.getElementById("teaching_exp").style.display = "none";
		document.getElementById("work_exp").style.display = "none";
		document.getElementById("talks").style.display = "block";
		document.getElementById("teaching_exp_false_button").style.backgroundColor = "white";
		document.getElementById("work_exp_false_button").style.backgroundColor = "white";
		document.getElementById("talks_false_button").style.backgroundColor = "rgba(237, 207, 180, 1)";
	}
}

