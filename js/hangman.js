$(document).ready(function () {

    // All the variables live here : -----------------------------------
    var words = ["Skynet", "Digital", "FitBit", "Realtime", "ManPacks", "Landing", "Conversion", "Social", "Airbnb", "SnapChat", "Bangedup", "Application", "Analytics", "Geolocation", "Nodeability", "KickStarter", "Matching", "Adults", "Pinterest", "Groupon", "Appstore"];

    var letters = _.range(0, 26).map( function (i) { return String.fromCharCode(65 + i); });


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


        // function to show the solution if user give up / lost the game
        window.showSolution = function () { // Global variable, Im sorry
            $('.solution_letter').show();
        };


        // function to show the secret word's letter if the user pick the right letter.
        window.showLetter = function (letter) {  // Global variable, Im sorry
          $('.solution_letter:contains(' + letter + ')').show();
        };

        // Append <div> with letter to <div>id=letters
        _.each(split_word, function (letter, index) {
            $('#letters').append("<div id='solution_letter_container'><h1 class='solution_letter' id='" + index + "'>" + letter + "</h1></div>");
        });


        // Getting all the alphabets from array and print it on screen.
        _.each(letters, function (letter) {
            $('#container').append("<span class='letter outline-inward'>" + letter + "</span>");
        });


        // Print all the guessed letter to the screen
        window.printGuessedLetter = function () {
        	_.each(guessedLetters, function (letter) {
            	$('#guessed_letters').append("<span class='guessed_letter'>" + letter + "</span>");
        	});
        };



        // Function for giveup button
        var $giveup = $('#giveup');

        $giveup.on('click', function () {
            $('.solution_letter').show();
            $('#loser').text('You lost!');
            $('#pictures img').hide();
            $('#pictures').append('<img src="img/hangman10.jpg">');
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


        // function to check if user win the game.
	    window.checkWin = function() { // Global variable, im sorry
	    	_.each(split_word, function (letter) {
	    		var checker = _.contains(guessedLetters, letter);
	    		console.log(checker);
	    	});
	    	
	    };


        // Call the hideSolution function whenever the hangmanSetup start/reload.
        hideSolution();

    }; // end of the hangmanSetup function. -----------------------




    // Push all the picked letter to an array named 'guessedLetter' and show all on the screen later.
    var letterValidation = function (letter) {
        guessedLetters.push(letter);
        console.log('guessletter ' + guessedLetters);
        $('.guessed_letter').remove();
        printGuessedLetter();
    };


    // function to check whether the picked letters are inside the secret word, if yes then push to 'solution' array.
    var processGuess = function (l) {
        if (_(split_word).include(l)) {
            solution.push(l);
            console.log('correct ' + solution);
            showLetter(l);
            // checkWin();

        } else {
            counter += 1
            console.log('counter: ' + counter)
        };

        // to show hangman picture!
        switch (counter)
            {
            case 1:
              $('#pictures img').hide(); 
              $('#pictures').append('<img src="img/hangman01.jpg">');
              break;
            case 2:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman02.jpg">');
              break;
            case 3:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman03.jpg">');
              break;
            case 4:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman04.jpg">');
              break;
            case 5:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman05.jpg">');
              break;
            case 6:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman07.jpg">');
              break;
            case 7:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman08.jpg">');
              break;
            case 8:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman09.jpg">');
              break;
            case 9:
              $('#pictures img').hide();
              $('#pictures').append('<img src="img/hangman10.jpg">');
              $('.solution_letter').show();
              $('#loser').text('You lost!')
              break;
            }

    };



    // Call the hangmanSetup function whenever the page start/reload.
    hangmanSetup();



}); // end of the document.ready function. 
