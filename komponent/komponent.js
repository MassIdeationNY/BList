// cooper s - All callback functions must be unique or they will interfere with other callbacks

var Komponent = function(){


  this.insertKomponent = function(div, komp_callback ){
    // listen for clicks in div
    console.log("komponent div: ", div);

   // div.html("HELLO WORLD
   // click_callback = callback;
    div.html(mapHTML())
    

   var internalClickHandler = function(e) {
      alert("foo",e);
      console.log("foo",e);
    //  div.html("I WAS CLICKED!");
      komp_callback();
    }

  div.click(internalClickHandler)  

  } //end insertKomponent

  function mapHTML()
  {
    var map_html = '<div>Map Goes Here....</div><img src="images/TheBronxDowntownDefault-Inkscape.svg" width="300" height="280"> ';
    return map_html;
  }

  function komp_callback () {
    alert("Komp Call back function!");
  }
}//end Komponent