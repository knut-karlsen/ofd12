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
    __olavsfestdagene_dir__ + '/Images/slidebutton_1_active.png',
	]);
	
});

$(window).load(function() {

	klapp_slideshow();

});


//klapp.preload
function klapp_preload(images){$(images).each(function(){(new Image()).src=this})}