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

        console.log(guess);
        if (guess != keyword[j]) {
            guessArray.push(guess);
            console.log(guessArray);
            document.getElementById("guessed").innerHTML = guessArray.toString("  ");
        };
        for (var j = 0; j < keyword.length; j++) {
            if (guess == keyword[j]) {
                letterArray[j] = guess;
            };
        };
        for (var remaining = keyword.length; remaining > 0; remaining--) {
            document.getElementById("keyword").innerHTML = letterArray.join(" ");
            console.log(remaining);
        };
    });

};
