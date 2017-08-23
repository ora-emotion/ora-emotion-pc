// JavaScript Document

$.extend({

	modal:function (){
		var oM=$('<div class="modal"></div>');
		$(document.body).append(oM);
		return function(){
			oM.remove();//删除模态层	
		};
	},
	
	
	//确定弹框
	confirmBox:function (msg,fn){
		var delModal=$.modal();//调用模态层 并接收返回值  函数 
		var oBox=$('<div class="confirmBox"><h3 style="height:40px; background:blue;">asdfasdf</h3><p>'+msg+'</p><button type="button">确定</button>　　<button type="button">取消</button></div>');
		$(document.body).append(oBox);
		
		/*拖拽*/
		oBox.showCenter().drag(oBox.children('h3'));
		oBox.on('click','button:first',function(){
			oBox.remove();//删除alertBox
			delModal();
			fn && fn();
		});
		oBox.on('click','button:last',function(){
			oBox.remove();//删除alertBox
			delModal();
		})
	},
	
	
	promptBox:function(txt,fn){
		var delModal=$.modal();//调用模态层 并接收返回值  函数
		var oBox=$('<div class="promptBox"><h4>'+txt+'</h4><textarea></textarea><p><button type="button">确定</button> <button type="button">取消</button></p></div>'); 
		$(document.body).append(oBox);
		oBox.showCenter().drag();
		oBox.find('textarea,button').mousedown(function(ev){
			ev.stopPropagation();//阻止默认事件冒泡 
			//return false;
		});
		var textArea=oBox.find('textarea');
		
		var btn=oBox.find('button');
		btn.first().click(function(){
			fn && fn( textArea.val() )//将输入内容作为回调函数的参数传出
		});
		
		btn.click(function(){
			delModal();
			oBox.remove();
		});
	
	}
	
	
	
	
	

});

