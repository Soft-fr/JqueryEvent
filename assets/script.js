let nbrClick = 0;

$(document).ready(function() {
    $('.click').click(function(){
        nbrClick++;
        $('#exo1--container').html(nbrClick);
    });
    $('#get').click(function(){
        if($("#name").val().length === 0){
            $('#name').css('background-color', 'tomato');
        } else {
            $('#exo2--container').html(
                $('#name').val() + '<br/>' +
                $('#firstname').val() + '<br/>' +
                $('#date').val() + 'ans'
            );
        }
        if($("#firstname").val().length === 0){
            $('#firstname').css('background-color', 'tomato');
        } else {
            $('#exo2--container').html(
                $('#name').val() + '<br/>' +
                $('#firstname').val() + '<br/>' +
                $('#date').val() + 'ans'
            );
        }
        if($("#date").val().length === 0){
            $('#date').css('background-color', 'tomato');
        } else {
            $('#exo2--container').html(
                $('#name').val() + '<br/>' +
                $('#firstname').val() + '<br/>' +
                $('#date').val() + 'ans'
            );
        }
    });

    $('#afficher').click(function(){
        $('#exo3--container--tiny').show();
    });

    $('#enlever').click(function(){
        $('#exo3--container--tiny').hide();
    });

    $('#val').click(function(){
        var vertical = $('#verticale').val();
        var horizontal = $('#horizontal').val();
        $('#exo3--container--tiny').css('margin-left',horizontal + 'px');
        $('#exo3--container--tiny').css('margin-top',vertical + 'px');
        if(vertical == 0 || horizontal == 0) {
            $('#exo3--container--tiny').css('background-color','red');
        } else {
            $('#exo3--container--tiny').css('background-color','green');
        }
    });

    $("#changer").click(function() {
        $('#exo4--container').css("background-color", '#'+(Math.random()*0xFFFFFF<<0).toString(16));
      }) 
    
    $('#rgbcolor').click(function() {
        if($('#nbr1').val() <= 255 && $('#nbr1').val() >= 0 && $('#nbr2').val() <= 255 && $('#nbr2').val() >= 0 && $('#nbr3').val() <= 255 && $('#nbr3').val() >= 0) {
            var rgb1 = $('#nbr1').val();
            var rgb2 = $('#nbr2').val();
            var rgb3 = $('#nbr3').val();
            $('#exo4--container').css("background-color", 'rgb(' + rgb1 + ','+ rgb2 + ',' + rgb3 + ')');
            $('#nbr1').css('background','white');
            $('#nbr2').css('background','white');
            $('#nbr3').css('background','white');
        } else {
            $('#nbr1').css('background-color','tomato');
            $('#nbr2').css('background-color','tomato');
            $('#nbr3').css('background-color','tomato');
        }
    });

    $(".exo5--container--card--titre").click(function(){
        $(this).parent(".exo5--container--card").find(".exo5--container--card--content").slideToggle();
        $(this).parent(".exo5--container--card").prevAll(".exo5--container--card").find(".exo5--container--card--content").slideUp();
        $(this).parent(".exo5--container--card").nextAll(".exo5--container--card").find(".exo5--container--card--content").slideUp();
        });
    
});