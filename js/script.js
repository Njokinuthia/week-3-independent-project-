
// function to give scores to each question
function grade() {
  var sum = 0;

  if (document.getElementById("answer1").checked) {
    sum++;
  }

  if (document.getElementById("answer2").checked) {
    sum++;
  }
  if (document.getElementById("answer3").checked) {
    sum++;
  }
  if (document.getElementById("answer4").checked) {
    sum++;
  }
  if (document.getElementById("answer5").checked) {
    sum++;
  }

  var answer = sum * 20;

  document.write('Your score is');
  document.write(answer + '%');
 
  result(answer);
}

// code to get grade levels
function result(answer) {

  if (answer >= 80) {
    document.write("excellently passed")
  }
  else if (answer < 80 && answer >= 50) {
    document.write(" Fairly passed")
  }
  else if (answer < 50) {
    document.write("poorly performed - please repeat text")
  }

}
