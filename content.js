window.onload = function(){
    setTimeout(function(){
        var startBtn = document.createElement("button");
        startBtn.innerHTML = "START SURVEY";
        startBtn.style = "background-color:#28616d; position: absolute; left: 10px; bottom: 50%; height: 50px; width: 100px; color: white; font-weight: bold";

        function getRandomInput(inputSize){
            return Math.floor(Math.random() * Math.floor(inputSize));
        }
  
        startBtn.addEventListener('click', () => {
            var startSurvey = setInterval(function(){
                var inputs = document.getElementsByTagName("input");

                if (!inputs.length){
                    stopSurvey();
                    return;
                };
                var nextBtn = document.querySelector(".fl-survey-new-button");
                inputs[getRandomInput(inputs.length)].click();
                nextBtn.click();
            }, 10)

            function stopSurvey() {
                clearInterval(startSurvey);
            }
        })
        document.querySelector('body').appendChild(startBtn);
    }, 2000)
}