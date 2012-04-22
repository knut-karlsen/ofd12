/*****************************************************************************************

 * Klapp - slideshow v.0.1.
 *
 * Simple slideshow with next/prev controls and pagination.
 * Automatically adjusts to changes in width/height (great for responsive websites).
 * Adds class 'active' to the current slide.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 04/04.12
 
*****************************************************************************************/

//setup and activate slideshow
function klapp_slideshow() {

	//pagination
	$('.slideshow').each(function() {

		var count = 1;
		$('ul:first li', this).each(function(i) {
			if( i == 0 ) {
				$(this).addClass('active');
				$(this).parents('.slideshow').find('.controls ul').append('<li class="button-' + (count) + ' active" data-pagination="' + (i+1) + '">' + (i+1) + '</li>');
				$(this).css({'top': '0px', 'left': '0px'});
			} else {
				$(this).parents('.slideshow').find('.controls ul').append('<li class="button-' + (count) + '" data-pagination="' + (i+1) + '">' + (i+1) + '</li>');
				$(this).css({'top': '0px', 'left': '0px', 'position': 'absolute'});
			}
			count++;
			if( count == 6 ) count = 1;
		});
		
		var item_height 	= $('.contain ul:first', this).height();
  	var item_top			= (item_height / 2) - 11;
		$('.controls .previous, .controls .next', this).css({'top': item_top, 'display': 'block'});

	});

	//transitions
	var in_progress = false;
	$('.slideshow .controls span, .slideshow .controls li').click(function() {
		if( ! in_progress ) {

			//setup
			in_progress 				= true;
  		var container 			= $(this).parents('.slideshow').find('ul:first');
  		var pagination			= $(this).parents('.slideshow').find('.controls ul');
  		var current_item 		= $('li.active', container);
			var current_height	= $(current_item).outerHeight();
			var continue_show		= true;
  		var colors					= new Array();
  		colors['beige'] 		= '#dfd459';
  		colors['orange'] 		= '#ffad00';
  		colors['blue']			= '#00c4b7';
  		colors['green']			= '#47d07a';
  		colors['navy']			= '#a2ba24';
  		colors['grey'] 			= '#6d6858';
			
			if( $('li', container).length == 1 ) {
				continue_show = false;
			}
			
  		if( $(this).hasClass('next') ) {

				//next
				var has_next = $('li.active', container).next().length;
				if( has_next != 0 ) {
					var next_item = $('li.active', container).next();
					$('li.active', pagination).removeClass('active').next().addClass('active');
				} else {
					var next_item	= $('li:first', container);
					$('li.active', pagination).removeClass('active');
					$('li:first', pagination).addClass('active');
				}
				var next_height			= $(next_item).outerHeight();
				var next_bg					= $(next_item).attr('data-color');

  		} else if( $(this).hasClass('previous') ) {
  			
  			//previous
				var has_next = $('li.active', container).prev().length;
				if( has_next != 0 ) {
					var next_item = $('li.active', container).prev();
					$('li.active', pagination).removeClass('active').prev().addClass('active');
				} else {
					var next_item	= $('li:last', container);
					$('li.active', pagination).removeClass('active');
					$('li:last', pagination).addClass('active');
				}
				var next_height			= $(next_item).outerHeight();
				var next_bg					= $(next_item).attr('data-color');

  		} else {
  			
  			//pagination
  			var clicked_nr 	= $(this).attr('data-pagination');
				var next_item		= $('li:nth-child(' + clicked_nr + ')', container);
				var next_height	= $(next_item).outerHeight();
				var next_bg			= $(next_item).attr('data-color');
				
				//checks if the same item being displayed is clicked
				if( ! $(next_item).hasClass('active') ) {
					$('li.active', pagination).removeClass('active');
					$(this).addClass('active');
				} else { 
					continue_show = false;
					in_progress 	= false;
				}
				
			}
			
			//run animations
			if( continue_show ) {
			
				if( next_height != current_height ) {
				  $(current_item).animate(
				  	{	'height': next_height + 'px' },
				  	{	'duration': 500, 
				  		step: function() { 
				  			$(this).css({'overflow': 'visible'});
				  			klapp_slideshow_adjust();
				  		},
				  		complete: function() {
				  			$(next_item).removeClass('noshade').addClass('shade').css({'z-index': '3', 'height': next_height + 'px'});
				  			$(current_item).removeClass('shade').addClass('noshade').css({'z-index': '2'});
				  		}
	     	  });
				} else {
					$(next_item).removeClass('noshade').addClass('shade').css({'z-index': '3', 'height': next_height + 'px'});
				  $(current_item).removeClass('shade').addClass('noshade').css({'z-index': '2', 'height': next_height + 'px'}); 
				}
				
				$(next_item).addClass('active').show().children().children().hide();
				$(container).css({'background-color': colors[next_bg]});
	
				$('a figure img', current_item).clone().appendTo($('a figure', next_item)).addClass('old');
				$('a figure', current_item).hide();
				$('a figure', next_item).show().find('.old').fadeOut(2000, function() {
				  $(this).remove();
				});
				$('a > div img', current_item).fadeOut(300);
				$('a > div', current_item).fadeOut(800);
				$('a > div', next_item).delay(800).fadeIn(800);
				$('a > div img', next_item).hide().delay(800).fadeIn(1200);
	
				$(current_item).delay(500).fadeOut(1000, function() {
	
				  $(container).css({'background-color': ''});
				  $(next_item).css({'position': 'relative', 'background-color': colors[next_bg], 'z-index': '', 'height': ''});
				  $(current_item).hide().removeClass('active').css({'position': 'absolute', 'background-color': 'transparent', 'height': '', 'z-index': ''}).children().children().show();
				  in_progress = false;
				  
				  clearTimeout(slideshow_timer);
  				slideshow_timer = setTimeout(klapp_slideshow_autoplay, 8000);
				  
				});

			}

		}
	});

}

//autoplay
function klapp_slideshow_autoplay() {
	$('.slideshow .controls .next').trigger('click');
}

var slideshow_timer = setTimeout(klapp_slideshow_autoplay, 8000);

//adjust prev/next buttons on window resize
function klapp_slideshow_adjust() {

	$('.slideshow').each(function() {
		
  		var item_height 	= $('.contain ul:first', this).height();
  		var item_top			= (item_height / 2) - 11;
			$('.controls .previous, .controls .next', this).css({'top': item_top});

  });

}

//activate on resize
var slideshow_resize_timer;
$(window).resize(function() {

	clearTimeout(slideshow_resize_timer);
	var slideshow_resize_timer = setTimeout(klapp_slideshow_adjust, 100);

});