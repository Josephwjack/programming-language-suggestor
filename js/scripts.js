$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const surveyDateInput = $("#surveyDate").val();
    const notice = $("input:radio[name=notice]:checked").val();
    const finerThings = $("input:radio[name=finerThings]:checked").val();
    const experience = $("input:radio[name=experience]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const obstacles = $("input:radio[name=obstacles]:checked").val();



    $(".name1").text(name1Input);
    $(".surveyDate").text(surveyDateInput);
    $(".radio1").text(notice);
    $(".radio2").text(finerThings);
    $(".radio3").text(experience);
    $(".radio4").text(car);
    $(".radio5").text(obstacles);
    

    $(".receipt").show();
    $("form#info").hide();
  });
});











