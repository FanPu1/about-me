$( document ).ready(function() { //https://learn.jquery.com/using-jquery-core/document-ready/
  const url = "https://usage-checker.herokuapp.com/stats";
  const requestBody = { 
    serviceName: "about_me_page", 
    methodName: "03" 
   };
   $.post(url, requestBody).done(data => {console.log(data);});

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
