 $(function() {

  

    $('.title').eq(0).css('color','#2D303A')

            $('#change_bel').click(function(){      
            $(this).attr('src','img/sub1_icon1.png');
            $(this).next('div').children('img').attr('src','img/sub1_roadmap1.png');
            $('#change_su').attr('src','img/sub1_icon2.png');
            $('#change_su').next('div').children('img').attr('src','img/sub1_roadmap2.png');
             $('#signature_1').fadeIn(300);
             $('#signature_2').fadeOut(300);
             $('.title').eq(0).css('color','#2D303A')
             $('.title').eq(1).css('color','#A39F9F')
     });

    $('#change_su').click(function(){   
        $(this).attr('src','img/sub1_icon2_on.png');
        $(this).next('div').children('img').attr('src','img/sub1_roadmap1.png');

         $('#change_bel').attr('src','img/sub1_icon1_off.png');
        $('#change_bel').next('div').children('img').attr('src','img/sub1_roadmap2.png');
        
        
        $('#signature_2').fadeIn(300);
        $('#signature_1').fadeOut(300);
        $('.title').eq(1).css('color','#2D303A')
        $('.title').eq(0).css('color','#A39F9F')

    });






});