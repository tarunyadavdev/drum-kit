for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

function clickHandler(){
    var thisName = this.innerHTML;
    makeSound(thisName);
    animationKey(thisName);
}

document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    animationKey(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();           
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();           
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();           
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();           
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();           
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();           
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();           
            break;    
        default:
            break;
    }
}

function animationKey(pressedKey) {
    var activeKey = document.querySelector("."+pressedKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}