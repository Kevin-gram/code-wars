

// I am creating a game where the user needs to guess a correct number within a limited number of attempts.

// If the user exceeds the maximum number of allowed guesses, the function should throw an error.
// If the user guesses correctly, the function should return true.
// If the user's guess is incorrect, the function should return false, and the user loses a life.
// Can you implement this game to meet all the specified rules?

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives<=0){
        throw('Lives ran out!')
       }
      if(n===this.number){
        return true
      }
      else{
        this.lives-=1
          return false;
       }
     
     }
  }