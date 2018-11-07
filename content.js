window.onload = function(){
    setTimeout(function(){
        var startBtn = document.createElement("button");
        startBtn.innerHTML = "START BUTTON";
        startBtn.style = "background-color:red; position: absolute; height: 50px; width: 100px; color: white";

        startBtn.addEventListener('click', () => {
            setInterval(function(){
                var firstInput = document.querySelector("input");
                var nextBtn = document.querySelector(".fl-survey-new-button");
                firstInput.click();
                nextBtn.click();
            }, 10)
        })
        document.querySelector('body').appendChild(startBtn);
    }, 2000)
}