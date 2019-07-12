var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var sleep = require('sleep');   // include sleep to sleep for x seconds or ms
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

module.exports = {
    morseMessage:function(message){
  for (let index = 0; index < message.length; index++) {
        const element = message[index].toUpperCase();
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
    },
};

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