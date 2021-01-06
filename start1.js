function Starttimer(){
    var timeleft = 59;
    var Timer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(Timer);
    }
    document.getElementById("countdown").innerHTML = timeleft;
    timeleft -= 1;
    }, 1000);
    }
    function Disableinputs(){
    setTimeout(() => {
    Array.from(document.getElementsByClassName("form-input")).forEach(
    function(element, index, array) 
    {
    element.disabled=true;
    }
    );
    }, 60 * 1000)
    }
    document.getElementById("signin").addEventListener("click", function(){
    Array.from(document.getElementsByClassName("form-input")).forEach(
    function(element, index, array) {
    element.disabled=false; 
    }
    );
    Starttimer();
    Disableinputs();
    });
    Starttimer();
    Disableinputs();
