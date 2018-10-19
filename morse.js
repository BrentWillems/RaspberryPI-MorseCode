//collection of symbols, numbers and letters in morse.
MORSE_ARRAY = {
    ' ': ' ',
    "'": '.----.',
    '(': '-.--.-',
    ')': '-.--.-',
    ',': '--..--',
    '-': '-....-',
    '.': '.-.-.-',
    '/': '-..-.',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ':': '---...',
    ';': '-.-.-.',
    '?': '..--..',
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '_': '..--.-'
}

var Gpio = require('onoff').Gpio; // include onoff to interact with the GPIO
var sleep = require('sleep');   // include sleep to sleep for x seconds or ms
var LED = new Gpio(4, 'out'); // use GPIO pin 4, and specify that it is output
const readline = require('readline'); // include readline to prompt for input


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Write line to convert to morse: ', (line) => {
    for (let index = 0; index < line.length; index++) {
        const element = line[index].toUpperCase();
        var morse = MORSE_ARRAY[element];
       console.log(element);
        for (let i = 0; i < morse.length; i++) {
            var symbol = morse.substr(i, 1);
            if (symbol == '-') {
                dash();
            } else if (symbol == '.') {
                dot();
            } else {
                sleep.msleep(1400);
            }
        }
        sleep.msleep(600);
    }
    rl.close();
});


function dash() {
    LED.writeSync(1);
    sleep.msleep(600);
    LED.writeSync(0);
    sleep.msleep(200);
}
function dot() {
    LED.writeSync(1);
    sleep.msleep(200);
    LED.writeSync(0);
    sleep.msleep(200);
}
