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

function focus_segment_experiences(id){
	if(id=="teaching_exp"){
		document.getElementById("teaching_exp").style.display = "block";
		document.getElementById("work_exp").style.display = "none";
		document.getElementById("talks").style.display = "none";

		document.getElementById("teaching_exp_false_button").style.backgroundColor = "rgba(72, 156, 94, 1)";
		document.getElementById("teaching_exp_false_button").style.color = "white";

		document.getElementById("work_exp_false_button").style.backgroundColor = "white";
		document.getElementById("work_exp_false_button").style.color = "rgba(35, 36, 35, 0.8)";

		document.getElementById("talks_false_button").style.backgroundColor = "white";
		document.getElementById("talks_false_button").style.color = "rgba(35, 36, 35, 0.8)";
	}
	else if(id=="work_exp"){
		document.getElementById("teaching_exp").style.display = "none";
		document.getElementById("work_exp").style.display = "block";
		document.getElementById("talks").style.display = "none";

		document.getElementById("teaching_exp_false_button").style.backgroundColor = "white";
		document.getElementById("teaching_exp_false_button").style.color = "rgba(35, 36, 35, 0.8)";

		document.getElementById("work_exp_false_button").style.backgroundColor = "rgba(72, 156, 94, 1)";
		document.getElementById("work_exp_false_button").style.color = "white";

		document.getElementById("talks_false_button").style.backgroundColor = "white";
		document.getElementById("talks_false_button").style.color = "rgba(35, 36, 35, 0.8)";
	}
	else if(id=="talks"){
		document.getElementById("teaching_exp").style.display = "none";
		document.getElementById("work_exp").style.display = "none";
		document.getElementById("talks").style.display = "block";

		document.getElementById("teaching_exp_false_button").style.backgroundColor = "white";
		document.getElementById("teaching_exp_false_button").style.color = "rgba(35, 36, 35, 0.8)";

		document.getElementById("work_exp_false_button").style.backgroundColor = "white";
		document.getElementById("work_exp_false_button").style.color = "rgba(35, 36, 35, 0.8)";

		document.getElementById("talks_false_button").style.backgroundColor = "rgba(72, 156, 94, 1)";
		document.getElementById("talks_false_button").style.color = "white";
	}
}

function focus_segment_highlights(id){
	if(id=="awards"){
		document.getElementById("awards").style.display = "block";
		document.getElementById("activities").style.display = "none";

		document.getElementById("awards_false_button").style.backgroundColor = "rgba(72, 156, 94, 1)";
		document.getElementById("awards_false_button").style.color = "white";

		document.getElementById("activities_false_button").style.backgroundColor = "white";
		document.getElementById("activities_false_button").style.color = "rgba(35, 36, 35, 0.8)";
	}
	else if(id=="activities"){
		document.getElementById("awards").style.display = "none";
		document.getElementById("activities").style.display = "block";

		document.getElementById("awards_false_button").style.backgroundColor = "white";
		document.getElementById("awards_false_button").style.color = "rgba(35, 36, 35, 0.8)";

		document.getElementById("activities_false_button").style.backgroundColor = "rgba(72, 156, 94, 1)";
		document.getElementById("activities_false_button").style.color = "white";
	}
}

function open_pane(){
	if (document.getElementById("menu_status").value=="closed"){
		document.getElementById("menu_pane").style.display = "block";
		document.getElementById("menu_status").value = "open";
		document.getElementsByTagName("body")[0].style.overflow = "hidden"
		document.getElementsByClassName('open_menu_pane')[0].style.color = "white";
	}
	else if (document.getElementById("menu_status").value=="open"){
		document.getElementById("menu_pane").style.display = "none";
		document.getElementById("menu_status").value = "closed";
		document.getElementsByTagName("body")[0].style.overflow = "scroll"
		document.getElementsByClassName('open_menu_pane')[0].style.color = "rgba(15, 38, 92, 1)";
	}
}

