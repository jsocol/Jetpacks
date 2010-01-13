/**
 * Netflix Randomizer
 *
 * Adds a nice blue button to your Netflix Queue (and Instant
 * Queue) page that will randomize the order of your queue.
 *
 * This Jetpack uses pageMods.
 *
 * http://jetpackgallery.mozillalabs.com/jetpacks/213
 */
jetpack.future.import("pageMods");

jetpack.pageMods.add(function(doc){
  // grab the header, create a new link element
  var title = doc.querySelectorAll('h1#page-title')[0],
      link = doc.createElement('a');
  link.innerHTML = 'Randomize';
  link.href = '#';
  link.setAttribute('style','display:inline-block;font-size:12px;margin:12px;padding:0 6px;background-color:#00458B;color:#fff;-moz-border-radius:4px');

  // create the event handler
  // bind the doc object to the handler
  link.addEventListener('click',(function(d){
    return function(e){
	  // the small <input>s have class="o"
      var list = d.querySelectorAll('input.o');
      var count = list.length, used = [], i, next;
	  // calculate enough random numbers, being sure not
	  // to reuse them
      for(i=0;i<count;i++){
        do {
		  // use Math.ceil because we're 1-indexed
          next = Math.ceil(Math.random()*count);
        } while(-1!=used.indexOf(next));
        used.push(next);
        list[i].value=next;
      }
    }
  })(doc),true);
  
  // Add the link to the top of the page
  title.appendChild(link);
},
['http://www.netflix.com/Queue*']);
