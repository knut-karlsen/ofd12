/*****************************************************************************************

 * Olavsfestdagene - functions v.0.1.
 *
 * Various cool functions and general setup of the websites' fancy parts.
 * Minified for your viewing pleasure.
 ** Author: Knut Karlsen (knutarino@gmail.com)
 ** Last updated: 19/04.12
 
*****************************************************************************************/
$(document).ready(function() {

	klapp_preload([
    //__olavsfestdagene_dir__ + '/Images/slidebutton_1_active.png',
	]);
	
	$('.category h3, .arena h3').live('click', function() {
		if( ! $(this).parent().find('div ul').hasClass('open') ) {
			$('.category ul, .arena ul').removeClass('open').slideUp(150);
		}
		$(this).parent().find('div ul').addClass('open').slideToggle(150);
	});
	
	$(document).click(function(e) {
		// Target that was clicked is not inside the container, so hide everything
		if ($(e.target).closest('.category, .arena', this).length == 0) {
    	$('.category ul, .arena ul').removeClass('open').slideUp(150);
    }
	});
	
});

$(window).load(function() {

	klapp_slideshow();

});


//klapp.preload
function klapp_preload(images){$(images).each(function(){(new Image()).src=this})}

//responsive.mobilefix
(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true)}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true)}}(document));