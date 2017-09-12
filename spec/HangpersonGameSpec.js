var hangperson_game, valid;

var guess_several_letters = function(game, letters){
	letters.split('').forEach(function(item){
		hangperson_game.guess(item);
	})
}

describe('Hangperson Game', function() {
	it('should take a parameter and return a HangpersonGame object', function() {
		hangperson_game = new HangpersonGame('glorp');
		expect(hangperson_game instanceof HangpersonGame).toBe(true);
		expect(hangperson_game.word).toBe('glorp');
		expect(hangperson_game.correct_guesses).toBe('');
		expect(hangperson_game.wrong_guesses).toBe('');
	});
});

describe('Guess Correctly', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('garply');
		valid = hangperson_game.guess('a');
	});

	it('it should change correct guesses list', function() {
		expect(hangperson_game.correct_guesses).toBe('a');
		expect(hangperson_game.wrong_guesses).toBe('');
	});

	it('it should return true', function() {
		expect(valid).toBe(true);
	});
});

describe('Guess Incorrectly', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('garply');
		valid = hangperson_game.guess('z');
	});

	it('it should change wrong guesses list', function() {
		expect(hangperson_game.correct_guesses).toBe('');
		expect(hangperson_game.wrong_guesses).toBe('z');
	});

	it('it should return true', function() {
		expect(valid).toBe(true);
	});
});

describe('Guess Same Letter Repeatedly', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('garply');
		hangperson_game.guess('a');
		hangperson_game.guess('q');
	});

	it('it should not change correct guesses list', function() {
		hangperson_game.guess('a');
		expect(hangperson_game.correct_guesses).toBe('a');
	});

	it('it should not change wrong guesses list', function() {
		hangperson_game.guess('q');
		expect(hangperson_game.wrong_guesses).toBe('q');
	});

	it('it should return false', function() {
		expect(hangperson_game.guess('a')).toBe(false);
		expect(hangperson_game.guess('q')).toBe(false);
	});

	it('it should be case insensitive', function() {
		expect(hangperson_game.guess('A')).toBe(false);
		expect(hangperson_game.guess('Q')).toBe(false);
		expect(hangperson_game.correct_guesses).toContain('a');
		expect(hangperson_game.wrong_guesses).toContain('q');
	});
});

describe('Guess with Invalid Letters', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('garply');
	});

	it('it should throw an error when empty', function() {
		expect(function(){hangperson_game.guess('')}).toThrow();
	});

	it('it should throw an error when not a letter', function() {
		expect(function(){hangperson_game.guess('%')}).toThrow();
	});

	it('it should throws an error when null', function() {
		expect(function(){hangperson_game.guess(null)}).toThrow();
	});
});

describe('Displayed Word with Guesses', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('banana');
	});

	// for a given set of guesses, what should the word look like?
	var test_cases = {
		'bn': 'b-n-n-',
		'def': '------',
		'ban': 'banana'
	};

	Object.keys(test_cases).forEach(function (guesses) {
		it("should display word with correct guessses when guesses are "
			+guesses, function() {
			guess_several_letters(hangperson_game, guesses);
			expect(hangperson_game.word_with_guesses()).toBe(test_cases[guesses]);
		});
	});
});

describe('Game Status', function() {

	beforeEach(function() {
		hangperson_game = new HangpersonGame('dog');
	});

	it('should be win when all letters guessed', function() {
		guess_several_letters(hangperson_game, 'ogd');
		expect(hangperson_game.check_win_or_lose()).toBe('win');
	});

	it('should be lose after 7 incorrect guesses', function() {
		guess_several_letters(hangperson_game, 'tuvwxyz');
		expect(hangperson_game.check_win_or_lose()).toBe('lose');
	});

		it('should continue play if neither win nor lose', function() {
		guess_several_letters(hangperson_game, 'do');
		expect(hangperson_game.check_win_or_lose()).toBe('play');
	});
});
