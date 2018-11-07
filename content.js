window.onload = function(){
    setTimeout(function(){
        var startBtn = document.createElement("button");
        startBtn.innerHTML = "START SURVEY";
        startBtn.style = "background-color:#28616d; position: absolute; left: 10px; bottom: 50%; height: 50px; width: 100px; color: white; font-weight: bold";

  
        startBtn.addEventListener('click', () => {
            var startSurvey = setInterval(function(){
                var firstInput = document.querySelector("input");
                if (!firstInput){
                    stopSurvey();
                    return;
                };
                var nextBtn = document.querySelector(".fl-survey-new-button");
                firstInput.click();
                nextBtn.click();
            }, 10)

            function stopSurvey() {
                clearInterval(startSurvey);
            }
        })
        document.querySelector('body').appendChild(startBtn);
    }, 2000)
}