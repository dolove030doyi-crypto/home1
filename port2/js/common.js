
// pc 스크롤 동작 ============================================  


$(function() {
	
	/* 디바이스 사이즈 체크 */
	$devWidth=$("body").width();


/*현재 기기가 테블릿/폰의 경우에 적용시킬 스크립트를 아래에 기술 */
	if($devWidth > 1030 ) {    
   /* 제이쿼리 함수 기술  */ 

                $(window).scroll(function() {
                    if ($(this).scrollTop() > 30) {
                        $(".menubar").addClass("headerbar");    
                        
                    } else {
                        $(".menubar").removeClass("headerbar");
              
                    }
                });

                

    }

    else {
       /* 그렇지 않으면 즉, 1024 이하 기기(노트북/테블릿/폰)로 열면 동작할 
        제이쿼리 함수 기술  
        */

                $(window).scroll(function() {
                        if ($(this).scrollTop() > 50) {
                            $(".mo_header").addClass("mo_headerbar");
                            
                        } else {
                            $(".mo_header").removeClass("mo_headerbar");
                            
                        }
                    }); 

                              
                        $('footer.footer_bar .flex-box > ul > li:nth-child(1)').click(function(){
                            $(this).children('ul').toggle(); 
                            $(this).children('span').toggleClass('rotate'); 
                            
                             

                            
                        }); 
                        

    }
});






 $(function() {

    // $('.menu > li').mouseenter(function(){
    //             $(this).children('.submenu').stop().slideDown('fast'); });
                
    // $('.menu > li').mouseleave(function(){
    //             $(this).children('.submenu').stop().slideUp('fast'); }); 

    $('#bt').click(function(){
        $('.mo_submenu').hide(); 
        $(this).toggleClass('active'); 
        $('.mo_menu').toggleClass('show'); 
        

    });    


    $('.menu, .sub')
            .mouseenter(function () {
            $('.sub').stop().slideDown('fast');
            })
            .mouseleave(function () {
            $('.sub').stop().slideUp('fast');
            });


    $('.mo_menu ul > li > a').click(function (e) {
        var sub = $(this).next('.mo_submenu');
        $('.mo_submenu').not(sub).slideUp();
        sub.slideToggle();

    });



// $('.show').click(function(){
//         $(this).next().toggle();
//         $(this).parent().siblings().children('p').hide();
//     });




});