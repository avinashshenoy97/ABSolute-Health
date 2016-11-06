function addex(e) {
	var p = e.target.parentNode;
	var d = document.createElement("div");
	d.style = "margin-top: 10px; border: 1px solid white;";
	var sp = document.createElement("span");
	sp.textContent = '\u274C';
	sp.style = "float:right; cursor: pointer;";
	sp.addEventListener("click", rem, false);
	d.appendChild(sp);

	var s = document.createElement("select");
	s.id = "bodypart"
	s.addEventListener("change", chooseex, false);
	s.style = "display: block;";
	var o;
	var texts = new Array("Select...", "Shoulders", "Arms", "Abs", "Back", "Legs");

	for(var i = 0 ; i < texts.length ; i++) {
		o = document.createElement("option");
		o.textContent = o.value = texts[i];
		s.appendChild(o);
	}

	d.appendChild(s);
	p.appendChild(d);
}

function chooseex(e) {
	if(!e.target.value.localeCompare("Shoulders"))
		createPart(e, "Shoulders", new Array("Select...", "Lateral Raise Dumbbell", "Front Dumbbell Raise", "Shoulder Press", "Uprights", "Shrugs", "Pull Up", "Other"));
	else if(!e.target.value.localeCompare("Arms"))
		createPart(e, "Arms", new Array("Select...", "Bicep Curls", "Tricep Extension", "Hammer Curls", "Preacher Curls", "Tricep Pulldown", "Tricep Pushdown", "Bicep Cable Curls", "Others"));
	else if(!e.target.value.localeCompare("Abs"))
		createPart(e, "Abs", new Array("Select...", "Plank", "Sit Ups", "Crunches", "Leg Raises", "Other"));
	else if(!e.target.value.localeCompare("Back"))
		createPart(e, "Back", new Array("Select...", "Lat Pull", "Seated Rows", "Diverging Seated Rows", "Deadlift", "Barbell Rows", "Dumbbell Rows", "Other"));
	else if(!e.target.value.localeCompare("Legs"))
		createPart(e, "Legs", new Array("Select...", "Squats", "Lunges", "Leg Press", "Leg Extension", "Prone Leg Curls", "Calf Raises", "Other"));
}

function createPart(e, part, exer){
	var p = e.target.parentNode;
	var olds = p.lastChild;
	
	while(olds.firstChild)
		olds.firstChild.remove();
	
	var o = document.createElement("option");
	o.textContent = part;
	olds.appendChild(o);

	var s = document.createElement("select");
	s.addEventListener("change", exercise, false);
	var o;
	var texts = exer;

	for(var i = 0 ; i < texts.length ; i++) {
		o = document.createElement("option");
		o.textContent = o.value = texts[i];
		s.appendChild(o);
	}

	p.appendChild(s);
	var pl = new Array("Sets", "Reps", "Weight");
	for(var i = 0; i < pl.length ; i++) {
		var ip = document.createElement("input");
		ip.type = "text";
		ip.placeholder = ip.className = pl[i];
		ip.size = "6";
		ip.style = "margin-left: 10%;";
		ip.addEventListener("keydown", logIt, false);
		p.appendChild(ip);
	}
}

function logIt(e) {
	if(e.keyCode == 13)
		logE(e);
}

function exercise(e) {
	if(!e.target.value.localeCompare("Other")) {
		var ip = document.createElement("input");
		ip.type = "text";
		ip.placeholder = "Exercise Name";
		ip.size = "20";
		e.target.parentNode.replaceChild(ip, e.target);
	}
}

function createImg(srcf, srcb, eid, view, d) {
	var del = document.getElementById('f' + eid);
	if(del)
		del.remove();
	
	del = document.getElementById('b' + eid);
	if(del)
		del.remove();

	var i = document.createElement("img");

	switch(view) {
		case 'f' : 
			i.src = srcf;
			i.id = view + eid;
			i.style = "position: absolute; z-index: 2; top: 150px; left: 60%; height: 75%; width: auto;";
			d.appendChild(i);
			break;

		case 'b' :
			i.src = srcb;
			i.id = view + eid;
			i.style = "position: absolute; z-index: 2; top: 150px; left: 80%; height: 75%; width: auto;";
			d.appendChild(i);
			break;

		case 'o' :
			i.src = srcf;
			i.id = view + eid;
			i.style = "position: absolute; z-index: 2; top: 150px; left: 60%; height: 75%; width: auto;";
			d.appendChild(i);
			i = document.createElement("img");
			i.src = srcb;
			i.id = view + eid;
			i.style = "position: absolute; z-index: 2; top: 150px; left: 80%; height: 75%; width: auto;";
			d.appendChild(i);
			break;
	}
}

function weightFix(n) {
	if(n)
		return n;
	else
		return 1;
}

function logE(e) {
	var p = document.getElementById("log");
	var sets = p.getElementsByClassName("Sets");
	var reps = p.getElementsByClassName("Reps");
	var w = p.getElementsByClassName("Weight");

	var shld, arms, abs, back, legs;		//storing volumes
	shld = arms = abs = back = legs = 0;

	for(var i = 0 ; i < sets.length ; i++) {
		if(!sets[i].parentNode.querySelector("select").firstChild.value.localeCompare("Shoulders"))
			shld += parseInt(sets[i].value) * parseInt(reps[i].value) * weightFix(parseInt(w[i].value));
		else if(!sets[i].parentNode.querySelector("select").firstChild.value.localeCompare("Arms"))
			arms += parseInt(sets[i].value) * parseInt(reps[i].value) * weightFix(parseInt(w[i].value));
		else if(!sets[i].parentNode.querySelector("select").firstChild.value.localeCompare("Abs"))
			abs += parseInt(sets[i].value) * parseInt(reps[i].value) * weightFix(parseInt(w[i].value));
		else if(!sets[i].parentNode.querySelector("select").firstChild.value.localeCompare("Back"))
			back += parseInt(sets[i].value) * parseInt(reps[i].value) * weightFix(parseInt(w[i].value));
		else if(!sets[i].parentNode.querySelector("select").firstChild.value.localeCompare("Legs"))
			legs += parseInt(sets[i].value) * parseInt(reps[i].value) * weightFix(parseInt(w[i].value));

		if(isNaN(shld) || isNaN(arms) || isNaN(abs) || isNaN(back) || isNaN(legs)) {
			alert("Sets or Reps have to be numeric!");
			return;
		}
	}

	var d = document.getElementById("muscles");

	if(shld > 0) {
		 if(shld < 2000)
			createImg("images/stats/m/g_shoulders.png","images/stats/m/g_bshoulders.png" ,"Shoulders", 'o', d);
		else if(shld < 4000)
			createImg("images/stats/m/b_shoulders.png","images/stats/m/b_bshoulders.png" ,"Shoulders", 'o', d);
		else
			createImg("images/stats/m/r_shoulders.png","images/stats/m/r_bshoulders.png" ,"Shoulders", 'o', d);
	}

	if(arms > 0) {
		 if(arms < 2000)
			createImg("images/stats/m/g_arms.png","images/stats/m/g_barms.png" ,"Arms", 'o', d);
		else if(arms < 4000)
			createImg("images/stats/m/b_arms.png","images/stats/m/b_barms.png" ,"Arms", 'o', d);
		else
			createImg("images/stats/m/r_arms.png","images/stats/m/r_barms.png" ,"Arms", 'o', d);
	}

	if(abs > 0) {
		 if(abs < 2000)
			createImg("images/stats/m/g_abs.png","" ,"Abs", 'f', d);
		else if(abs < 4000)
			createImg("images/stats/m/b_abs.png","" ,"Abs", 'f', d);
		else
			createImg("images/stats/m/r_abs.png","" ,"Abs", 'f', d);
	}

	if(back > 0) {
		 if(back < 2000)
			createImg("", "images/stats/m/g_bback.png", "Back", 'b', d);
		else if(back < 4000)
			createImg("", "images/stats/m/b_bback.png", "Back", 'b', d);
		else
			createImg("", "images/stats/m/r_bback.png", "Back", 'b', d);
	}

	if(legs > 0) {
		 if(legs < 2000)
			createImg("images/stats/m/g_legs.png","images/stats/m/g_blegs.png" ,"Legs", 'o', d);
		else if(legs < 4000)
			createImg("images/stats/m/b_legs.png","images/stats/m/b_blegs.png" ,"Legs", 'o', d);
		else
			createImg("images/stats/m/r_legs.png","images/stats/m/r_blegs.png" ,"Legs", 'o', d);
	}
}

function clearAll(e) {
	var p = document.getElementById("log");
	var todel = p.getElementsByTagName("div");
	while(todel.length)
		todel[0].remove();

	p = document.getElementById("muscles");
	todel = p.children;

	while(todel[2])
		todel[2].remove();
}

function clearAllM(e) {
	p = document.getElementById("muscles");
	todel = p.children;

	while(todel[2])
		todel[2].remove();
}

function rem(e) {
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	clearAllM(e);
	logE(e);
}