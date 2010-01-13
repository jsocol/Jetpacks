/**
 * Mozilla Wiki Anchor Links
 *
 * Adds links to headings throughout Mozilla Wiki pages.
 *
 * This Jetpack uses pageMods.
 *
 * http://jetpackgallery.mozillalabs.com/jetpacks/274
 */
jetpack.future.import('pageMods');

jetpack.pageMods.add(function(document){
	// Find all the h1-h4 elements in the main content area
    $(document).find('div#mainContent h1, div#mainContent h2, div#mainContent h3, div#mainContent h4').each(function(i,heading){
        if(heading.previousSibling && heading.previousSibling.tagName == 'A'){
			// create a new link
            let link=document.createElement('a');
            link.innerHTML=' #';
			// the prevoiusSibling should be an <a> with a name and id
            link.href='#'+heading.previousSibling.id;
            link.style.textDecoration = 'none';
            link.style.display = 'none';
            link.className = 'anchor';
            heading.appendChild(link);

			// only show the link on hover
            $(link).parent().hover(function(){
                $(link).show();
            },
            function(){
                $(link).hide();
            });
        }
    });
},
['http://wiki.mozilla.org/*','https://wiki.mozilla.org/*']);
