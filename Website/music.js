var tableimgs = document.getElementsByClassName("musictable");
var mainimgs = document.getElementsByClassName("music");

for( i = 0 ; i < tableimgs.length ; i++){
	tableimgs[i].addEventListener("click",enlarge,false);
	mainimgs[i].addEventListener("click",enlarge,false);
}

function enlarge(e){
	var i = ["Images/songs/work_music.png","Images/songs/relax_m.png","Images/songs/dance_music-3.png"];
	var im = document.createElement("img");
	if(e.target.id == "img1" || e.target.id == "img2" || e.target.id == "img3"){
		e.target.parentNode.parentNode.remove();
		var sub = document.getElementById("subnavdiv");
		sub.remove();
	}
	else{
		e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
		var main = document.getElementById("musiccontainer");
		main.remove();
	}
	var newdiv = document.createElement("div");
	newdiv.style = "position : absolute ; margin-top : 37px ; left : 0px ; right : 0px; padding : 0px ; width : 100% ; height : 100%;";
	if(e.target.id == "img1" || e.target.id == "tabimg1"){
		im.setAttribute("src",i[0]);
		newdiv.appendChild(im);
	}
	else if(e.target.id == "img2" || e.target.id == "tabimg2"){
		im.setAttribute("src",i[1]);
		newdiv.appendChild(im);
	}
	else if(e.target.id == "img3" || e.target.id == "tabimg3"){
		im.setAttribute("src",i[2]);
		newdiv.appendChild(im);
	}
	im.style = "width : 100% ; height : 100% ; position: absolute;"
	document.body.appendChild(newdiv);
	showmusic(e.target.id,newdiv);
	var foot = document.getElementById("footer");
	foot.style = "position : absolute ; margin-top : 845px"
}

function showmusic(imid,newdiv){
	var main = document.createElement("div");
	var dnall = document.createElement("div");
	var dnlink = document.createElement("a");
	var h2ele = document.createElement("h2");
	var dntext = document.createElement("h3");
	main.appendChild(h2ele);
	var play = "&#x25ba";
	var dwnld = "\u2B07";
	var workout = new Array();
	workout = ["Smoke Filled Room - Mako","One Dance - Drake (ft. Wizkid and Kayla)","Cold Water - Major Lazer Ft. Justin Beiber","No Money - Galantis","I Love It - Icona Pop Ft. Charlie XCX","Closer - Chainsmoker Ft. Hasley","The Greatest - Sia Ft. Kendrick Lamar","Faded - Alan Walker"];
	var dance = new Array();
	dance = ["How Deep is Your Love - Calvin Harris & Disciples","Cheap Thrills - Sia Ft. Sean Paul","Get Ugly - Jason Derulo","Cant Feel My Face - The Weeknd","Cake By The Ocean - DNCE","Sugar - Maroon-5","Worth It - Fifth Harmony Ft. Kid Ink","Lean On - Major Lazer x DJ Snake Ft. Mo"];
	var relax = new Array();
	relax = ["Blue In Green - Miles Davis","I'll Let You Know - Miles Davis","Where We Used To Live - E.S.T","I Still Believe In You - Eric Reed","Goodbye Pork Pie Hat - Charles Mingus","Gramercy Sunset - The Hot Sardines","I'll Wait And Pray - John Coltrane","The Nearness Of You - Joshua Redman"];
	var playlist = new Array();
	dntext.textContent = "Download All";
	dnlink.appendChild(dntext);
	dnlink.setAttribute("download","download");
	dnall.appendChild(dnlink);
	if(imid == "img1" || imid == "tabimg1"){
		playlist = workout;
		h2ele.textContent = "WORKOUT MUSIC";
		h2ele.style = "color : white ; margin-left : 350px;"
		dnlink.setAttribute("href","songs/workout.zip");
	}
	else if(imid == "img2" || imid == "tabimg2"){
		playlist = relax;
		h2ele.textContent = "RELAXING MUSIC";
		h2ele.style = "color : white ; margin-left : 370px;"
		dnlink.setAttribute("href","songs/relax.zip");
	}
	else if(imid == "img3" || imid == "tabimg3"){
		playlist = dance;
		h2ele.textContent = "DANCE MUSIC";
		h2ele.style = "color : white ; margin-left : 370px;"
		dnlink.setAttribute("href","songs/dance.zip");
	}
	for( i = 0 ; i < 8 ; i++){
		var temp = document.createElement("div");
		var t1 = document.createElement("div");
		var t2 = document.createElement("div");
		var tex = document.createElement("h4");
		var pl = document.createElement("h4");
		var dn = document.createElement("h4");
		var atag = document.createElement("a");
		var t2id = String(i);
		var tempid = "div"+String(i);
		var topmar = (i+1)*58;
		tex.innerHTML = playlist[i];
		pl.innerHTML = "  " + play;
		atag.setAttribute("download","download");
		atag.setAttribute("id","atag"+i);
		t2.setAttribute("id",t2id);
		pl.setAttribute("id",t2id);
		temp.setAttribute("id",tempid)
		dn.innerHTML = "  " + dwnld;
		t2.addEventListener("mouseover",changeptr,false);
		t2.addEventListener("mouseleave",changeptrback,false);
		if(imid == "img1" || imid == "tabimg1"){
			pl.addEventListener("click",playsong1,false);
			dn.addEventListener("click",dwnldsong1,false);
		}
		else if(imid == "img2" || imid == "tabimg2"){
			pl.addEventListener("click",playsong2,false);
			dn.addEventListener("click",dwnldsong2,false);
		}
		else if(imid == "img3" || imid == "tabimg3"){
			pl.addEventListener("click",playsong3,false);
			dn.addEventListener("click",dwnldsong3,false);
		}
		tex.style = "color : white;";
		pl.style = "color : white; float : left ;";
		dn.style = "color : white; float : left ;margin-left:7px;margin-top:18px;";
		t1.style = "float : left";
		if(i == 0){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 120px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 100px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 20px ;";
		}
		else if(i == 1){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 20px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 75px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 146px ;";
		}
		else if(i == 2){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 11px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 74px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 207px ;";
		}
		else if(i == 3){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 168px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 70px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 142px ;";
		}
		else if(i == 4){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 50px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 15px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 175px ;";
		}
		else if(i == 5){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 85px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 40px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 247px ;";
		}
		else if(i == 6){
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 41px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 54px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 111px ;";
		}
		else{
			if(imid == "img1" || imid == "tabimg1")
				t2.style = "float : left ; margin-left : 164px;";
			else if(imid == "img2" || imid == "tabimg2")
				t2.style = "float : left ; margin-left : 24px ;";
			else if(imid == "img3" || imid == "tabimg3")
				t2.style = "float : left ; margin-left : 78px ;";
		}
		temp.style = "position :absolute ; margin-top : "+topmar+"px; padding : 0px; height : 30px; margin-left : 240px;"
		atag.appendChild(dn);
		t1.appendChild(tex);
		t2.appendChild(pl);
		t2.appendChild(atag);
		temp.appendChild(t1);
		temp.appendChild(t2);
		main.appendChild(temp);
	}
	dnall.style = "position : absolute; margin-top : 550px; margin-left : 370px;"
	main.style = "width : 100% ; height : 100% ; padding : 20px; z-index : 2; position : absolute ; margin-top : 50px ; margin-left : 200px; display : inline-block;"
	main.appendChild(dnall);
	newdiv.appendChild(main);
}

function changeptr(e){
	e.target.style.cursor = "hand";
}

function changeptrback(e){
	e.target.style.cursor = "pointer";
}

function playsong1(e){
	var songnum = parseInt(e.target.id);
	var workout = new Array();
	workout = ["songs/workout/01 Smoke Filled Room (Original Mix).mp3","songs/workout/01 One Dance (feat. Wizkid & Kyla).mp3","songs/workout/Major Lazer Ft. Justin Bieber & MO - Cold Water (CDQ).mp3","songs/workout/No Money.mp3","songs/workout/I Love It.mp3","songs/workout/The Chainsmokers Ft. Hasley - Closer.mp3","songs/workout/Sia Ft. Kendrick Lamar - The Greatest.mp3","songs/workout/Faded.mp3"];
	var bar = document.createElement("audio");
	bar.setAttribute("controls","controls");
	var addsong = document.createElement("source");
	addsong.setAttribute("src",workout[songnum]);
	addsong.setAttribute("type","audio/mpeg");
	bar.appendChild(addsong);
	while(e.target.firstChild){
		e.target.firstChild.remove();
	}
	e.target.appendChild(bar);
}

function playsong2(e){
	var songnum = parseInt(e.target.id);
	var relax = new Array();
	relax = ["songs/relax/Blue In Green - Miles Davis.mp3","songs/relax/David HazeltineI'll Let You Know.mp3","songs/relax/E.S.T. - Where We Used To Live.mp3","songs/relax/Eric Reed - I Still Believe In You (Mp3FB.com).mp3","songs/relax/Goodbye Pork Pie Hat (Charles Mingus) (mp3goo.com).mp3","songs/relax/Gramercy Sunset...The Hot Sardines.mp3","songs/relax/I'll wait and pray.mp3","songs/relax/The nearness of you- Red Garland - Alessandro Ragno Sax Quartet.mp3"];
	var bar = document.createElement("audio");
	bar.setAttribute("controls","controls");
	var addsong = document.createElement("source");
	addsong.setAttribute("src",relax[songnum]);
	addsong.setAttribute("type","audio/mpeg");
	bar.appendChild(addsong);
	while(e.target.firstChild){
		e.target.firstChild.remove();
	}
	e.target.appendChild(bar);
}

function playsong3(e){
	var songnum = parseInt(e.target.id);
	var dance = new Array();
	dance = ["songs/dance/01 How Deep Is Your Love.mp3","songs/dance/01 Cheap Thrills (feat. Sean Paul).mp3","songs/dance/03 Get Ugly.mp3","songs/dance/Cant Feel My Face.mp3","songs/dance/Cake By The Ocean.mp3","songs/dance/05 Sugar.mp3","songs/dance/01 Worth It (feat. Kid Ink).m4a","songs/dance/Lean on.mp3"];
	var bar = document.createElement("audio");
	bar.setAttribute("controls","controls");
	var addsong = document.createElement("source");
	addsong.setAttribute("src",dance[songnum]);
	addsong.setAttribute("type","audio/mpeg");
	bar.appendChild(addsong);
	while(e.target.firstChild){
		e.target.firstChild.remove();
	}
	e.target.appendChild(bar);
}

function dwnldsong1(e){
	var songnum = e.target.parentNode.parentNode.id;
	songnum = Number(songnum.substring(3));
	var aid = "atag"+songnum;
	var workout = new Array();	
	workout = ["songs/workout/01 Smoke Filled Room (Original Mix).mp3","songs/workout/01 One Dance (feat. Wizkid & Kyla).mp3","songs/workout/Major Lazer Ft. Justin Bieber & MO - Cold Water (CDQ).mp3","songs/workout/No Money.mp3","songs/workout/I Love It.mp3","songs/workout/The Chainsmokers Ft. Hasley - Closer.mp3","songs/workout/Sia Ft. Kendrick Lamar - The Greatest.mp3","songs/workout/Faded.mp3"];
	var atag = document.getElementById(aid);
	atag.setAttribute("href",workout[songnum]);
}

function dwnldsong2(e){
	var songnum = e.target.parentNode.parentNode.id;
	songnum = Number(songnum.substring(3));
	var aid = "atag"+songnum;
	var relax = new Array();	
	relax = ["songs/relax/Blue In Green - Miles Davis.mp3","songs/relax/David HazeltineI'll Let You Know.mp3","songs/relax/E.S.T. - Where We Used To Live.mp3","songs/relax/Eric Reed - I Still Believe In You (Mp3FB.com).mp3","songs/relax/Goodbye Pork Pie Hat (Charles Mingus) (mp3goo.com).mp3","songs/relax/Gramercy Sunset...The Hot Sardines.mp3","songs/relax/I'll wait and pray.mp3","songs/relax/The nearness of you- Red Garland - Alessandro Ragno Sax Quartet.mp3"];
	var atag = document.getElementById(aid);
	atag.setAttribute("href",relax[songnum]);
}

function dwnldsong3(e){
	var songnum = e.target.parentNode.parentNode.id;
	songnum = Number(songnum.substring(3));
	var aid = "atag"+songnum;
	var workout = new Array();	
	dance = ["songs/dance/01 How Deep Is Your Love.mp3","songs/dance/01 Cheap Thrills (feat. Sean Paul).mp3","songs/dance/03 Get Ugly.mp3","songs/dance/Cant Feel My Face.mp3","songs/dance/Cake By The Ocean.mp3","songs/dance/05 Sugar.mp3","songs/dance/01 Worth It (feat. Kid Ink).m4a","songs/dance/Lean on.mp3"];
	var atag = document.getElementById(aid);
	atag.setAttribute("href",dance[songnum]);
}