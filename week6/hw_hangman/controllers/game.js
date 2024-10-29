const Words = require("../models/Words");
const game = {};

exports.newGame = (req, res) => {
    let word = new Words();
    let startWord = word.getRandomWord();
    game.startWord = startWord;
    game.numRight = 0;
    game.numWrong = 0;
    game.hiddenWord ="";

    game.hint = startWord.hint;
    console.log(startWord);

    for (let i = 0; i < startWord.word.length; i++) {
        game.hiddenWord += "_ ";
    }
    console.log(game.hiddenWord);

    res.render('gameMain', {
        hint: startWord.hint,
        showWord: startWord.word,
        rightGuess: game.numRight,
        wrongGuess: game.numWrong,
        hiddenWord1: game.hiddenWord,
        startWord: startWord.word,

    });
}

exports.getLetter = (req, res) => {
    let chosenChar = req.body.character.toLowerCase();
    let letterFound = false;
    let ctr = 0;

    console.log(chosenChar);
    if (!game.startWord || !game.startWord.word) {
        return res.redirect('/');
    }
    while (ctr < game.startWord.word.length && !letterFound) {
        if (game.startWord.word[ctr] === chosenChar) {
            letterFound = true;
        }
        ctr++;
    }
    if (letterFound) {
        console.log(game.startWord);
        game.numRight +=1
        for (let i = 0; i < game.startWord.word.length; i++) {
            game.hiddenWord += "a";
        }
        res.render('gamePlay', {
            hiddenWord1: game.hiddenWord,
            word: chosenChar,
            rightGuess: game.numRight,
            wrongGuess: game.numWrong,
        })
    } else {
        game.numWrong += 1;
        res.render('gamePlay', {
            wrongGuess: game.numWrong,
            rightGuess: game.numWrong,
            word: chosenChar,
        })
    }
}
exports.removeLetter = (req, res) => {
    let id = req.params.id;
    console.log( "made it to delete id:" +id);
    game.delete(id)
        .then((products, fields) => {
            res.redirect('/game');
        })
}

// exports.getHints = (req, res) => {
//
// }


// Uncomment and properly format routes
// router.post('/startGame', gameController.startGame);
