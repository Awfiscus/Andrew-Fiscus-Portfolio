
const github = $("#github")
const linkedin = $("#linkedin")
const project1 = $("#smileBtn")
const project2 = $("#weatherBtn")
const project3 = $("#workdayBtn")

github.on("click", function () {
    window.open("https://github.com/Awfiscus", "_blank")
})

linkedin.on("click", function () {
    window.open("https://www.linkedin.com/in/andrew-fiscus-1bb3a4206/", "_blank")
})

project1.on("click", function () {
    window.open("https://lukeoxner.github.io/project-1/", "_blank")
})

project2.on("click", function () {
    window.open("https://awfiscus.github.io/travelers-best-friend-weather-report/", "_blank")
})

project3.on("click", function () {
    window.open("https://awfiscus.github.io/keep-your-workday-organized/", "_blank")
})