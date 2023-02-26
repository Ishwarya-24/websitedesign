var images = ['pic1.png','pic2.png','pic3.png','pic4.png','pic5.png','pic6.png']
var i =0;
function slideshow(){
    document.getElementById("image").src="images[i]";
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideShow()", 2000);

}
window.onload = slideshow;