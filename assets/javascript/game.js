onload = function () {
    var dictionary = [
        "mario",
        "bowser",
        "toadstool",
        "luigi",
        "mushroom",
        "peach",
        "blocks",
        "star",
        "coins"
    ];
    var keyword = dictionary[Math.floor(Math.random() * dictionary.length)];
    var letterArray = []
    for (i = 0; i < keyword.length; i++) {
        letterArray[i] = "_";
    };
    console.log(keyword);
    console.log(letterArray);
    var guessArray = [];
    document.getElementById("keyword").innerHTML = letterArray.join(" ");
    document.addEventListener("keypress", function (event) {
        var guess = String.fromCharCode(event.which);
        var remaining = 15 - guessArray.length;
        document.getElementById("remaining").innerHTML = remaining + " guesses remaining!";
        for (var j = 0; j < keyword.length; j++) {
            if (guess == keyword[j]) {
                letterArray[j] = guess;
                console.log(guess == keyword[j]);
            };
        };
        if (guess != keyword[j]) {
            guessArray.push(guess);
            console.log(guess != keyword[j]);
            document.getElementById("guessed").innerHTML = guessArray.join("  ");
        };

        document.getElementById("keyword").innerHTML = letterArray.join(" ");
        if (remaining == 0) {
            alert("You lose!")
        }
        if (letterArray.join("") == keyword) {
            alert("You guessed " + keyword + "! You win!");
        }
    });

};
