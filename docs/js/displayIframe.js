$( document ).ready(function() { //https://learn.jquery.com/using-jquery-core/document-ready/
  $("#national-park-html").hide();
  $("#national-park").mouseenter( 
    ()=>{$("#national-park-html").show(500);}
   ).mouseleave( 
    // do nothing
  );
});