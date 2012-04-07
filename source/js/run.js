$(window).bind('hashchange', function () {
	colorizeTabs();
});
$(document).ready(function(){
	setInterval(function(){
		colorizeTabs();
	},100);
});

function colorizeTabs(){
			var iframeContents = $('#canvas_frame').contents();
			if(iframeContents.find('#colorize-style').length == 0){
				iframeContents.find('head').append('<style id="colorize-style">.added{background-color:#ffffff !important;}.zA td{position:relative;}.zA td > div,.zA td > img,.zA td > span{position:relative;z-index:2}.labeled{width:100%; height:100%; position:absolute !important; top:0;right:0; opacity:0.1;z-index:1}</style>');
			}
			iframeContents.find('.zA:not(.added)').each(function(){
			var element = jQuery(this);
			element.find('.at').each(function(){
				var thisAt = jQuery(this);
				console.log(thisAt);
				var thisAtColor = thisAt[0].style.backgroundColor;
				console.log(thisAtColor);
				if(thisAtColor == 'rgb(221, 221, 221)'){
					jQuery(this).addClass('exclude');
				}
			});

			element.find('td').css('position','relative');

			if(jQuery(this).find('.at:not(.exclude):first').length > 0){
				jQuery(this).find('td').prepend('<div class="labeled" style="background-color:'+jQuery(this).find('.at:not(.exclude):first')[0].style.backgroundColor+';"></div>');
				element.addClass('added');
			}
		});
}