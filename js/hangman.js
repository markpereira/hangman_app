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

	// ----------------- end of the variables -------------------



    // Define hangmanSetup function -----------------------
    var hangmanSetup = function () {

    	indexID = 0

		_.each(split_word, function (letter, index) {
	        $('#letters').append("<div class='solution_letter' id='" + index + "'>" + letter + "</div>");
	        indexID = index
	    });


		// function to hide the secret word at the beginning
	    var hideSolution = function () {
			$('.solution_letter').hide();
		};


		// function to show the secret word's letter if the user pick the right letter.
		window.showSolution = function () {  // Global variable, Im sorry
			$('#' + indexID).show();
			console.log(indexID)
		};



		// Getting all the alphabets from array and print it on screen.
        _.each(letters, function (letter) {
            $('#container').append("<div class='letter'>" + letter + "</div>");
        });

        var $letter = $('.letter');
        console.log($letter);



        // when the user click on particular letter, fadeOut the letter.
        $letter.on('click', function () {
            $(this).fadeOut();
            var pickedLetter = $(this).html();
            letterValidation(pickedLetter);
            processGuess(pickedLetter);
            //call another function and pass in the letter;
        });


    }; // end of the hangmanSetup function. -----------------------



    // Push all the picked letter to an array named 'guessedLetter' and show all on the screen later.
    var letterValidation = function (letter) {
        guessedLetters.push(letter);
        console.log('guessletter ' + guessedLetters);

        // if (_.contains(word, letter)) {

        // } else {

        // }

    };


    // function to check whether the picked letters are inside the secret word, if yes then push to 'solution' array.
    var processGuess = function (l) {
        if (_(split_word).include(l)) {
            solution.push(l);
            console.log('correct ' + solution);
            showSolution();
        }
    };



    // Call the hangmanSetup function whenever the page start/reload.
    hangmanSetup();

    // Call the hideSolution function whenever the page start/reload.
    hideSolution();


}); // end of the document.ready function. 



