$(function(){
  

    $('#rouge').mouseenter(function(){
        $('#text').css('color','red')
    });
    $('#rouge').mouseleave(function(){
        $('#text').css('color','black')
    });
    $('#vert').mouseenter(function(){
        $('#text').css('color','green')
    });
    $('#vert').mouseleave(function(){
        $('#text').css('color','black')
    });
});