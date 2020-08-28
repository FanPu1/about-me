$( document ).ready(function() { //https://learn.jquery.com/using-jquery-core/document-ready/
  //$("#national-park-html").show();
  $("#national-park-html").hide();
  $("#iframe-national-park").on("load",()=>{
    $("#national-park-html").show(2000);
    // $("#national-park").mouseenter( 
    //   ()=>{
    //     $("#national-park-html").show(500);
    //   }
    //  ).mouseleave( 
    //   // do nothing
    // );

    // $("#iframe-national-park").mouseenter(
    //   ()=>{$("#iframe-national-park").attr("height", "500");}
    // ).mouseleave(
    //   ()=>{$("#iframe-national-park").attr("height", "300");}
    // );
  });
});