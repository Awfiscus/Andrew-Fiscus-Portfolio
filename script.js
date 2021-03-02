const github = $("#github");
const linkedin = $("#linkedin");
const resume = $("#resume");
const project1 = $("#smileBtn");
const project2 = $("#weatherBtn");
const project3 = $("#workdayBtn");
const project4 = $("#burgerBtn");
const contactBtn = $("#contactBtn");

github.on("click", function () {
  window.open("https://github.com/Awfiscus", "_blank");
});

linkedin.on("click", function () {
  window.open("https://www.linkedin.com/in/andrew-fiscus-1bb3a4206/", "_blank");
});

resume.on("click", function () {
  window.open(
    "https://docs.google.com/document/d/1H57__vOj2dL9kXxX8z83TjkEfZOeng3BmfeRkUClHkQ/edit?usp=sharing",
    "_blank"
  );
});

project1.on("click", function () {
  window.open("https://lukeoxner.github.io/project-1/", "_blank");
});

project2.on("click", function () {
  window.open(
    "https://awfiscus.github.io/travelers-best-friend-weather-report/",
    "_blank"
  );
});

project3.on("click", function () {
  window.open(
    "https://awfiscus.github.io/keep-your-workday-organized/",
    "_blank"
  );
});

project4.on("click", function () {
  window.open("https://murmuring-badlands-01547.herokuapp.com/", "_blank");
});

//contactBtn.on("click", sendEmail())

//STILL WORKING ON THIS FUNCTIONALITY
// function sendEmail () {
//     let link = "mailto:awfiscus@comcast.net"
//              + "&subject=" + ($("#nameinput").value)
//              + "&body=" + ($("#emailInput").value) + ($("#textInput").value);

//     window.location.href = link
// }
