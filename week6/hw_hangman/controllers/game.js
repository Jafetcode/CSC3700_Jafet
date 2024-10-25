const Words = require("/models/Words");
const game= {}
const MAX_GUESS = 7;

exports.getGame = (req,res)=>{
    let word = new Words();
    let startWord = word.getRandomWord();
    let createGame = {startWord, MAX_GUESS};
    game.numRight = 0
    game.numWrong = 0
    res.render('gamePlay', {
        hint: game.targetword.hint,
        showWord: game.showWord,
        guesses: MAX_GUESS
    })
}

// router.post(/startGame, gameController)
// router.post(/startGame, gameController)


//boostrap 5 modal,