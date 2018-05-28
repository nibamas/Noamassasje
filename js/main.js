//const segja að breytan breytas ekki og er fast
//searh á undirsíðu1
 const myFunction=()=> {
    var textabox = document.getElementById("texti");
    console.log("texti í boxi: " + textabox.value)
    filterDisplay(textabox.value)
}


/* this variable names our array, we can add our objects
 and properties eða keys */
var hlutir = [
  {
    numer:1,
    titill:"Sport  Injury",
    mynd: "images/lamp.jpg",
  },
  {
    numer:2,
    titill:"During pregnantcy",
    mynd: "images/lamp.jpg",
  },
  {
    numer:3,
    titill:"Older Adults",
    mynd: "images/lamp.jpg",
  },
  {
    numer:4,
    titill:"Children",
    mynd: "images/lamp.jpg",
  },
  {
    numer:5,
    titill:"People with desabilities",
    mynd: "images/lamp.jpg",
  },
  {
    numer:6,
    titill:"General Massage",
    mynd: "images/lamp.jpg",
  },

];
