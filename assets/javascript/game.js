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


    var remaining = keyword.length;
    while (remaining > 0) {
        document.getElementById("keyword").innerHTML = letterArray.join(" ");
        document.addEventListener("keypress", function (event) {
            var guess = String.fromCharCode(event.which);
            console.log(guess);
            for (var j = 0; 0 < keyword.length; j++) {
                if (guess === keyword[j]) {
                    letterArray[j] = guess;
                    remaining--;
                    console.log(remaining);
                
                };
                if (guess != keyword[j]) {
                    document.getElementById("guessed").innerHTML = guess;
                    { break; };
                };
            };
        });
            remaining = 0;
    };
};
