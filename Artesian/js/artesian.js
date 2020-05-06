
function mainMsg(){
	alert("The Artesian is fictional.\n This website is a showpiece.\nThanks for Visiting!");
}

/* Local Area  */

var sportsArray = ["FC Dallas<br>9200 World Cup Way<br>Frisco, TX  75033<br>214-705-6700<br><a href = 'https://www.fcdallas.com' target='_blank'>FC Dallas Website</a>",
				 "Dallas Cowboys<br>One Cowboys Way<br>Frisco, TX  75034<br>972-497-4800<br><a href = 'https://www.thestarinfrisco.com/' target='_blank'>Cowboys-The Star Website</a>",
				 "Rough Riders<br>7300 Rough Riders Trail<br>Frisco, TX 75034<br>972-731-9200<br><a href = 'https://www.milb.com/frisco' target='_blank'>Rough Riders Website</a>",
				 "Dallas Stars<br>2601 Avenue of the Stars<br>Frisco, TX 75034<br>214-387-5600<br><a href = 'https://www.nhl.com/stars/starcenters/frisco' target='_blank'>Dallas Stars Website</a>"];

var dineArray = ["The Star<br>One Cowboys Way<br>Frisco, TX  75034<br>972-497-4800<br><a href = 'https://www.thestarinfrisco.com/' target='_blank'>The Star Website</a>",
				 "Stonebriar Centre<br>2601 Preston Road<br>Frisco, TX  75034<br>972-668-6255<br><a href = 'https://www.shopstonebriar.com/en.html' target='_blank'>Stonebriar Website</a>",
				 "The Shops<br>5741 Legacy Drive<br>Plano, TX  75024<br>469-467-9995<br><a href = 'https://shopsatlegacy.com/' target='_blank'>Shops at Legacy Website</a>",
				 "Legacy West<br>7700 Windrose Avenue<br>Plano, TX  75024<br>469-702-8411<br><a href = 'https://legacywest.com/' target='_blank'>Legacy West Website</a>"];

var shopArray = ["Downtown<br>6101 Frisco Square Blvd<br>Frisco TX,  75034<br>972-292-5669<br><a href = 'https://www.visitfrisco.com/shopping/downtown-frisco/' target='_blank'>Downtown Frisco Website</a>",
				 "Stonebriar Centre<br>2601 Preston Road<br>Frisco, TX  75034<br>972-668-6255<br><a href = 'https://www.shopstonebriar.com/en.html' target='_blank'>Stonebriar Website</a>",
				 "The Shops<br>5741 Legacy Drive<br>Plano, TX  75024<br>469-467-9995<br><a href = 'https://shopsatlegacy.com/' target='_blank'>Shops at Legacy Website</a>",
				 "Legacy West<br>7700 Windrose Avenue<br>Plano, TX  75024<br>469-702-8411<br><a href = 'https://legacywest.com/' target='_blank'>Legacy West Website</a>"];


function localDine(){
	document.getElementById("localH2").innerHTML = "DINING";
	for (var i = 0; i < dineArray.length; i++) {
		var elmId = "loc"+i;
		document.getElementById(elmId).innerHTML = dineArray[i];
	}
	showMarker("B","E","F","G");
}


function localShop(){
	document.getElementById("localH2").innerHTML = "SHOPPING";
	for (var i = 0; i < shopArray.length; i++) {
		var elmId = "loc"+i;
		document.getElementById(elmId).innerHTML = shopArray[i];
	}
	showMarker("E","F","G","H");
}

function localSports(){
	document.getElementById("localH2").innerHTML = "SPORTS";
	for (var i = 0; i < sportsArray.length; i++) {
		var elmId = "loc"+i;
		document.getElementById(elmId).innerHTML = sportsArray[i];
	}
	showMarker("A","B","C","D");
}


function showMarker(w,x,y,z) {

	markerArray = ["A","B","C","D","E","F","G","H"];

	for (var i = 0; i < markerArray.length; i++) {
		if (markerArray[i] == w | markerArray[i] == x | markerArray[i] == y | markerArray[i] == z) {
			document.getElementById("marker"+markerArray[i]).style.display = "block";
		}else{
			document.getElementById("marker"+markerArray[i]).style.display = "none";
		}
		
	}

}

/*  Amenities*/

var recText = "<p>Our elegant clubhouse features a private indoor and outdoor lounge forentertaining guests. The sports bar is perfect for the big game with multipleflat screen TVs, pool tables, couches and daily cocktail hour.<br><br>Our fitness center is equipped with the latest exercise machines, freeweights, yoga studio and virtual on-demand programs.<br><br>Our cozy dining area has a 24-hour coffee bar and breakfast to order everymorning.<br><br><br>Hours of Operation:<br><br>Sports Lounge : 24-hours | 7 days a week<br><br>Cocktails: 7:00pm - 10:00pm | 7 days a week<br><br>Breakfast: 6:00am - 9:00am | 7 days a week</p>";

var poolText = "<p>Need a break from the Texas heat? How about a suntan? Maybe you crave a low-impact, total body workout and relaxing soak afterwards. Our resort-like aquatic center is perfect for leisure and exercise.<br><br>We have an Olympic-sized outdoor pool, separate hot tub, and pool-side private cabanas. Thinking about spending the day by the pool? Let us bring you drinks and snacks with our pool-side cocktail service.<br><br>Forgot your swimming equipment? No problem. Our guest boutique has everything you need, from swimsuits to sunscreen. So sit back, relax and soak up some rays.<br><br><br>Hours of Operation:<br><br>Pool and Cabanas: 10:00am - 10:00pm | 7 days a week<br><br>Hot Tub: 10:00am-Midnight | 7 days a week<br><br>Cocktail Service: 10:00am-10:00pm | Weekends</p>";

var courtsText = "<p>Step up your game and step onto our beautiful athletic courts. Whether shooting hoops is your jam or smashing overheads is your true love, we have you covered.<br><br>Our outdoor basketball court is top of the line and NBA regulation size. Rafael Nadal would be impressed with our clay tennis court, one of only a few available in North Texas. No teammate? We have a hitting wall and a ball machine to keep you at your competitive best.<br><br>Thinking of hosting a game with guests? Spectators will be most comfortable in our side court benches under the shade of our natural pergolas. Want to enjoy an evening game? The courts are automatically illuminated when occupied and use solar power.<br><br>Forgot your gear, no need to make a racket! You can borrow one of ours. We have everything you need from basketballs to sport bottles.<br><br><br>Hours of Operation:<br><br> 10:00am-10:00pm | 7 Days a Week</p>";

function amenPool(){
	document.getElementById("amenH2").innerHTML = "Aquatic Center";
	document.getElementById("amend3a").innerHTML = poolText;
	document.getElementById("amenImage").src = "images/ModernPool.jpg";
}

function amenRec(){
	document.getElementById("amenH2").innerHTML = "Recreation Center";
	document.getElementById("amend3a").innerHTML = recText;
	document.getElementById("amenImage").src = "images/gym.jpg";
}

function amenCourts(){
	document.getElementById("amenH2").innerHTML = "Athletic Courts";
	document.getElementById("amend3a").innerHTML = courtsText;
	document.getElementById("amenImage").src = "images/nadalTennis.jpg";
}

function amenBook(){
	document.getElementById("amenH2").innerHTML = "Book Courts";
}

