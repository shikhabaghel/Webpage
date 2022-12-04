function page_setup(){
	// Update last modification date
	var myDate = new Date(document.lastModified);
	console.log('toISOString', myDate.toISOString());
	myNewDate = new Intl.DateTimeFormat("de-AT", {year: "numeric", month: "numeric", day: "numeric"}).format(myDate).replace(/\./g, '-');
	document.getElementById("last_updated").innerText = myNewDate; //document.lastModified;
}

function show_abstract(id){
	var abstracts = document.getElementsByClassName('abstract_div');
	for (const abs_i of abstracts) {
		abs_i.style.display = "none";
		if (id.split('_')[2] != abs_i.id){
			var idx = 'abstract_launcher_'.concat(abs_i.id);
			var elem = document.getElementById(idx);
			if (elem.innerText=="[-Abs]"){
				elem.innerText = "[+Abs]";
			}
		}
	}
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
	if(id=="volunteering"){
		document.getElementById("volunteering").style.display = "block";
		document.getElementById("awards").style.display = "none";
		document.getElementById("activities").style.display = "none";
		document.getElementById("volunteering_false_button").className = "false_button selected_false_button hyperlink";
		document.getElementById("awards_false_button").className = "false_button hyperlink";
		document.getElementById("activities_false_button").className = "false_button hyperlink";
	}
	else if(id=="awards"){
		document.getElementById("volunteering").style.display = "none";
		document.getElementById("awards").style.display = "block";
		document.getElementById("activities").style.display = "none";
		document.getElementById("volunteering_false_button").className = "false_button hyperlink";
		document.getElementById("awards_false_button").className = "false_button selected_false_button hyperlink";
		document.getElementById("activities_false_button").className = "false_button hyperlink";
	}
	else if(id=="activities"){
		document.getElementById("volunteering").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("activities").style.display = "block";
		document.getElementById("volunteering_false_button").className = "false_button hyperlink";
		document.getElementById("awards_false_button").className = "false_button hyperlink";
		document.getElementById("activities_false_button").className = "false_button selected_false_button hyperlink";
	}
}

function open_pane(){
	if (document.getElementById("menu_status").value=="closed"){
		document.getElementById("menu_pane").style.display = "block";
		document.getElementById("menu_status").value = "open";
		document.getElementsByTagName("body")[0].style.overflow = "hidden"
		document.getElementsByClassName('open_menu_pane')[0].style.color = "white";
		document.getElementById("menu_closed_icon").style.display = "none";
		document.getElementById("menu_open_icon").style.display = "inline";
	}
	else if (document.getElementById("menu_status").value=="open"){
		document.getElementById("menu_pane").style.display = "none";
		document.getElementById("menu_status").value = "closed";
		document.getElementsByTagName("body")[0].style.overflow = "scroll"
		document.getElementsByClassName('open_menu_pane')[0].style.color = "rgba(15, 38, 92, 1)";
		document.getElementById("menu_closed_icon").style.display = "inline";
		document.getElementById("menu_open_icon").style.display = "none";
	}
}

