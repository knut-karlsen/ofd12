/*****************************************************************************************

 * Olavsfestdagene - events functions v.0.1.
 *
 * Events specific setup and functions.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 02/05.12
 
*****************************************************************************************/
$(document).ready(function() {

	//open and close category/arena dropdowns
	$('.category h3, .arena h3').live('click', function() {
		if( ! $(this).parent().find('div ul').hasClass('open') ) {
			$('.category ul, .arena ul').removeClass('open').slideUp(150);
		}
		$(this).parent().find('div ul').addClass('open').slideToggle(150);
	});
	
	//close dropdown on outside click
	$(document).live('click', function(e) {
		if( $(e.target).closest('li', this).parent().length == 0 ) {
    	$('.category ul, .arena ul').removeClass('open').slideUp(150);
    }
	});
	
	//close dropdown on li-click and activate filtering
	$('.category li, .arena li').live('click', function() {
		$(this).parent().removeClass('open').slideToggle(150);
		$(this).parents().closest('li').find('h3').html( $(this).text() + '<i></i>' );
		if( ! $(this).hasClass('active') ) {
			$('.timeline li a').css({'margin': ''}); //reset hover-effects
			klapp_filter_events( $(this) );
		}
	});
	
	//animate event on hover
	$('.timeline li a').hover(function() {
		if( $(this).parent().hasClass('odd') ) {
			$(this).animate({'margin-right': '-10px'}, { queue: false, duration: 200 });
		} else {
			$(this).animate({'margin-left': '-10px'}, { queue: false, duration: 200 });
		}
	}, function() {
		if( $(this).parent().hasClass('odd') ) {
			$(this).animate({'margin-right': '0px', 'margin-left': '11px'}, { queue: false, duration: 200 });
		} else {
			$(this).animate({'margin-left': '0px'}, { queue: false, duration: 200 });
		}
	});

	//animate singular dates under event-article
	$('.module.event ol li').live('click', function() {
		var event_time = $(this).attr('data-event-time');
		if( ! $(this).hasClass('active') && ! $('.module.event > div').is(':animated') ) {
			$('.module.event ol').children().removeClass('active');
			$(this).addClass('active');

			$('.module.event > div').each(function() {
				if( event_time == $(this).attr('data-event-time') ) {
					$('.module.event > div.active').removeClass('active').hide();
					$(this).fadeIn(400, function() {
						$(this).addClass('active');
					});
					return false;
				}
			});
		}
	});
	
	//loop through headline-events and set position of subtext
	$('.second-row li, .third-row li').each(function() {
		var height = $('p', this).height() + 10;
		$('p', this).css({ 'bottom': '-' + height + 'px' });
	});
	
	//animate headlines-event on hover
	$('.second-row li, .third-row li').hover(function() {
		var height = $('p', this).height() + 10;
		$('h3, p', this).stop(true,true).animate({'bottom': '+=' + height + 'px'}, { duration: 160 });
	}, function() {
		var height = $('p', this).height() + 10;
		$('h3, p', this).stop(true,true).animate({'bottom': '-=' + height + 'px'}, { duration: 360 });
	});
	
	//ie7 fix
	if( $('body').hasClass('ie7') ) {
		function ie_fix(){return true;}
		window.onerror = ie_fix;
	}

});

$(window).load(function() {

	//calculate and set height of timeline-elements
	$('.timecapsule').each(function() {
		$(this).attr('data-element-height', $(this).height());
		$('li', this).each(function() {
			$(this).attr('data-element-height', $(this).height());
		});
	});
	
	//expand events
	klapp_expand_events_onload();

});

//klapp.filter
function klapp_filter_events(clicked_list_element){var events=$('.timeline ol');var all_events=$('li',events);var filters=['li.category','li.arena'];var count_invisible=$('li',events).filter(':hidden').size();var count_events=$('li',events).size();var clicked_filter=$(clicked_list_element).attr('data-event-slug');var keep_hiding=true;var active_filters=[];var active_events=[];$(clicked_list_element).parent().children('li').removeClass('active');if(clicked_filter!='all'&&clicked_filter!=undefined){$(clicked_list_element).addClass('active')}$.each(filters,function(i,item){$('ul li',item).each(function(){if($(this).hasClass('active')){active_filters[i]='.'+$(this).attr('data-event-slug')}})});$(events).parent().removeClass('hide').find('ol').children().removeClass('odd');if(active_filters.length>0){var active_filters=active_filters.join('');var i=0;$(events).each(function(){var x=0;var capsule_even_height=0;var capsule_odd_height=0;$('li',this).each(function(){if($(this).is(active_filters)){if(x%2){$(this).addClass('odd');capsule_odd_height=capsule_odd_height+parseInt($(this).attr('data-element-height'))+5}else{capsule_even_height=capsule_even_height+parseInt($(this).attr('data-element-height'))+5}active_events[i]=$(this);i++;x++}});if(x==0){$(this).parent().addClass('hide').attr('data-element-height','35')}if(!$(this).parents('.timecapsule').hasClass('hide')){if(capsule_odd_height>capsule_even_height){$(this).parents('.timecapsule').attr('data-element-height',capsule_odd_height)}else{$(this).parents('.timecapsule').attr('data-element-height',capsule_even_height)}}})}else{var i=0;$(events).each(function(){var x=0;var capsule_even_height=0;var capsule_odd_height=0;$('li',this).each(function(){if(x%2){$(this).addClass('odd');capsule_odd_height=capsule_odd_height+parseInt($(this).attr('data-element-height'))+5}else{capsule_even_height=capsule_even_height+parseInt($(this).attr('data-element-height'))+5}active_events[i]=$(this);i++;x++});if(!$(this).parents('.timecapsule').hasClass('hide')){if(capsule_odd_height>capsule_even_height){$(this).parents('.timecapsule').attr('data-element-height',capsule_odd_height)}else{$(this).parents('.timecapsule').attr('data-element-height',capsule_even_height)}}})}if((active_events.length!=count_events)||(active_events.length==count_events&&count_invisible>0)){$('.maintain').css({'margin-top':'0'});$('li',events).hide();$.each(active_events,function(i){var event_finish=$(this).attr('data-event-finish');if(event_finish!=undefined&&event_finish!=false){$(this).klapp_expand_event()}else{$(this).animate({'height':'toggle','opacity':'toggle'},500)}});klapp_timeline_startpoint()}}function klapp_timeline_startpoint(){$('.timecapsule').each(function(){if($('ol',this).children().length!=0&&$('ol',this).children().is(':visible')){var container_margin=$(this).position();$('.maintain').animate({'margin-top':'-'+container_margin.top+'px'},500);return false}})}(function($){$.fn.klapp_expand_event=function(){$(this).find('.stretch').remove();$('a',this).append('<div class="stretch"></div>');var current_event=$(this);var capsule_offset=0;var event_finish=$(this).attr('data-event-finish');var event_height=$(this).attr('data-element-height');var event_stretch=$(this).find('.stretch');var previous_capsules=$(this).parents('.timecapsule').prevAll();if(previous_capsules!=undefined&&previous_capsules!=false){$.each(previous_capsules,function(i,item){capsule_offset=capsule_offset+parseInt($(item).attr('data-element-height'))})}var previous_events=$(this).prevAll();var event_type_odd=false;var event_offset=0;if(previous_events!=undefined&&previous_events!=false){if($(this).hasClass('odd')){event_type_odd=true}$.each(previous_events,function(i,item){if(event_type_odd&&$(item).is('.odd')){event_offset=event_offset+parseInt($(item).attr('data-element-height'))}else if(!event_type_odd&&$(item).is('.odd:not')){event_offset=event_offset+parseInt($(item).attr('data-element-height'))}})}if(event_offset>0){event_offset=event_offset+5}$('.timecapsule').each(function(){var event_time=$(this).attr('data-event-time');if(event_time==event_finish){var timecapsule_margin=17;if(!$(this).hasClass('empty')&&!$(this).hasClass('hide')){timecapsule_margin=27}var previous_capsules=$(this).prevAll();var event_total_height=0;if(previous_capsules!=undefined&&previous_capsules!=false){$.each(previous_capsules,function(i,item){event_total_height=event_total_height+parseInt($(item).attr('data-element-height'))})}var stretch_height=event_total_height-(capsule_offset+event_offset+1-timecapsule_margin);$(event_stretch).css({'height':'5px','top':'-1px','display':'block'});$(current_event).find('a').css({'background':'none','border':'1px solid transparent'});$(current_event).show().find('article, .pointer').hide();$(current_event).find('article').animate({height:'toggle',opacity:'toggle'},{duration:500,queue:false});$(current_event).find('.pointer').animate({height:'toggle',opacity:'toggle'},{duration:200,queue:false});$(event_stretch).animate({height:stretch_height,opacity:'1'},{duration:500,queue:false});return false}})}})(jQuery);function klapp_expand_events_onload(){$('.timeline ol').each(function(){$('li',this).each(function(){var event_finish=$(this).attr('data-event-finish');if(event_finish!=undefined&&event_finish!=false){$('a',this).append('<div class="stretch onload"></div>');var capsule_offset=0;var event_height=$(this).attr('data-element-height');var event_stretch=$(this).find('.stretch');var previous_capsules=$(this).parents('.timecapsule').prevAll();if(previous_capsules!=undefined&&previous_capsules!=false){$.each(previous_capsules,function(i,item){capsule_offset=capsule_offset+parseInt($(item).attr('data-element-height'))})}var previous_events=$(this).prevAll();var event_type_odd=false;var event_offset=0;if(previous_events!=undefined&&previous_events!=false){if($(this).hasClass('odd')){event_type_odd=true}$.each(previous_events,function(i,item){if(event_type_odd&&$(item).is('.odd')){event_offset=event_offset+parseInt($(item).attr('data-element-height'))}else if(!event_type_odd&&$(item).is('.odd:not')){event_offset=event_offset+parseInt($(item).attr('data-element-height'))}})}if(event_offset>0){event_offset=event_offset+5}$('.timecapsule').each(function(){var event_time=$(this).attr('data-event-time');if(event_time==event_finish){var timecapsule_margin=17;if(!$(this).hasClass('empty')&&!$(this).hasClass('hide')){timecapsule_margin=27}var previous_capsules=$(this).prevAll();var event_total_height=0;if(previous_capsules!=undefined&&previous_capsules!=false){$.each(previous_capsules,function(i,item){event_total_height=event_total_height+parseInt($(item).attr('data-element-height'))})}var stretch_height=event_total_height-(capsule_offset+event_offset+1-timecapsule_margin);$(event_stretch).css({'height':event_height,'display':'block','top':'0px'}).animate({'height':stretch_height+'px'},1000);return false}})}})})}
