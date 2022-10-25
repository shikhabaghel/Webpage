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
