$(document).ready(function () {

    // All the variables live here : -----------------------------------
    var words = ["Skynet", "Digital", "FitBit", "Realtime", "ManPacks", "Landing", "Conversion", "Social", "Airbnb", "SnapChat", "Bangedup", "Application", "Analytics", "Geolocation", "Nodeability", "KickStarter", "Matching", "Adults", "Pinterest", "Groupon", "Appstore"];

    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    var word = _.sample(words).toUpperCase();
    console.log(word);

    var split_word = word.split('');

    var $guessWords = $('#words');

    // Empty arrays to store letters.
    var guessedLetters = [];
    var solution = [];
    var counter = 0;

    // ----------------- end of the variables -------------------



    // Define hangmanSetup function -----------------------
    var hangmanSetup = function () {

        // function to hide the secret word at the beginning
        var hideSolution = function () {
            $('.solution_letter').hide();
        };


        // indexID = 0

        // function to show the secret word's letter if the user pick the right letter.
        window.showSolution = function () {  // Global variable, Im sorry
            $('.solution_letter').show();
            console.log(indexID)
        };


        _.each(split_word, function (letter, index) {
            $('#letters').append("<div class='solution_letter' id='" + index + "'>" + letter + "</div>");
            indexID = index
        });


        // Getting all the alphabets from array and print it on screen.
        _.each(letters, function (letter) {
            $('#container').append("<span class='letter'>" + letter + "</span>");
        });


        // Function for giveup button
        var $giveup = $('#giveup');

        $giveup.on('click', function () {
            $('.solution_letter').show();
            $('#loser').text('You are lose!')
        });


        // Function for restart button
        var $restart = $('#restart');

        $restart.on('click', function () {
            window.location = window.location;
        });


        // when the user click on particular letter, fadeOut the letter.
        var $letter = $('.letter');
        console.log($letter);

        $letter.on('click', function () {
            $(this).fadeOut();
            var pickedLetter = $(this).html();
            console.log(pickedLetter);
            letterValidation(pickedLetter);
            processGuess(pickedLetter);
        });


        // Call the hideSolution function whenever the hangmanSetup start/reload.
        hideSolution();


    }; // end of the hangmanSetup function. -----------------------



    // Push all the picked letter to an array named 'guessedLetter' and show all on the screen later.
    var letterValidation = function (letter) {
        guessedLetters.push(letter);
        console.log('guessletter ' + guessedLetters);
    };


    // function to check whether the picked letters are inside the secret word, if yes then push to 'solution' array.
    var processGuess = function (l) {
        if (_(split_word).include(l)) {
            solution.push(l);
            console.log('correct ' + solution);
            showSolution();
        } else {
            counter += 1
            console.log('counter: ' + counter)

        }


        switch (counter)
            {
            case 0:
              $('#pictures').append('<img src="img/hangman00.jpg">');
              break;
            case 1:
              $('#pictures').append('<img src="img/hangman01.jpg">');
              break;
            case 2:
              $('#pictures').append('<img src="img/hangman02.jpg">');
              break;
            case 3:
              $('#pictures').append('<img src="img/hangman03.jpg">');
              break;
            case 4:
              $('#pictures').append('<img src="img/hangman04.jpg">');
              break;
            case 5:
              $('#pictures').append('<img src="img/hangman05.jpg">');
              break;
            case 6:
              $('#pictures').append('<img src="img/hangman07.jpg">');
              break;
            case 7:
              $('#pictures').append('<img src="img/hangman08.jpg">');
              break;
            case 8:
              $('#pictures').append('<img src="img/hangman09.jpg">');
              break;
            case 9:
              $('#pictures').append('<img src="img/hangman10.jpg">');
              break;
            }
    };



    // Call the hangmanSetup function whenever the page start/reload.
    hangmanSetup();



}); // end of the document.ready function. 
