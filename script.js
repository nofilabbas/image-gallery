const fullImgBox = document.getElementById("fullImgBox");

const fullImg = document.getElementById("fullImg");

function openImage(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;

}


function closeImage(){
    fullImgBox.style.display = "none";
}