$(document).ready(function()
{
    function switcher(choices,i)
    {
        i = 0;       
        this.Next = function() 
        {
            hide();
            show();
        }
        
        var hide = function()
        {
            if(choices)
            {
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show = function()
        {
            if(choices)
            {
                if(i == (choices.length))
                {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }    
        var pants = $(".pant");
        var shirts = $(".shirt");
        var hats = $(".hat");

        var up = document.getElementById("1up")
        var coin = document.getElementById("coin")
        var pow = document.getElementById("pow")

        var hatSwitch = new switcher(hats);
        document.getElementById("hatButton").onclick = function() {hatSwitch.Next(); up.play();}  
        var shirtSwitch = new switcher(shirts);
        document.getElementById("shirtButton").onclick = function() {shirtSwitch.Next(); coin.play();}        
        var pantsSwitch = new switcher(pants);
        document.getElementById("pantButton").onclick = function() {pantsSwitch.Next(); pow.play();}
})