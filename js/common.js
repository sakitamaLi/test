window.onload = function(){
/*
	document.getElementById("hover").className = "hover";
	document.getElementById("link").onmouseover = function(){
		setTimeout(function(){
			document.getElementById("hover").className = "";
		}, 200);
	};
	document.getElementById("link").onmouseout = function(){
		setTimeout(function(){
			document.getElementById("hover").className = "hover";
		}, 200);
	};
*/
	if(document.getElementById("current") != null){
		document.getElementById("current").className = "current";
		document.getElementById("HCLeftTop").onmouseover = function(){
			setTimeout(function(){
				document.getElementById("current").className = "";
			}, 200);
		};
		document.getElementById("HCLeftTop").onmouseout = function(){
			setTimeout(function(){
				document.getElementById("current").className = "current";
			}, 200);
		};
	}
};