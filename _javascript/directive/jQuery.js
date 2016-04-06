$(document).ready(function() {
	$('[data-tooltip!=""]').qtip({
	  position: {
	     my: 'bottom center',  // Position my top left...
	     at: 'top center' // at the bottom right of...
	  },
	  content: {
	        attr: 'data-tooltip' // Tell qTip2 to look inside this attr for its content
	    },
	  style: {
	    classes: 'qtip-tipsy'
	  }
	});
});