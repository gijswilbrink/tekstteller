/**
 * Unit tests for tekstteller app
 * Parsed by CasperJS
 * Run by: gulp test
 */
(function(){
	// go to URL
	casper.start('index.html');

	// get title
	casper.then(function() {
	    this.echo('Titel van de pagina: ' + this.getTitle());
	
		// wait until the textarea was loaded
		casper.waitForSelector('textarea', function() {
			
			// assert that stats aren't immediately shown
			casper.test.begin('Vóór tekstinvoer: stats verborgen', 1, function(test) {
				test.assertDoesntExist('.stats');
	    		test.done();
			});

	    	// assert that stats are shown after entering test
			casper.test.begin('Na tekstinvoer: stats getoond, test stats', 3, function(test) {
				
				// set testing text with special characters (36 vowels and 57 consonants)
				var testText = 'Jemand mußte Josef K. verleumdet haben, denn ohne daß er etwas Böses getan hätte, wurde er eines Morgens verhaftet.';
				
				// enter text 				
				casper.sendKeys('textarea', testText);
				casper.echo('Ingevoerde tekst in textarea: ' + testText);

				// check if stats exists
				test.assertExists('.stats');

				// check vowels and consonants
				var iVowels = 36;
				var iConsonants = 57;
				casper.echo('Verwacht ' + iVowels + ' klinkers');
				test.assertSelectorHasText('.vowelCount .count', iVowels);
				casper.echo('Verwacht ' + iConsonants + ' medeklinkers');
				test.assertSelectorHasText('.consonantCount .count', iConsonants);

				// test done
				test.done();
			});
			
	    	
		});
	});

	// run test
	casper.run();
})();