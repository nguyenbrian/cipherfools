window.onload = function() {
    
      setTimeout(function() {
         $("body").css("animation","shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite")
         $("a").css("animation", "rainbow 8s infinite")
      }, 10000)
 
 
    setTimeout(function() {
        for (i = 0; i < 10; i++) {
            alert('hi')
        } 

      }, 15000)
 
}