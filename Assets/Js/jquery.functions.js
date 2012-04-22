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

//responsive.mobilefix
(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true)}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true)}}(document));