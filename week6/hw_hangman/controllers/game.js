const Words = require("../models/Words"); // Adjusted path
const game = {};
const MAX_GUESS = 7;
let numWrong = 0;
exports.getGame = (req, res) => {
    let word = new Words();
    let startWord = word.getRandomWord();
    let hiddenWord = "";
    game.startWord = startWord;
    game.numRight = 0;
    game.numWrong = 0;
    console.log(startWord);

    for (let i = 0; i < startWord.word.length; i++) {
        hiddenWord += "_ ";
    }
    console.log(hiddenWord);

    res.render('gameMain', {
        hint: startWord.hint,
        showWord: startWord.word,
        guesses: MAX_GUESS,
        hiddenWord1: hiddenWord,
        startWord: startWord.word,
        wrongCount: 0,

    });
}
exports.newGame = (req, res) => {
    let word = new Words();
    let startWord = word.getRandomWord();
    let hiddenWord = "";
    game.startWord = startWord;
    // game.numRight = 0;
    // game.numWrong = 0;
    console.log(startWord);

    for (let i = 0; i < startWord.word.length; i++) {
        hiddenWord += "_ ";
    }
    console.log(hiddenWord);

    res.render('gameMain', {
        hint: startWord.hint,
        showWord: startWord.word,
        guesses: MAX_GUESS,
        hiddenWord1: hiddenWord,
        startWord: startWord.word,
        wrongCount: 0,

    });
}

exports.getLetter = (req, res) => {
    let chosenChar = req.body.character;
    let letterFound = false;
    let remainingGuess = 7;
    let numWrong = 0;
    console.log(chosenChar);
    if (!game.startWord || !game.startWord.word) {
        return res.redirect('/');
    }
    for (let i = 0; i < game.startWord.word.length; i++) {
        if (game.startWord.word[i] === chosenChar){
            let letterFound = true;
        }
    }
    if (!letterFound) {
        remainingGuess -= 1;
        res.render('gamePlay', {
            wrongCount: numWrong += 1,
            // guesses: remainingGuess,
            guesses: remainingGuess-=1,
            word: chosenChar,
        })
    }
    else{
        console.log(game.startWord);
        remainingGuess -= 1;
        res.render('gamePlay', {
            word: chosenChar,
            guesses: remainingGuess,

        })
    }
}

// exports.getLetter = (req, res) => {
//     // Check if game is initialized
//     if (!game.startWord || !game.startWord.word) {
//         return res.redirect('/'); // Redirect to starting page if game isn't initialized
//     }
//
//     let chosenChar = req.body.character;
//     let foundMatch = false;
//     console.log(chosenChar);
//
//     for(let i = 0; i < game.startWord.word.length; i++){
//         if(game.startWord.word[i] === chosenChar){
//             foundMatch = true;
//             break;
//         }
//     }
//
//     if(foundMatch) {
//         remainingGuess -= 1;
//         res.render('gamePlay', {
//             word: chosenChar,
//             guesses: remainingGuess,
//             showWord: game.startWord.word, // Add these to ensure template has all needed values
//             hint: game.startWord.hint
//         });
//     } else {
//         remainingGuess -= 1;
//         game.numWrong += 1;
//         res.render('gamePlay', {
//             wrongCount: game.numWrong,
//             guesses: remainingGuess,
//             showWord: game.startWord.word, // Add these to ensure template has all needed values
//             hint: game.startWord.hint
//         });
//     }
// }

// Uncomment and properly format routes
// router.post('/startGame', gameController.startGame);
