
(function() {
    var Question = function(question, choice, answer) {
        this.question = question;
        this.choice = choice;
        this.answer = answer;
    }

    Question.prototype.selectQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.choice.length; i++) {
            console.log(i + ': ' + this.choice[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(inputAnswer) {
        var score;
        if(inputAnswer === this.answer) {
            console.log('-- Correct Answer! --');
            score = keepScore(true);
        } else {
            console.log('-- Wrong Answer! --');
            keepScore(false);
            score = keepScore(false);
        }
        
        this.displayScore(score);
    }
    
    function score() {
        var sc = 0;
        
        return function(isCorrect) {
            if(isCorrect) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();
    
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score: ' + score);
        console.log('---------------------------------------\n\n\n\n');
    }
    


    var q1 = new Question('Is JavaScript the coolest laguage on the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is Node.js?', ['JS framework', 'JS runtime', 'JS library'], 1);
    var q3 = new Question('What is React.js?', ['JS framework', 'JS runtime', 'JS library'], 2);
    var q4 = new Question('What is Angular.js?', ['JS framework', 'JS runtime', 'JS library'], 0);
    var q5 = new Question('What does best describes coding?', ['Boaring', 'Tedious', 'Fun'], 2);
    var q6 = new Question('Which one describes JavaScript most?', ['Dynamicaly typed language', 'Functional programming language', 'Object oriented programming language'], 0);
    var q7 = new Question('What makes enheritance possible in JavaScipt?', ['Constructor', 'Prototype', 'Closure'], 1);


    var questionList = [q1, q2, q3, q4, q5, q6, q7];
    
    function nextQuestion() {
        var rand = Math.floor(Math.random() * questionList.length);
        questionList[rand].selectQuestion();

        var input = prompt('Select the number that contains the correct choice\n    <<<<<<  Type  " exit "  to Stop  >>>>>>');
        var inputAnswer = parseInt(input);      
        
        
        if(input !== 'exit') {
            questionList[rand].checkAnswer(inputAnswer)
            nextQuestion();
        }
        
        
    }
    
    nextQuestion();
    
    
})();



 


