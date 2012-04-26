/*****************************************************************************************

 * Klapp - filter events v.0.1.
 *
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 26/04.12
 
*****************************************************************************************/

function klapp_filter_events( clicked_list_element ) {
	
	var events						= $('.timeline ol');
	var filters						= [ 'li.category', 'li.arena' ];
	var invisible_events	= $('li', events).filter(':hidden').size();
	var all_events				= $('li', events).size();
	var clicked_filter		= $(clicked_list_element).attr('data-event-slug');
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


	//show and hide
	if( (active_events.length != all_events) || (active_events.length == all_events && invisible_events > 0) ) {
		$('li', events).hide(0);
		$.each(active_events, function(i) {
			$(this).animate({
				'height': 'toggle', 
				'opacity': 'toggle'
			}, 500);
		});
	}

	
}