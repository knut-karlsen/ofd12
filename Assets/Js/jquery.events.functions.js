/*****************************************************************************************

 * Olavsfestdagene - events functions v.0.1.
 *
 * Events specific setup and functions.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 19/04.12
 
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
	
	//close dropdown on li-click
	$('.category li, .arena li').live('click', function() {
		$(this).parent().removeClass('open').slideToggle(150);
		$(this).parents().closest('li').find('h3').html( $(this).text() + '<i></i>' );
	});
	
	//activate timeline
	$('.timeline ol').filterprojects({
		animationSpeed: 0,
		animationPulse: 0,
		show: { width: 'show' },
		hide: { width: 'hide' },
		filterTagSelector: [ '.category li', '.arena li' ]
	});
	
	
	
});



//filtrer
(function($) {

	$.fn.filterprojects = function(settings) {

		settings = $.extend({
		  animationSpeed: 900,
		  animationPulse: 100,
		  animationEase: 'linear',
		  activeClass: 'active',
		  allTag: 'all',
		  show: { width: 'show', opacity: 'show' },
		  hide: { width: 'hide', opacity: 'hide' },
		  filterTagSelector: []
		}, settings);
  
  	
  	
  	
    $(this).each(function(i, o){
      var _elements = $(this).children();

      /* Binding the filter */
      $(this).bind('filter', function(){
  			
        var _groups = [];
        var _filtered_elements = _elements;
        $.each(settings.filterTagSelector, function(k, j){
          _groups[k] = [];
          console.log(_groups);
          $(this + '.' + settings.activeClass).each(function(){ 
            if( this.attr('data-event-slug') != settings.allTag && this.attr('data-event-slug') != undefined ) { 
            	_groups[k].push( this.attr('data-event-slug') ); 
            	console.log(this.attr('data-event-slug'));
            }
            console.log(_elements);
          });
          if(_groups[k].length > 0){
            _filtered_elements = _filtered_elements.filter('.' + _groups[k].join(',.'));
          }
        });



        /* Show */
        _filtered_elements.each(function(i,o){
          $(this).queue(function(){
  					$(this).animate({left: '+0'}, (settings.animationPulse*i)); // dirty trick :)
  					$(this).animate(settings.show, settings.animationSpeed);			
  					$(this).dequeue();
          });
        });
        

        /* Hide */
        _elements.not(_filtered_elements).each(function(i,o){
          $(this).queue(function(){
            $(this).animate({left: '+0'}, (settings.animationPulse*i)); // dirty trick :)
            $(this).animate(settings.hide, settings.animationSpeed);
            $(this).dequeue();
          });
        });
  			

      });
  		

      /* Setup filter selectors */
      $.each(settings.filterTagSelector, function(k, j){
        $(this).live('click', function(e){

  				/* Controlling filter and selectors */
  				$(j).removeClass(settings.activeClass);
  				$(this).addClass(settings.activeClass);
  	  
					/* Triggering the filter */ 
					$(o).trigger('filter');
				});
			});
			
			$(o).trigger('filter');

    });
    return this
  };
  
})(jQuery);