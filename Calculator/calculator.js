const inputVal = document.getElementById('inputVal');
function toDisplay(input) {
   inputVal.value += input;
}
function calculate() {
   try {
      inputVal.value = eval(inputVal.value);
   } catch (err) {
      inputVal.value = 'Error';
   }
}
function clearDisplay() {
   inputVal.value = '';
}

let audio = new Audio();


let button = document.querySelectorAll('button');
button.forEach((button) => {
   button.addEventListener('click', () => {
      audio.src = '/calculatorSound/click.wav';
      audio.play();
   });
});

const butC = document.getElementById('butC');
butC.addEventListener('click', () => {
   audio.src = '/calculatorSound/foom_0.wav';
   audio.play();
});

const butD = document.getElementById('but/');
butD.addEventListener('click', () => {
   audio.src = '/calculatorSound/109432__black-snow__sword-slice-23.wav';
   audio.play();
});

const butP = document.getElementById('but+');
butP.addEventListener('click', () => {
   audio.src = '/calculatorSound/magical_1.ogg';
   audio.play();
});

const butM = document.getElementById('but-');
butM.addEventListener('click', () => {
   audio.src = '/calculatorSound/dragonflap.mp3';
   audio.play();
});

const butN = document.getElementById('but*');
butN.addEventListener('click', () => {
   audio.src = '/calculatorSound/8bit_bomb_explosion.wav';
   audio.play();
});

const butE = document.getElementById('but=');
butE.addEventListener('click', () => {
   audio.src = '/calculatorSound/winfretless.ogg';
   audio.play();
});

/*if ('speechSynthesis' in window) {
   let speech = new SpeechSynthesisUtterance();
speech.lang = 'en';
document.querySelector('.display').addEventListener('click', () => {
   speech.text = document.querySelector(inputVal).value;
   window.speechSynthesis.speak(speech);
});
} else {
   console.error('Speech synthesis is not supported in this browser.');
}*/
