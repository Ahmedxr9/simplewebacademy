// function to check the answer
function check() {
  // getting the value of the answer
  var mark1 = document.querySelector('input[name="q1"]:checked').value; 
  var mark2 = document.querySelector('input[name="q2"]:checked').value;
  var mark3 = document.querySelector('input[name="q3"]:checked').value;
  var mark4 = document.querySelector('input[name="q4"]:checked').value;
  var mark5 = document.querySelector('input[name="q5"]:checked').value;
  var mark6 = document.querySelector('input[name="q6"]:checked').value; 
  var mark7 = document.querySelector('input[name="q7"]:checked').value;
  var mark8 = document.querySelector('input[name="q8"]:checked').value;
  var mark9 = document.querySelector('input[name="q9"]:checked').value;
  var mark10 = document.querySelector('input[name="q10"]:checked').value;
  var mark11 = document.querySelector('input[name="q11"]:checked').value; 
  var mark12 = document.querySelector('input[name="q12"]:checked').value;
  var mark13 = document.querySelector('input[name="q13"]:checked').value;
  var mark14 = document.querySelector('input[name="q14"]:checked').value;
  var mark15 = document.querySelector('input[name="q15"]:checked').value;
  var mark16 = document.querySelector('input[name="q16"]:checked').value; 
  var mark17 = document.querySelector('input[name="q17"]:checked').value;
  var mark18 = document.querySelector('input[name="q18"]:checked').value;
  var mark19 = document.querySelector('input[name="q19"]:checked').value;
  var mark20 = document.querySelector('input[name="q20"]:checked').value;
  var mark21 = document.querySelector('input[name="q21"]:checked').value; 
  var mark22 = document.querySelector('input[name="q22"]:checked').value;
  var mark23 = document.querySelector('input[name="q23"]:checked').value;
  var mark24 = document.querySelector('input[name="q24"]:checked').value;
  var mark25 = document.querySelector('input[name="q25"]:checked').value;

  var answer1 = "if (i!= 5)"; 
  var answer2 = "function myFunction()";
  var answer3 = "onclick";
  var answer4 = 'alert("Hello World");';
  var answer5 = "Math.max(x, y)";
  var answer6 = "<script>";
  var answer7 = "document.getElementById('demo').innerHTML = 'Hello World!';";
  var answer8 = "Both the <head> section and the <body> section are correct";
  var answer9 = '<script src="xxx.js">';
  var answer10 = "False";
  var answer11 = "myFunction()";
  var answer12 = "if (i == 5)";
  var answer13 = 'while (i <= 10)';
  var answer14 = "for (i = 0; i <= 5; i++)";
  var answer15 = "//This is a comment"; 
  var answer16 = "/*This comment has more than one line*/";
  var answer17 = "var colors = ['red', 'green', 'blue']";
  var answer18 = 'Math.round(7.25)';
  var answer19 = "w2 = window.open('http://www.w3schools.com');";
  var answer20 = "False";
  var answer21 = "navigator.appName";
  var answer22 = 'var carName;';
  var answer23 = "=";
  var answer24 = "true";
  var answer25 = "Yes";
  var count = 0;
  // Validating answer for question 1
  if (mark1.localeCompare(answer1) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q1")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q1")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "if (i!= 5)" </div > '
      );
  }
  // Validating answer for question 2
  if (mark2.localeCompare(answer2) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q2")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q2")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "function myFunction()" </div > '
      );
  }
  // Validating answer for question 3
  if (mark3.localeCompare(answer3) == 0) {
    document
      .getElementById("q3")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q3")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "onclick" </div > '
      );
  }
  // Validating answer for question 4
  if (mark4.localeCompare(answer4) == 0) {
    document
      .getElementById("q4")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q4")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "alert("Hello World");" </div > '
      );
  }
  // Validating answer for question 5
  if (mark5.localeCompare(answer5) == 0) {
    document
      .getElementById("q5")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q5")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Math.max(x, y)" </div > '
      );
  }

  // Validating answer for question 6
  if (mark6.localeCompare(answer6) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q6")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q6")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "<script>" </div > '
      );
  }

  // Validating answer for question 7
  if (mark7.localeCompare(answer7) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q7")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q7")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "document.getElementById("demo").innerHTML = "Hello World!";" </div > '
      );
  }

  // Validating answer for question 8
  if (mark8.localeCompare(answer8) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q8")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q8")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Both the <head> section and the <body> section are correct" </div > '
      );
  }

  // Validating answer for question 9
  if (mark9.localeCompare(answer9) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q9")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q9")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "<script src="xxx.js">" </div > '
      );
  }

  // Validating answer for question 10
  if (mark10.localeCompare(answer10) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q10")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q10")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "False" </div > '
      );
  }

  // Validating answer for question 11
  if (mark11.localeCompare(answer11) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q11")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q11")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "myFunction()" </div > '
      );
  }

  // Validating answer for question 12
  if (mark12.localeCompare(answer12) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q12")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q12")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "if (i == 5)" </div > '
      );
  }

  // Validating answer for question 13
  if (mark13.localeCompare(answer13) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q13")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q13")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "while (i <= 10)" </div > '
      );
  }

  // Validating answer for question 14
  if (mark14.localeCompare(answer14) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q14")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q14")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "for (i = 0; i <= 5; i++)" </div > '
      );
  }

  // Validating answer for question 15
  if (mark15.localeCompare(answer15) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q15")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q15")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "//This is a comment" </div > '
      );
  }

  // Validating answer for question 16
  if (mark16.localeCompare(answer16) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q16")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q16")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "/*This comment has more than one line*/  " </div > '
      );
  }

  // Validating answer for question 17
  if (mark17.localeCompare(answer17) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q17")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q17")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "var colors = ["red", "green", "blue"]" </div > '
      );
  }

  // Validating answer for question 18
  if (mark18.localeCompare(answer18) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q18")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q18")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Math.round(7.25)" </div > '
      );
  }

  // Validating answer for question 19
  if (mark19.localeCompare(answer19) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q19")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q19")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "w2 = window.open("http://www.PeakyBlinders.com");" </div > '
      );
  }

  // Validating answer for question 20
  if (mark20.localeCompare(answer20) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q20")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q20")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "False" </div > '
      );
  }

  // Validating answer for question 21
  if (mark21.localeCompare(answer21) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q21")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q21")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "navigator.appName" </div > '
      );
  }

  // Validating answer for question 22
  if (mark22.localeCompare(answer22) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q22")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q22")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "var carName;" </div > '
      );
  }

  // Validating answer for question 23
  if (mark23.localeCompare(answer23) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q23")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q23")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "=" </div > '
      );
  }

  // Validating answer for question 24
  if (mark24.localeCompare(answer24) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q24")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q24")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "true" </div > '
      );
  }

  // Validating answer for question 25
  if (mark25.localeCompare(answer25) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q25")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q25")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Yes" </div > '
      );
  }




  // disabling the button after it is clicked once
  var btn = document.getElementById("Button");
  btn.hidden = "true";
  const template = document.createElement("div");

  // creating the result page
  if (count == 25) {
    template.innerHTML = "Congratulations!<br>Your Obtained Score is " + count;
  } else if (count == 0) {
    template.innerHTML =
      "You Need A Lot of Improvement! <br>Your Obtained Score is " + count;
  } else if (count > 0 && count <= 13) {
    template.innerHTML =
      "Better Luck Next Time! <br>Your Obtained Score is " + count;
  } else if (count > 20) {
    template.innerHTML = "Good Job! <br>Your Obtained Score is " + count;
  }
  // appending the result page to the quiz
  template.setAttribute("id", "scores");
  document.body.appendChild(template);
  // creating the button to go back to the quiz
  var button = document.createElement("BUTTON");
  // creating the text for the button
  button.innerHTML =
    '<a href="./Quiz.html" style="text-decoration:none; color:black;">Retake</a>';
  button.setAttribute("id", "retake");
  // appending the button to the quiz
  document.body.appendChild(button);
  // creating the button to go back to the quiz
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
}
