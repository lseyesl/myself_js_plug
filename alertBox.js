$.extend({

	alertBox:function(content /*html*/,fn /*callback*/){
		var html='<div class="mask">&nbsp;</div>'+
					'<div class="alertBox">'+
						'<a href="#" class="close">&nbsp;</a>'+
						'<div class="alertBoxC">'+content+
						'</div>'+
					'</div>';
		if($('.mask,.alertBox').length<1){
			$('body').append(html).css({'height':'100%','overflow':'hidden'});
			var H=$(window).height();
			var cH=$('.alertBox').height();
			var top=$(window).scrollTop();
			$('.alertBox').css('top',(H-cH)/2+top+'px');
			$('.mask').css('top',top+'px');					
			$('.alertBox .close').live('click',function(){
				$('.mask,.alertBox').remove();
				$('body').css({'height':'auto','overflow':'auto'})
				if(fn){
					fn();
				}
			})
		}
	}
})
$.alertBox('<div class="refes">ÄúÓÐ<em> 3 </em>¸öÐÂÔö±¨°¸£¬µã»÷´Ë´¦<a href="#">Ë¢ÐÂ</a>²é¿´</div>');