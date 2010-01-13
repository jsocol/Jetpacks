jetpack.future.import("pageMods");

jetpack.pageMods.add(function(doc){
  // grab the header, create a link
  var title = doc.querySelectorAll('h1#page-title')[0],
      link = doc.createElement('a');
  link.innerHTML = 'Randomize';
  link.href = '#';
  link.setAttribute('style','display:inline-block;font-size:12px;margin:12px;padding:0 
6px;background-color:#00458B;color:#fff;-moz-border-radius:4px');

  // create the event listener
  link.addEventListener('click',(function(d){
    return function(e){
      var list = d.querySelectorAll('input.o');
      var count = list.length, used = [], i, next;
      for(i=0;i<count;i++){
        do {
          next = Math.ceil(Math.random()*count);
        } while(-1!=used.indexOf(next));
        used.push(next);
        list[i].value=next;
      }
    }
  })(doc),true);
  
  title.appendChild(link);
},
['http://www.netflix.com/Queue*']);
