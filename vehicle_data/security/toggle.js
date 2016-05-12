
	  function display(query, on) {
		  //query = 'p.j'
		  var pp = document.querySelectorAll(query);

		  [].forEach.call(pp, on ?
			  function show(p) { p.classList.remove('invisible'); } :
			  function hide(p) { p.classList.add('invisible'); }
		  );
	  }

	  function createToggle(n) {
		  var lang = n;
		  return function toggle() {
			  var mode = (lang ++)%3;
			  display('.j', (mode&1) == 0);
			  display('.e', (mode&2) == 0);
		  }
	  }
	  addEventListener('DOMContentLoaded', function(){
		  var toggle;
		  switch ( location.hash ) {
			  case '#j': toggle = createToggle(2); break;
			  case '#e': toggle = createToggle(1); break;
			  default: toggle = createToggle(1); break;
		  };
		  toggle();
		  document.body.addEventListener('keydown', function(e) {
			  if ( e.keyCode == 84 ) { // t
					toggle();
			  }
		  });
	  });
