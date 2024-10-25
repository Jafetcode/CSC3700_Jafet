const Words = require("../models/Words"); // Adjusted path
const game = {};
const MAX_GUESS = 7;

exports.getGame = (req, res) => {
    let word = new Words();
    let startWord = word.getRandomWord();
    game.startWord = startWord;
    game.numRight = 0;
    game.numWrong = 0;

    res.render('gamePlay', {
        hint: game.startWord.hint,
        showWord: game.startWord.word,
        guesses: MAX_GUESS,
    });
}

// Uncomment and properly format routes
// router.post('/startGame', gameController.startGame);
