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
	
	//close dropdown on li-click and activate filtering
	$('.category li, .arena li').live('click', function() {
		$(this).parent().removeClass('open').slideToggle(150);
		$(this).parents().closest('li').find('h3').html( $(this).text() + '<i></i>' );
		if( ! $(this).hasClass('active') ) {
			klapp_filter_events( $(this) );
		}
	});
	
	//expand long events
	klapp_expand_events();

});