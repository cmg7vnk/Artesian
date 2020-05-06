var imageArray = ["images/ModernSuite.jpg","images/RooftopPatio.jpg","images/ModernLivingSpace.jpg","images/ModernBedroom.jpg","images/ModernCloset.jpg","images/ModernBathroom.jpg"];
var currIdx = 0;


function nextImg() {
	if (currIdx == (imageArray.length-1)) {
		currIdx = 0;
	}else{
		currIdx += 1;
	}
	var currImage = document.getElementById("steImage");
	currImage.src = imageArray[currIdx];
}

function prevImg() {
	if (currIdx == 0) {
		currIdx = (imageArray.length-1);
	}else{
		currIdx -= 1;
	}
	var currImage = document.getElementById("steImage");
	currImage.src = imageArray[currIdx];
}