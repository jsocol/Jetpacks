/**
 * BMO Font Switch
 *
 * Switches the monospace font on Bugzilla from the system
 * default to Consolas.
 *
 * This Jetpack uses pageMods.
 *
 * http://jetpackgallery.mozillalabs.com/jetpacks/287
 */
jetpack.future.import('pageMods');

jetpack.pageMods.add(function(document){
	// Change the styles on <pre> elements.
    $(document).find('pre').each(function(i,pre){
        $(pre).css({"font-family":'Consolas, "Courier New", Courier, monospace',
                    "font-size":'14px'});
    });
},
['https://bugzilla.mozilla.org/*']);
