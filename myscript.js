//luodaan datille aika-asetukset
d = new Date();
var k = d.getDate() + "/" + (d.getMonth()+1)  + "/" + d.getFullYear();
$("#date1").html(k);

//  Klikkaa ruksia piilotaakseen tehtävän
$("ul").on("click","span", function(e){
  e.stopPropagation(); 
  $(this).parent().hide();
})


//  Lisää "tehty" symboli klikkauksesta
$("ul").on("click", "li", function(){
  $(this).toggleClass("checked");
})


// Lisää uusi kohta painamalla plussaa
$(".addBtn").click(function () {
  var li = document.createElement("li");
 var inputValue = $("#myInput")[0].value;
  var t = $(document.createTextNode(inputValue));
  $(li).append(t);
  if (inputValue === '') {
    alert("Sinun on lisättävä tehtävä!");
  } else {
    $("#myUL")[0].append(li);
  }
  $("#myInput").value = "";

//lisätään ruksi merkki
var span = $('<span/>').attr('class', 'close');
  var txt = document.createTextNode("\u00D7");
  $(span).append(txt);
  $(li).append(span);

  //poistetaan listalta
  for (i = 0; i < close.length; i++) {
    $(close[i]).click ( function() {
      $(this).closest("li").hide();
    }
  );}
});


//Luodaan 
$(document).ready(function() {
  $("#ajax").empty();
  $.ajax({
    url: "https://www.is.fi/rss/paakirjoitus.xml",
    type: "GET",
    dataType: "xml",
    cache: false,
    success: parseXml
  }
  );
  function parseXml(xml) {
    $(xml).find("item:first").each(function () {
      $("#news").append($(this).find("title").text() + "<p>");
     

    });
    
  }
});
