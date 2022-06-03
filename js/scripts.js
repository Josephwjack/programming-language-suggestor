$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const surveyDateInput = $("#surveyDate").val();
    const notice = $("input:radio[name=notice]:checked").val();
    const finerThings = $("input:radio[name=finerThings]:checked").val();
    const experience = $("input:radio[name=experience]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const obstacles = $("input:radio[name=obstacles]:checked").val();


    if (name1Input === undefined || surveyDateInput === undefined || notice === undefined || finerThings === undefined || experience === undefined || car ===undefined || obstacles === undefined) { 
      alert('Please fill out form completely');
    } else if (notice === "yes" && finerThings === "jewelery" && experience === "no" && car === "safe" && obstacles === "frustrating") {
      $("#pythonResult").show();
      $("#formLanguage").hide();   
    } else if (notice === "no" && finerThings === "snakeSkin" && experience === "yes" && car === "muscle" && obstacles === "learning") {
      $("#formLanguage").hide(); 
      $("#javaScriptResult").show(); 
    } else if (notice === "yes" && finerThings === "snakeSkin" && experience === "yes" && car === "safe" && obstacles === "frustrating") {
      $("#rubyResult").show();
      $("#formLanguage").hide(); 
    } else {
      $("#rustResult").show();
      $("#formLanguage").hide(); 
    }


    $(".name1").text(name1Input);
    $(".surveyDate").text(surveyDateInput);
    $(".radio1").text(notice);
    $(".radio2").text(finerThings);
    $(".radio3").text(experience);
    $(".radio4").text(car);
    $(".radio5").text(obstacles);
  
  });
});











