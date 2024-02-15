
$(document).ready(function(){
    
     /*컨텐츠 박스*/
      $(".article_txt li").hover(function(){
            
            var num=$(this).index();
            
            $(".article_img li img").fadeOut("fast");
            $(".article_img li img").eq(num).stop(true,true).fadeIn("slow");
            
      },function(){
            
      });
     

      /*sns*/
      	$(".foot2_sns ul li").hover(function(){
		
		var snum=$(this).index()+1;
              
		$(this).find(">img").attr({"src":"image/sns0"+snum+".png"});
		
	},function(){
		
		var snum=$(this).index()+1;
		$(this).find(">img").attr({"src":"image/sns1"+snum+".png"});
		
	});
     
     
       /*메뉴토글*/

     $(".menu_toggle_btn").click(function(){
          $(this).toggleClass("menu-open");
          $(".main_nav").stop(true,true).slideToggle();
     })
	
     
     
     
     
     
});




