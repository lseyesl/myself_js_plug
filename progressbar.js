$.fn.extend({
		ProgressBar:function(opt,callback){

			//初始参数
			var defaults = $.extend({
				width:400,//整体宽
				num:1,//分成多少份
				color:['#38b1ec'],//每份的颜色
				percent:[100],//每份的宽度 百分比
				data:['']//悬停显示的文字
			},opt);


			var _this = this;

			var html='';
			for(var i = 0;i < defaults.num; i++){
				var num = i;
				var width=defaults.width*(defaults.percent[num]/100);
				wd=width>16?(defaults.percent[num])+'%':'16px';
				html += '<td style="cursor:pointer;background-color:'+defaults.color[num]+';width:'+wd+';" data="'+defaults.data[num]+'">&nbsp;</td>'; 
			}

			var wrap = '<div class="progress" style="width:0px"><table style="width:100%;"><tr>'+html+'</tr></table></div>';
			_this.html(wrap);
			_this.find('.progress').animate({'width':defaults.width+'px'},600,callback);


			$('.progress td').live('mouseover',function(){
				var data = $(this).attr('data').replace(/\//,'<br/>');
				if(!data||data==''){
					return false;
				}
				var alertBox = '<div class="alertBox">'+data+'</div>';
				$(this).append(alertBox);
			}).live('mouseout',function(){
				$(this).html('&nbsp;');
			})

		}
	});
	$('.jt_income .js_ProgressBar').ProgressBar({width:344,data:['23.12万元/年度收入']},
												function(){
													$('.jt_income_ed').show();
												});
	$('.jt_outlay .js_ProgressBar').ProgressBar({width:333,
												num:4,
												color:['#f4d064','#f59742','#f2682b','#f2392b'],
												percent:[90,5,3,2],
												data:['23.12万元/年度必要存储',
													  '4545.23万元/年度保费支出',
													  '23.12万元/年度还贷',
													  '4545.23万元/年度支出',
												]},function(){
													$('.jt_outlay_ed').show();
												});
