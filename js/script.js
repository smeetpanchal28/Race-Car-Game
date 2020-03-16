//script.js
//
//Syntax of jQuery
//$(selector).member
//
//$(document).ready(function(){
//   //code 
//});
//
//but jquery also has a shorthand version for document ready Event
//$(function(){
//   //code 
//});

$(function(){
   //alert("hello");
//    $("#box").hide();
//    $(".thing").fadeOut(1000);
    $("h1").css("color","blue");
    $("button").click(function(){
        $("#box").fadeOut(1000);
    });
    
    /***********************Selectors*********************/
//    Grouping selectors
//    $("h2, h3, h4").css("border", "solid 1px red");
//    
//    ID selector
//    $("#div#container").css("border", "solid 1px red");
//    
//    Class selector
//    $("p.lead").css("border", "solid 1px red");
//    
//    Descendant Selector
//    $("div em").css("border", "solid 1px red");
//    
//    child selector
//    $("div>p").css("border", "solid 1px red");
//    
//    Psuedo-selector select first element
//    $("li:last").css("border", "solid 1px red");
//    
//    Psuedo selector for all even paragraphs
//    $("p:even").css("border", "solid 1px red");
//    
//    jquery selector to select all headings
//    $(":header").css("border", "solid 1px red");
//    
//    jquery contains selector
//    $("div:contains('love')").css("border", "solid 1px red");
    
    /*****************************************
                    jquery Events
    ******************************************/
    
    $("#box").click(function(){
       alert("You clicked"); 
    });
    
    $("input[type='text']").blur(function(){
      //this should act as selector
        if($(this).val() == ""){
            $(this).css("border", "solid 1px red");
            $("#box").text("Forgot to add something");
        }
    });

    $("input[type='text']").keydown(function(){
      //this should act as selector
        if($(this).val() !== ""){
            $(this).css("border", "solid 1px green");
            $("#box").text("Thanks for that mate");
        }
    });

    $("#box").hover(function(){
        $(this).text("You hovered in");
    }, function(){
        $(this).text("Your hovered out");
    });

    /*****************************************
                    jquery Chaining
    ******************************************/
    $(".notification-bar").delay(2000).slideDown().delay(3000).slideUp();

    /*****************************************
                    jquery CSS
    ******************************************/

    $("#circle2").css({
        'display': 'inline-block',
        'background': '#8a8',
        'color': 'white',
        'text-align': 'center',
        'line-height': '140px',
        'width': '140px',
        'height': '140px',
        'margin': '40px',
    }).addClass('circleShape');
    
    $("#name").blur(function(){
        if($(this).val() == "")
           $(this).addClass('danger');
        else
            $(this).removeClass('danger');
    });
    
    /*****************************************
                    jquery Hide-Show
    ******************************************/
    
//    $("div.hidden").fadeIn(8000);
    
    $("#box1").click(function(){
       $(this).fadeTo(3000, 0.25, function(){
            //callback
           $(this).slideUp(8000);
       }); 
    });
    
    $(".hidden").slideDown();
    $("button").click(function(){
       $("#box1").slideToggle(); 
    });
    
    /*****************************************
                    jquery Animate
    ******************************************/
    $("#left").click(function(){
       $(".box").animate({
            left: "-=40px",
            fontSize: "+=2px"
       });
    });
    $("#right").click(function(){
       $(".box").animate({
            left: "+=40px",
            fontSize: "-=2px"
       });
    });
    $("#up").click(function(){
       $(".box").animate({
            top: "-=40px",
            opacity: "+=0.1"
       });
    });
    $("#down").click(function(){
       $(".box").animate({
            top: "+=40px",
            opacity: "-=0.1"
       });
    });

    
    
    
    /*****************************************
                    jquery Race Car
    ******************************************/
    $("#go").click(function(){
       
        function checkIfComplete(){
            if(isComplete == false){
                isComplete = true;
            }else{
                place = "Second";
            }
        }
        //set the flag to false indicating the race has yet not completed
        var isComplete = false;
        
        //setting by default position as first
        var place = "first";
        
        //bring car1's width
        var car1Width = $("#car1").width();
        
        //bring car2's width
        var car2Width = $("#car2").width();
        
        //bringing racetrack 
        var raceTrack1Width = $(window).width() - car1Width;
        var raceTrack2Width = $(window).width() - car2Width;
        
        //generate random timing
        var raceTime1 = Math.floor(1 + Math.random() * 5000);
        var raceTime2 = Math.floor(1 + Math.random() * 5000);
        
        $("#car1").animate({
            left:raceTrack1Width
        }, raceTime1, function(){
            checkIfComplete();
            $("#raceInfo1 span").text('Finished in '+place+' place and clocked in at ' + raceTime1 + ' milliseconds');
        });

        $("#car2").animate({
            left:raceTrack2Width
        }, raceTime2, function(){
            checkIfComplete();
            $("#raceInfo2 span").text('Finished in '+place+' place and clocked in at ' + raceTime2 + ' milliseconds');
        });
        
    });
    
    $("#reset").click(function(){
       $(".car").css("left", "0");
        $(".raceInfo span").text("");
    });
    
});












