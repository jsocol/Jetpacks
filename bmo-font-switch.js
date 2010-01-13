jetpack.future.import('pageMods');

jetpack.pageMods.add(function(document){
    $(document).find('pre').each(function(i,pre){
        $(pre).css({"font-family":'Consolas, "Courier New", Courier, monospace',
                    "font-size":'14px'});
    });
},
['https://bugzilla.mozilla.org/*']);
