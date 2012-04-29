/*****************************************************************************************

 * Klapp - filter events v.0.1.
 *
 * Got a little short on time, had to do a few shortcuts. But it works perfectly.
 * tl;dr lotsa loops, ifs and butts.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 27/04.12
 
*****************************************************************************************/

function klapp_filter_events( clicked_list_element ) {
	
	var events						= $('.timeline ol');
	var all_events				= $('li', events);
	var filters						= [ 'li.category', 'li.arena' ];
	var count_invisible		= $('li', events).filter(':hidden').size();
	var count_events			= $('li', events).size();
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
	
	$(events).parent().removeClass('hide').find('ol').children().removeClass('odd');
	if( active_filters.length > 0 ) {	
		
		//tagging filtered events and calculating capsule height
		var active_filters = active_filters.join('');
		var i = 0;
		$(events).each(function() {
			var x = 0;
			var capsule_even_height = 0;
			var capsule_odd_height	= 0;
			$('li', this).each(function() {
				if( $(this).is(active_filters) ) {
					if( x % 2) {
						$(this).addClass('odd');
						capsule_odd_height = capsule_odd_height + parseInt( $(this).attr('data-element-height') ) + 5;
					} else {
						capsule_even_height = capsule_even_height + parseInt( $(this).attr('data-element-height') ) + 5;
					}
					active_events[i] = $(this);
					i++; x++;
				}
			});
			if( x == 0 ) {
				$(this).parent().addClass('hide').attr('data-element-height', '35');
			}
			if( ! $(this).parents('.timecapsule').hasClass('hide') ) {
				if( capsule_odd_height > capsule_even_height) {
					$(this).parents('.timecapsule').attr('data-element-height', capsule_odd_height);
				}	 else {
					$(this).parents('.timecapsule').attr('data-element-height', capsule_even_height);
				}
			}
		});
		
	} else {
		
		//tagging all events
		var i = 0;
		$(events).each(function() {
			var x = 0;
			var capsule_even_height = 0;
			var capsule_odd_height	= 0;
			$('li', this).each(function() {
				if( x % 2) {
					$(this).addClass('odd');
					capsule_odd_height = capsule_odd_height + parseInt( $(this).attr('data-element-height') ) + 5;
				} else {
					capsule_even_height = capsule_even_height + parseInt( $(this).attr('data-element-height') ) + 5;
				}
				active_events[i] = $(this);
				i++; x++;	
			});
			if( ! $(this).parents('.timecapsule').hasClass('hide') ) {
				if( capsule_odd_height > capsule_even_height) {
					$(this).parents('.timecapsule').attr('data-element-height', capsule_odd_height);
				}	 else {
					$(this).parents('.timecapsule').attr('data-element-height', capsule_even_height);
				}
			}
		});

	}

	
	
	
	
	all_events.not(active_filters).each(function(i, item){
		//console.log( $(this) );
	});
	
	//show and hide
	if( (active_events.length != count_events) || (active_events.length == count_events && count_invisible > 0) ) {
		
		$('.maintain').css({'margin-top': '0'});
		$('li', events).hide();
		$.each(active_events, function(i) {
			$(this).animate({
				'height': 'toggle', 
				'opacity': 'toggle'
			},
			{
				step: function(now, fx) {
					klapp_expand_events();
				}
			}, 1500);
		});
		klapp_expand_events();
		
		//loops until all animation is complete, then expands the relevant events and begins timeline at the right time
		var klapp_expand_delay = setInterval(function() {
			if( ! $('li', events).is(':animated') ) {
				clearInterval(klapp_expand_delay);
				//klapp_expand_events();
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

				var capsule_offset 		= 0;
				var event_height 			= $(this).attr('data-element-height');
				var event_stretch 		= $(this).find('.stretch');
				var previous_capsules = $(this).parents('.timecapsule').prevAll();
				//get capsule offset
				if( previous_capsules != undefined && previous_capsules != false ) {
					$.each(previous_capsules, function(i, item) {
						capsule_offset = capsule_offset + parseInt( $(item).attr('data-element-height') );
					});
				}
				
				//get event offset
				var previous_events = $(this).prevAll();
				var event_type_odd	= false;
				var event_offset		= 0;
				if( previous_events != undefined && previous_events != false ) {
					if( $(this).hasClass('odd') ) {
						event_type_odd = true;
					}
					$.each(previous_events, function(i, item) {
						if(	event_type_odd && $(item).is('.odd') ) {
							event_offset = event_offset + parseInt( $(item).attr('data-element-height') );
						} else if ( ! event_type_odd && $(item).is('.odd:not') ) {
							event_offset = event_offset + parseInt( $(item).attr('data-element-height') );
						}
					});
				}
				if(event_offset > 0) {
					event_offset = event_offset + 5;
				}
				
				//calculate and set stretch height
				$('.timecapsule').each(function() {
					var event_time = $(this).attr('data-event-time');
					if( event_time == event_finish ) {
						var timecapsule_margin = 17; 
						if( ! $(this).hasClass('empty') && ! $(this).hasClass('hide') ) {
							timecapsule_margin = 27;
						}
						var previous_capsules 	= $(this).prevAll();
						var event_total_height 	= 0;
						if( previous_capsules != undefined && previous_capsules != false ) {
							$.each(previous_capsules, function(i, item) {
								event_total_height = event_total_height + parseInt( $(item).attr('data-element-height') );
							});
						}
						var stretch_height = event_total_height - (capsule_offset + event_offset + 1 - timecapsule_margin);
						$(event_stretch).css({'height': '5px', 'display': 'block', 'top': '0px'}).animate({'height': stretch_height + 'px'}, 1500);
						return false;
					}
				});
			}
		});
	});

}