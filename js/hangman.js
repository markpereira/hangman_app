$(document).ready(function () {
	var words = ["Skynet","Digital","FitBit","Realtime","ManPacks","Landing","Conversion","Social","Airbnb","SnapChat","Bangedup","Application","Analytics","Geolocation","Nodeability","KickStarter","Matching","Adults","Pinterest","Groupon","Appstore"];
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var word = _.sample(words).toUpperCase();
	console.log(word);
	var $guessWords = $('#words');
	var guessedLetters = []

	var hangmanSetup = function () {

		$guessWords.text(word);
		_.each(word.split(''), function (letter, index) {
			$('#letters').append("<div id='" + index + "'>" + letter + "</div>");
		});


		// var sample_letter = _.sample(letters);

		_.each(letters, function (letter) {
			$('#container').append("<div class='letter'>" + letter + "</div>");
		});

		var $letter = $('.letter');
		console.log($letter);

		// $domLetters = $('#letters');
		// domLetters.text(letter)


		$letter.on('click', function () {
	    	$(this).fadeOut();
	    	var pickedLetter = $(this).html()
	    	letterValidation(pickedLetter);
	    	//call another function and pass in the letter;
	    });

	};

	var letterValidation = function (letter) {
		guessedLetters.push(letter);

		if (_.contains(word, letter)) {

		}else{

		};


	}

    hangmanSetup();

});

