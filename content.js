window.onload = function(){
    setTimeout(function(){
        var startBtn = document.createElement("button");
        startBtn.innerHTML = "START SURVEY";
        startBtn.style = "background-color:#28616d; position: absolute; left: 10px; bottom: 50%; height: 50px; width: 100px; color: white; font-weight: bold";
        var fixedInput = false;
        var getOption = document.createElement("button");
        getOption.innerHTML = "SHOW OPTIONS";
        getOption.style = "background-color:#28616d; position: absolute; left: 10px; bottom: 60%; height: 50px; width: 100px; color: white; font-weight: bold";

        function unselectOtherInputs(idx) {
            let inputs = document.getElementsByClassName('shown-inputs');
            for (let i = 0; i < inputs.length; i++) {
                if (i !== idx) {
                    inputs[i].style.backgroundColor = '#28616d';
                    inputs[i].style.color = 'white';
                }
            }
        }

        function showOptions(){
            const setInputContainer = document.createElement('div');
            setInputContainer.style = "display: flex; justify-content: space-between; align-items: center; background-color:#28616d; position: absolute; left: 10px; bottom: 30%; height: 50px; width: 300px; color: white; font-weight: bold; padding: 10px 15px; -webkit-transition: opacity 2s ease-in;transition: opacity 1s ease-in;"
            const inputs = document.getElementsByTagName("input");
            for (let i = 0; i < inputs.length; i++) {
                let inputOption = document.createElement('span');
                inputOption.setAttribute('class', 'shown-inputs');
                inputOption.style = "border: 1px solid white; height: 30px; width: 30px; border-radius: 50%; display: flex;justify-content:center;align-items:center; cursor: pointer";
                inputOption.innerHTML = `${i + 1}`;
                inputOption.addEventListener('click', () => {
                    inputOption.style.backgroundColor = 'white';
                    inputOption.style.color = '#28616d';
                    fixedInput = i;
                    unselectOtherInputs(i);
                })
                setInputContainer.appendChild(inputOption);
            }
            document.querySelector('body').appendChild(setInputContainer);
        }

        getOption.addEventListener('click', showOptions);

        function getRandomInput(inputSize){
            return Math.floor(Math.random() * Math.floor(inputSize));
        }
  
        startBtn.addEventListener('click', () => {
            var startSurvey = setInterval(function(){
                let inputs = document.getElementsByTagName("input");

                if (!inputs.length){
                    stopSurvey();
                    return;
                };
                var nextBtn = document.querySelector(".fl-survey-new-button");
                inputs[typeof fixedInput === "number" ? fixedInput : getRandomInput(inputs.length)].click();
                nextBtn.click();
            }, 10)

            function stopSurvey() {
                clearInterval(startSurvey);
            }
        })
        document.querySelector('body').appendChild(startBtn);
        document.querySelector('body').appendChild(getOption);
    }, 1000)
}