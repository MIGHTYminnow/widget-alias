jQuery(document).ajaxSuccess(function(e, xhr, settings) {

	var widget_id_base = 'widget-alias';
	var widget_selector = '#widgets-right .widget[id*="widget-alias"]';

	// Save all widget-alias widgets when others are updated/added/removed/etc
	if( ( -1 != settings.data.search( 'action=save-widget' ) || -1 != settings.data.search( 'action=widgets-order' ) ) && -1 == settings.data.search('id_base=' + widget_id_base) ) {
		
		jQuery(widget_selector).each(function() {
			var selector = jQuery(this);
			var n = selector.find('input.multi_number').val();
			var id = selector.attr('id');

			selector.attr( 'id', id.replace('__i__', n) );
			console.log('yes');
			wpWidgets.save( jQuery(widget_selector), 0, 1, 0 );
		});

	}

	// Add ID's to newly added widgets
	if( -1 != settings.data.search( 'add_new' ) ) {
		addIDs();
	}

});

// Add ID's to existing widgets
jQuery(document).ready(function() {
	addIDs();
});

// Add ID's below widget-title in admin
function addIDs() {
	jQuery('#widgets-right .widget').each(function() {

		var widget = jQuery(this);
		var id = widget.find('input[name="widget-id"]').val();
		if ( 1 > widget.find('.wa-id').length ) {
			widget.find('.widget-top').after('<div class="wa-id">' + id + '</div>');
		}

	});
}