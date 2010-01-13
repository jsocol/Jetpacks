jetpack.future.import('pageMods');

jetpack.pageMods.add(function(document){
    $(document).find('div#mainContent h1, div#mainContent h2, div#mainContent h3, div#mainContent h4').each(function(i,heading){
        if(heading.previousSibling && heading.previousSibling.tagName == 'A'){
            let link=document.createElement('a');
            link.innerHTML=' #';
            link.href='#'+heading.previousSibling.id;
            link.style.textDecoration = 'none';
            link.style.display = 'none';
            link.className = 'anchor';
            heading.appendChild(link);
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
