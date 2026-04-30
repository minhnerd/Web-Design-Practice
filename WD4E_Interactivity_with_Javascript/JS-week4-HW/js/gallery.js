function setTabIndex(){
        previewImages = document.querySelectorAll(".container img")
        for (var i = 0; i < previewImages.length; i++) {
            console.log("Image" + i);
            previewImages[i].setAttribute("tabindex","0")
        }
    }

function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById('image').innerHTML = previewPic.alt;
	}

function unDo(){
    document.getElementById('image').style.backgroundImage = 'None';
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    }

