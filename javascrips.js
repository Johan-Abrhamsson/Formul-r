var HumanPoints = 0;
var YahooAwnsersPoints = 0;
var ArtIntPoints = 0;

function See() {
  var awnser = document.from[0];
  var point = "";
  for (var i = 1; i < awnser.length; i++) {
    if (awnser[i].checked) {
     point = awnser[i].value;
     if (point=="Human"){
         HumanPoints+=1
     }
     else if (point=="Yahoo"){
         YahooAwnsersPoints+=1
     }
     else if (point=="Artint"){
         ArtIntPoints+=1
     }
    }
  }
  console.log(HumanPoints);
  console.log(YahooAwnserPoints);
  console.log(ArtIntPoints);
}
