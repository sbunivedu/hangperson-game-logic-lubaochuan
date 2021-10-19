class HangpersonGame {
  constructor(word) {
    this.word = word;
    this.letters_in_word = word.split('');
    this.correct_guesses = '';
    this.wrong_guesses = '';
  }

  guess(letter) {
    if (letter == null ||
      letter.length == 0 ||
      letter.length > 1 ||
      letter.length === 1 && !letter.match(/[a-z]/i)){
      throw 'Argument Error';
    }

    letter = letter.toLowerCase();
    if (this.correct_guesses.includes(letter)){
      return false;
    }
    if (this.wrong_guesses.includes(letter)){
      return false;
    }
    if (this.word.includes(letter)){
      this.correct_guesses = this.correct_guesses.concat(letter);
      return true;
    }else{
      this.wrong_guesses = this.wrong_guesses.concat(letter);
      return true;
    }
  }

  word_with_guesses() {
    var correct_guesses = this.correct_guesses;
    var result = '';
    this.letters_in_word.forEach(function(letter){
      if (correct_guesses.includes(letter)){
        result += letter;
      }else{
        result += '-';
      }
    });
    return result;
  }

  check_win_or_lose() {
    if (this.word.length == this.correct_guesses.length){
      return 'win';
    }else if(this.wrong_guesses.length >= 7){
      return 'lose';
    }else{
      return 'play';
    }
  }
}

var hangperson_game = new HangpersonGame('glorp');
hangperson_game.guess('a');
console.log(hangperson_game);
