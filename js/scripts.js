$(document).ready(function() {

  $("form").submit(function(event) {
    var userInput1 = $("input#original").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (var i = 0; i < vowels.length; i += 1) {
      var removeVowels = vowels[i];
      console.log(userInput1, vowels);

      for (var j = 0; j < userInput1.length; j += 1) {
        userInput1 = userInput1.replace(removeVowels, "-");
      }
    };

    $("#userInput1").hide();
    $("#userInput2").show();
    $("#output").text(userInput1);
    event.preventDefault();

  });

  $("#meow").click(function(event) {
    var userInput1 = $("input#original").val();
    var userInput2 = $("input#guess").val();

    if (userInput2===userInput1) {
        $("#confirmation").text("Correct!");
    } else if (userInput2!==userInput1) {
        $("#confirmation").text("Wrong!");
    }
  });

});
