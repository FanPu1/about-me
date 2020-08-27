$( document ).ready(function() { //https://learn.jquery.com/using-jquery-core/document-ready/
  //$("#national-park-html").show();
  $("#national-park-html").hide();
  $("#loading-html").on("load",()=>{
    console.log("loading");
    $("#national-park").mouseenter( 
      ()=>{
        $("#national-park-html").show(500);
        console.log("mourse in");
      }
     ).mouseleave( 
      // do nothing
    );
  });
});