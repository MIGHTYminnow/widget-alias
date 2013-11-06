jQuery(document).ajaxSuccess(function(e, xhr, settings) {

	var widget_id_base = 'widget-alias';
	var widget_selector = '#widgets-right .widget[id*="widget-alias"]';

	// Save all widget-alias widgets when others are updated/added/removed/etc
	if( ( -1 != settings.data.search( 'action=save-widget' ) || -1 != settings.data.search( 'action=widgets-order' ) ) && -1 == settings.data.search('id_base=' + widget_id_base) ) {
		var selector = jQuery(widget_selector),
			n = selector.find('input.multi_number').val();
			id = selector.attr('id');

		selector.attr( 'id', id.replace('__i__', n) );
		console.log('yes');
		wpWidgets.save( jQuery(widget_selector), 0, 1, 0 );

	}

});