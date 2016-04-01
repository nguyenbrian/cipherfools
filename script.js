window.onload = function() {
        var music = new Audio("beautifulmorning.mp3")
        var higher = new Audio("canwegetmuchhigher.mp3")
        var kanye = new Image();
        kanye.src = 'ThemanyfacesofKanye.jpg';
      setTimeout(function() {
         $("body").css("animation","shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite")
         $("a").css("animation", "rainbow 8s infinite")
      }, 15000)
 
 
    setTimeout(function() {
        for (i = 0; i < 4; i++) {
            var array =["I used to love Kanye.", "Straight from the soul Kanye.", "And now I look and look around and" ,"There's so many Kanyes!"]
            alert(array[i])
        }
        $("body").css("background-image","url('ThemanyfacesofKanye.jpg')")
        $("#main").html("KANYE")
        $("#main").css("font-size", "150px")+
        music.play();
        setTimeout(function() {
            higher.play();
            alert("April Fools! Made with ♥ by Cipher :)")
            higher.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  
}, false);
higher.play();
$("#main").css("animation", "spin 10s linear infinite")
        }, 10000)
      }, 15000)
 
}