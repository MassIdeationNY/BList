// cooper s - All callback functions must be unique or they will interfere with other callbacks

var Komponent = function(){
  this.insertComponent = function(div, komp_callback ){
    // listen for clicks in div
    console.log("div",div)

    div.html("HELLO WORLD!")

    var internalClickHandler =function(e){
      console.log("foo",e)
      div.html("I WAS CLICKED!")
      komp_callback()
    }

    div.click(internalClickHandler)
  }
}