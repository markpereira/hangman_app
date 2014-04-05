$(document).ready(function () {

    var words = ["Skynet", "Digital", "FitBit", "Realtime", "ManPacks", "Landing", "Conversion", "Social", "Airbnb", "SnapChat", "Bangedup", "Application", "Analytics", "Geolocation", "Nodeability", "KickStarter", "Matching", "Adults", "Pinterest", "Groupon", "Appstore"];

    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var word = _.sample(words).toUpperCase();
    console.log(word);

    var split_word = word.split('');

    var $guessWords = $('#words');
    var guessedLetters = [];
    var solution = [];

    var hangmanSetup = function () {


		_.each(split_word, function (letter, index) {
	        $('#letters').append("<div class='solution_letter' id='" + index + "'>" + letter + "</div>");

	    });

	    var hideSolution = function () {
			$('.solution_letter').hide();
		};

		var showSolution = function () {
			$('.solution_letter').show();
		};

		hideSolution();




        _.each(letters, function (letter) {
            $('#container').append("<div class='letter'>" + letter + "</div>");
        });

        var $letter = $('.letter');
        console.log($letter);




        $letter.on('click', function () {
            $(this).fadeOut();
            var pickedLetter = $(this).html();
            letterValidation(pickedLetter);
            processGuess(pickedLetter);
            //call another function and pass in the letter;
        });

    };


    var letterValidation = function (letter) {
        guessedLetters.push(letter);
        console.log('guessletter ' + guessedLetters);

        if (_.contains(word, letter)) {

        } else {

        }

    };


    // Joel

    var processGuess = function (l) {
        if (_(split_word).include(l)) {
            solution.push(l);
            console.log('correct ' + solution);
            showSolution();
        }
    };

    // var $words = $('#word').empty();
    // _(letters).each(function (wordletter) {
    //     if (_(solution).include(wordletter)) {
    //         $words.append('<span>' + wordletter + '</span>');
    //     } else {
    //         $words.append('<span>_</span>');
    //     }
    // });




    hangmanSetup();
});