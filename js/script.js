
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



