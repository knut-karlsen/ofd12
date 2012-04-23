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

		$('ul:first li', this).each(function(i) {
			if( i == 0 ) {
				$(this).addClass('active');
				$(this).parents('.slideshow').find('.controls ul').append('<li class="active" data-pagination="' + (i+1) + '">' + (i+1) + '</li>');
				$(this).css({'top': '0px', 'left': '0px', 'position': 'relative'});
			} else {
				$(this).parents('.slideshow').find('.controls ul').append('<li data-pagination="' + (i+1) + '">' + (i+1) + '</li>');
				$(this).css({'top': '0px', 'left': '0px', 'position': 'absolute'});
			}
		});
		
		var item_height 	= $('ul:first', this).height();
  	var item_top			= (item_height / 2) - 25;
		if( $('.slideshow ul:first li').length >= 2 ) {
			$('.controls').css({'display': 'block'}).find('.previous, .next', this).css({'top': item_top, 'display': 'block'});
		}
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

  		} else {
  			
  			//pagination
  			var clicked_nr 	= $(this).attr('data-pagination');
				var next_item		= $('li:nth-child(' + clicked_nr + ')', container);
				var next_height	= $(next_item).outerHeight();
				
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
			
				var slide_delay = 0;			
				if( next_height != current_height ) {
					slide_delay = 200;
				  $(current_item).animate(
				  	{	'height': next_height + 'px' },
				  	{	'duration': slide_delay, 
				  		step: function() {
				  			klapp_slideshow_adjust_buttons();
				  		},
				  		complete: function() {
				  			$(next_item).show().addClass('active').css({'z-index': '5', 'height': next_height + 'px'});
				  			$(current_item).css({'z-index': '10', 'height': next_height + 'px'}); 
				  		}
	     	  });
				} else {
					$(next_item).show().addClass('active').css({'z-index': '5', 'height': next_height + 'px'});
				  $(current_item).css({'z-index': '10', 'height': next_height + 'px'}); 
				}

				$(current_item).delay(slide_delay).fadeOut(1000, function() {
	
				  $(next_item).css({'position': 'relative', 'z-index': '', 'height': ''});
				  $(current_item).hide().removeClass('active').css({'position': 'absolute', 'height': '', 'z-index': ''});
				  in_progress = false;
				  
				  clearTimeout(slideshow_timer);
  				slideshow_timer = setTimeout(klapp_slideshow_autoplay, 8000);
				  
				});

			}

		}
	});

}

//autoplay
var slideshow_timer = setTimeout(klapp_slideshow_autoplay, 8000);
function klapp_slideshow_autoplay() {
	$('.slideshow .controls .next').trigger('click');
}

//adjust prev/next buttons on window resize
function klapp_slideshow_adjust_buttons() {

	$('.slideshow').each(function() {
		
  		var item_height 	= $('ul:first', this).height();
  		var item_top			= (item_height / 2) - 25;
			$('.controls .previous, .controls .next', this).css({'top': item_top});

  });

}

//activates on resize
var slideshow_resize_timer;
$(window).resize(function() {

	clearTimeout(slideshow_resize_timer);
	var slideshow_resize_timer = setTimeout(klapp_slideshow_adjust_buttons, 100);

});