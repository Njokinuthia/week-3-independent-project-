
// function to give scores to each question
function grade ()
{ 
  var sum = 0; 
  
  if (document.getElementById("answer1").checked){
      sum++;
  }

  if (document.getElementById("answer2").checked){
    sum++;
  }
  if (document.getElementById("answer3").checked){
    sum++;
  }
  if (document.getElementById("answer4").checked){
    sum++;
  }
  if (document.getElementById("answer5").checked){
    sum++;
  }
  
  var answer = sum * 20;

  document.write('Your score is' + ' ' + answer);
}

// code to get grade levels
if (answer>=80){
  document.write("excellent")
}
else if (answer<80 && answer >=50){
  document.write(" You fairly passed")
}
else if (answer <50){
  document.write("poorly performed")
}