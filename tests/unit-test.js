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
	    this.echo('===Titel van de pagina: ' + this.getTitle());
	
		// wait until the textarea was loaded
		casper.waitForSelector('textarea', function() {
			
			// assert that stats aren't immediately shown
			casper.test.begin('Vóór tekstinvoer: stats verborgen', 1, function(test) {
				test.assertDoesntExist('.stats');
	    		test.done();
			});

			// set testing text with special characters (36 vowels and 58 consonants)
			var testText = 'Jemand mußte Josef K. verleumdet haben, denn ohne daß er etwas Böses getan hätte, wurde er eines Morgenns verhaftet.';
			
			// enter text 				
			casper.sendKeys('textarea', testText);
			casper.echo('===Ingevoerde tekst in textarea: ' + testText);

	    	// assert that stats are shown after entering test
			casper.test.begin('Na tekstinvoer: stats getoond', 1, function(test) {
				// check if stats exists
				test.assertExists('.stats');

				// test done
				test.done();
			});

			// check vowels and consonants
			casper.test.begin('Test vowels en consonants', 2, function(test) {

				// check vowels and consonants
				var iVowels = 36;
				var iConsonants = 58;
				casper.echo('===Verwacht ' + iVowels + ' klinkers');
				test.assertSelectorHasText('.characterCount .vowelCount .count', iVowels);
				casper.echo('===Verwacht ' + iConsonants + ' medeklinkers');
				test.assertSelectorHasText('.characterCount .consonantCount .count', iConsonants);

				// test done
				test.done();
			});

			// assert that stats are shown after entering test
			casper.test.begin('Test Top 3 resultalten', 12, function(test) {
				// function for testing Top 3 results
				function TestTopResults(type, aResults) {
					for(var i = 0; i < aResults.length; i++) {
						var result = aResults[i];
						var place = i + 1;
						casper.echo('===Plek ' + place + ' in ' + type + ' Top 3 moet zijn: ' + result.char + ' (' + result.count + ' keer gebruikt)');
						test.assertSelectorHasText('.topResults .' + type + 'Count ol li:nth-child(' + place + ') .character', result.char);
						test.assertSelectorHasText('.topResults .' + type + 'Count ol li:nth-child(' + place + ') .number', result.count);
					}
				}

				// check top 3 vowels (E x 21, A x 6, O x 3)
				TestTopResults('vowel', [
					{char: 'E', count: 21},
					{char: 'A', count: 6},
					{char: 'O', count: 3}
				]);
				// check top 3 consonants (E x 21, A x 6, O x 3)
				TestTopResults('consonant', [
					{char: 'N', count: 9},
					{char: 'T', count: 8},
					{char: 'R', count: 6}
				]);

				// test done
				test.done();
			});
		});
	});

	// run test
	casper.run();
})();