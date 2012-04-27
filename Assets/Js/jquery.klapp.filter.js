/*****************************************************************************************

 * Klapp - filter events v.0.1.
 *
 * tl;dr lotsa loops, ifs and butts.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 27/04.12
 
*****************************************************************************************/

function klapp_filter_events( clicked_list_element ) {
	
	var events						= $('.timeline ol');
	var events_li					= $('li', events);
	var filters						= [ 'li.category', 'li.arena' ];
	var invisible_events	= $('li', events).filter(':hidden').size();
	var all_events				= $('li', events).size();
	var clicked_filter		= $(clicked_list_element).attr('data-event-slug');
	var keep_hiding				= true;
	var active_filters		=	[];
	var active_events			= [];
	
	//activate and reset clicked elements
	$(clicked_list_element).parent().children('li').removeClass('active');
	if( clicked_filter != 'all' && clicked_filter != undefined ) {
		$(clicked_list_element).addClass('active');
	}

	//get current filters
	$.each(filters, function(i, item) {
		$('ul li', item).each(function() {
			if( $(this).hasClass('active') ) {
				active_filters[i] = '.' + $(this).attr('data-event-slug');
			}
		});
	});

	//find active events
	if( active_filters.length > 0 ) {	
	
		var active_filters 	= active_filters.join('');
		var i = 0;
		var o = 0;
		$(events).each(function() {
			var x = 0;
			$('li', this).each(function() {
				if( $(this).is(active_filters) ) {
					$(this).removeClass('odd');
					if( x % 2) {
						$(this).addClass('odd');
					}
					active_events[i] = $(this);
					i++; x++;	
				}
			});
		});
		
	} else {
		
		var i = 0;
		$(events).each(function() {
			var x = 0;
			$('li', this).each(function() {
				$(this).removeClass('odd');
				if( x % 2) {
					$(this).addClass('odd');
				}
				active_events[i] = $(this);
				i++; x++;	
			});
		});

	}
	
	events_li.not(active_filters).each(function(i, item){
		console.log( $(this) );
	});

	//show and hide
	if( (active_events.length != all_events) || (active_events.length == all_events && invisible_events > 0) ) {
		
		$('.maintain').css({'margin-top': '0'});
		$('.stretch').css({'height': '5px'});
		$('li', events).hide();
		$.each(active_events, function(i) {
			$(this).animate({
				'height': 'toggle', 
				'opacity': 'toggle'
			}, 500);
		});
		
		//loops until all animation is complete, then expands the relevant events and begins timeline at the right time
		var klapp_expand_delay = setInterval(function() {
			if( ! $('li', events).is(':animated') ) {
				clearInterval(klapp_expand_delay);
				klapp_expand_events();
				klapp_timeline_startpoint();
			}
		}, 5);

	}
	
	
	
}


//begin timeline at the right time
function klapp_timeline_startpoint() {

	$('.timecapsule').each(function() {
	  if( $('ol', this).children().length != 0 &&  $('ol', this).children().is(':visible') ) {
			var container_margin = $(this).position();
			$('.maintain').animate({
				'margin-top': '-' + container_margin.top + 'px'
			}, 500);	
			return false;
	  }
	});

}


//expand events that have a definite ending
function klapp_expand_events() {

	$('.timeline ol').each(function() {
		$('li', this).each(function() {
			var event_finish = $(this).attr('data-event-finish');
			if( event_finish != undefined && event_finish != false ) {	
				var event_height 	= $(this).height();
				var event_stretch = $(this).find('.stretch');
				var event_offset 	= $(this).parents('.timecapsule').position();
				$('.timecapsule').each(function() {
					var event_time = $(this).attr('data-event-time');
					if( event_time == event_finish ) {
						var timecapsule_margin = 20; 
						if( ! $(this).hasClass('empty') ) {
							timecapsule_margin = 30;
						}
						var stretch_offset = $(this).position();
						var stretch_height = (stretch_offset.top - event_height + timecapsule_margin + 4) - event_offset.top;
						var stretch_top = event_height - 5;
						$(event_stretch).css({'display': 'block', 'top': stretch_top + 'px'}).animate({'height': stretch_height + 'px'}, 500);
					}
				});
			}
		});
	});

}