var logimgs = document.getElementsByClassName("login");

for( i = 0 ; i < logimgs.length ; i++){
	logimgs[i].addEventListener("click",show,false);
}

function show(e){
	var choice = e.target.id;
	var img = e.target;
	if(choice == "login"){
		var f = document.createElement("form");
		f.setAttribute("method","post");
		f.setAttribute("action","login.php");
		f.setAttribute("id","log");
		var tb1 = document.createElement("input");
		tb1.setAttribute("type","text");
		tb1.setAttribute("placeholder","Enter username");
		tb1.setAttribute("name","uname");
		tb1.setAttribute("id","u");
		tb1.setAttribute("required","required");
		var tb2 = document.createElement("input");
		tb2.setAttribute("type","password");
		tb2.setAttribute("placeholder","Enter password");
		tb2.setAttribute("name","pwd");
		tb2.setAttribute("id","p");
		tb2.setAttribute("required","required");
		var tb3 = document.createElement("input");
		tb3.setAttribute("type","text");
		tb3.setAttribute("placeholder","Enter weight");
		tb3.setAttribute("name","weight");
		tb3.setAttribute("id","w");
		tb3.setAttribute("required","required");
		var sub = document.createElement("input");
		sub.setAttribute("type","submit");
		sub.setAttribute("id","submit");
		f.appendChild(tb1);
		f.appendChild(tb2);
		f.appendChild(tb3);
		f.appendChild(sub);
		ims = document.getElementById("logincontainer");
		while(ims.firstChild){
			ims.firstChild.remove();
		}
		ims.setAttribute("style","margin-top: 39px; width : 100%; height : 100%; position: absolute; padding: 0px; left :0px; right :0px; margin-right : 0px; margin-left : 0px; background-image : url('Images/login/login.png');");
		ims.appendChild(f);
		var valweight = document.getElementById("w");
		valweight.addEventListener("blur",checkweight,false);
		var valpwd = document.getElementById("p");
		valpwd.addEventListener("blur",checkpwd,false);
	}
	if(choice == "signup"){
		var f = document.createElement("form");
		f.setAttribute("method","post");
		f.setAttribute("action","signup.php");
		f.setAttribute("id","log");
		var tb1 = document.createElement("input");
		tb1.setAttribute("type","text");
		tb1.setAttribute("placeholder","Choose a username");
		tb1.setAttribute("name","uname");
		tb1.setAttribute("id","u");
		tb1.setAttribute("required","required");
		var tb2 = document.createElement("input");
		tb2.setAttribute("type","password");
		tb2.setAttribute("placeholder","Enter password");
		tb2.setAttribute("name","pwd");
		tb2.setAttribute("id","p");
		tb2.setAttribute("required","required");
		var tbc = document.createElement("input");
		tbc.setAttribute("type","password");
		tbc.setAttribute("placeholder","confirm password");
		tbc.setAttribute("name","pwd");
		tbc.setAttribute("id","pc");
		tbc.setAttribute("required","required");
		var tb3 = document.createElement("input");
		tb3.setAttribute("type","text");
		tb3.setAttribute("placeholder","Enter weight");
		tb3.setAttribute("name","weight");
		tb3.setAttribute("id","w");
		tb3.setAttribute("required","required");
		var sub = document.createElement("input");
		sub.setAttribute("type","submit");
		sub.setAttribute("id","submit");
		f.appendChild(tb1);
		f.appendChild(tb2);
		f.appendChild(tbc);
		f.appendChild(tb3);
		f.appendChild(sub);
		ims = document.getElementById("logincontainer");
		while(ims.firstChild){
			ims.firstChild.remove();
		}
		ims.setAttribute("style","margin-top: 39px; width : 100%; height : 100%; position: absolute; padding: 0px; left :0px; right :0px; margin-right : 0px; margin-left : 0px; background-image : url('Images/login/signup.png');");
		ims.appendChild(f);
		var valweight = document.getElementById("w");
		valweight.addEventListener("blur",checkweight,false);
		var valpwd = document.getElementById("p");
		valpwd.addEventListener("blur",checkpwd,false);
		var valpwdc = document.getElementById("pc");
		valpwdc.addEventListener("blur",checkpwdconf,false);
	}
} 

function checkweight(e){
	if(isNaN(e.target.value)){
		alert("Weight should be a number. Please re-enter!");
		e.target.value = " ";
	}
}

function checkpwd(e){
	if(e.target.value.length < 5){
		alert("Invalid password. Password must contain a minimum of 5 characters. Please re-enter!");
		e.target.value = "";
	}
}

function checkpwdconf(e){
	var chosen = document.getElementById("p");
	if(e.target.value != chosen.value){
		alert("Passwords dont match. Please re-enter!");
		e.target.value = "";
	}
}


