$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:1000,
    margin:14,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        426:{
            items:3,
            nav:false,
            dots:false
        },
        1025:{
            items:4,
            nav:false,
            loop:true,
            dots:false
        }
    }
})

const nav = ["Home","Popular","Movies", "TV-Series"]
const links = ["#Home", "#Popular", "#Movies" ,"#TV-Series"]
let text = "<ul class='ulheader'>"

for(let i=0;i<nav.length;i++) {
    text += "<li><a href="+links[i]+">" + nav[i] + "</a></li>"
}

text += "</ul>"

document.getElementById("nav").innerHTML=text

function massageBoxOn(id){
    document.getElementById("massagebox").style.display = "block";
}

function massageBoxOff(){
    document.getElementById("massagebox").style.display = "none";
}
