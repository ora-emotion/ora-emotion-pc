// JavaScript Document

/*页面居中显示*/
$.fn.showCenter=function(){
	return this.each(function(){
		var _this=$(this);
		function center(){
			var screenW=$(window).width();
			var screenH=$(window).height();
			_this.show();
			var l=(screenW-_this.outerWidth() )/2;  
			var t=(screenH-_this.outerHeight() )/2;
			_this.css({'left':l,"top":t})
		};
		center();
		$(window).resize(center);
	});
	

}


/*拖拽*/
$.fn.drag=function(title){// obj:拖拽对象   title：可拖拽标题
	return this.each(function(){
		var _this=$(this);
		title=title || _this;//拖拽判断
		title.mousedown(function(ev){
			//鼠标按下，计算盒子偏移距离
			var disX=ev.pageX-_this.offset().left;
			var disY=ev.pageY-_this.offset().top;
			
			//-------------------------------------------
			$(document).mousemove(function(ev){
				var t=ev.pageY-disY;
				var l=ev.pageX-disX;
									
				var screenW=$(window).width();//屏幕宽度
				var screenH=$(window).height();//屏幕高度
				
				if(l<0){
					l=0;
				};
				if(t<0){
					t=0;
				};
				
				if(l>screenW-_this.outerWidth()){ //屏幕宽度---盒子宽度
					l=screenW-_this.outerWidth()
				};
				
				if(t>screenH-_this.outerHeight()  ){ //屏幕宽度---盒子宽度
					t=screenH-_this.outerHeight()
				};
				
				_this.css({'left':l,'top':t})
			});
			//-----------------------------------------
			$(document).mouseup(function(){
				$(document).unbind('mousemove');
			});
			return false;//阻止默认事件
		});
	
	});
	
};

$.fn.mouseWheel=function(fn){
	return this.each(function(){
		if(window.navigator.userAgent.indexOf('Firefox')!=-1){
			 this.addEventListener('DOMMouseScroll',wheelFn,true);
		}else{
			this.onmousewheel=wheelFn;
		};
		function wheelFn(ev){
			var direct=ev.wheelDelta ? ev.wheelDelta<0 : ev.detail>0;
			fn && fn(direct);//将direct作为参数传递出去
			ev.preventDefault();//DOM2级 阻止默认事件 firefox
		};
	})
};