// Create a new button element
var button = document.createElement("button");
button.innerHTML = "Get answers";

// Add an event listener to the button to trigger the function
button.addEventListener("click", function () {
  myFunction();
});

// Add the button to the top of the body element
document.body.insertBefore(button, document.body.firstChild);

function myFunction() {
  // Get the first div element with the class "question"
  var div = document.querySelector(".question:not(.hidden)");

  // Get the inner span element with class "questionText"
  var span = div.querySelector(".questionText");

  // Get the text content of the span element
  var textContent = span.textContent.trim();
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      const data = req.response;
      console.log(data);
      var myArray = data;
      if (data === "error") {
        alert("No answers availables");
        return 0;
      }
      var answers = div.getElementsByClassName("mattext");
      for (let index = 0; index < answers.length; index++) {
        if (myArray.includes(answers[index].innerHTML.trim())) {
          answers[index].style.color = "red";
        }
      }
    }
  };
  req.open(
    "GET",
    "http://127.0.0.1:5000/foo?q=" + encodeURIComponent(textContent)
  );
  req.send();
  //console.log(encodeURIComponent(textContent.trim()));
  //fetch(
  // "https://p.fed.mxyw.es/https://itexamanswers.net/questions-bank?qs=" +
  //   encodeURIComponent(textContent)
}
