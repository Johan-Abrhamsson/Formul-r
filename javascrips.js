var HumanPoints = 0;
var YahooAwnsersPoints = 0;
var ArtIntPoints = 0;
var whatYouAre = "Unknown";
var done=0;
function See() {
  var form = document.querySelector("form");
  var nameValue = "A1";
  var numberOfQuestions = document.querySelectorAll("#quiz-questions .question")
    .length;
  for (var i = 0; i<5; i++){
  switch (form.elements[nameValue].value){
  case "Human":{
    HumanPoints += 1;
    break;
  }
  case "Yahoo":{
    YahooAwnsersPoints += 1;
    break;
  }
  case "ArtInt":{
    ArtIntPoints += 1;
    break;
  }
  default:{
    break;
  }
  }
  switch (i){
  case 0:
  nameValue = "A2";
  break;
  case 1:
  nameValue = "A3";
  break;
  case 2:
  nameValue = "A4";
  break;
  case 3:
  nameValue = "A5";
  break;
  case 4:
  break;
  }
}

//document.getElementById("namefirst").value=name;

if (HumanPoints>YahooAwnsersPoints && HumanPoints>ArtIntPoints){
  whatYouAre = "Human!";
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else if (YahooAwnsersPoints>HumanPoints && YahooAwnsersPoints>ArtIntPoints){
  whatYouAre = "Yahoo Awnsers!";
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else if (ArtIntPoints>HumanPoints && ArtIntPoints>YahooAwnsersPoints){
  whatYouAre = "Artificial Intelligence!";
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else if (HumanPoints==ArtIntPoints){
  whatYouAre = "Artificial Human!"
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else if (HumanPoints==YahooAwnsersPoints){
whatYouAre = "Yahoo Human!"
document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else if (ArtIntPoints==YahooAwnsersPoints){
  whatYouAre = "Yahoo Intelligece!"
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
else {
  whatYouAre = "I dont know";
  document.getElementById("whatYouAreHtml").value = whatYouAre;
}
if (!done==1){
document.getElementById("fHuman").value = HumanPoints * 20 + "%";
document.getElementById("fYahoo").value = YahooAwnsersPoints * 20 + "%";
document.getElementById("fArtInt").value = ArtIntPoints * 20 + "%";
  console.log(form.elements["A1"].value);
  console.log(form.elements["A2"].value);
  console.log(form.elements["A3"].value);
  console.log(form.elements["A4"].value);
  console.log(form.elements["A5"].value);
  console.log(HumanPoints);
  console.log(YahooAwnsersPoints);
  console.log(ArtIntPoints);
  done++;
}
}