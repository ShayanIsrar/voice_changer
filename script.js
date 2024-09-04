// This line creates a new instance of SpeechSynthesisUtterance, which represents a speech request. You’ll use this object to set the text you want to be spoken and to configure other speech-related properties.
let speech = new SpeechSynthesisUtterance();

// This array will store the available voices provided by the browser’s speech synthesis API.
let voices = [];

// This line retrieves the <select> element (a dropdown menu) from the HTML, which will be used to allow users to choose from the available voices.
let voiceSelect = document.querySelector('select');

// When the list of voices becomes available (or changes), this function is triggered:
// voices is updated with the list of voices returned by getVoices().
// The first voice in the list is set as the default voice for the speech object.
// Each voice is added as an option in the <select> element. The option text is the voice name, and the value is its index in the voices array.
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// When a user selects a different voice from the dropdown, this function updates the speech.voice property to the selected voice. The value of voiceSelect corresponds to the index of the chosen voice in the voices array.
voiceSelect.addEventListener('change', ()=>{
    speech.voice = voices[voiceSelect.value];
})

// When the button is clicked:
// The text from the <textarea> is set as the text to be spoken (speech.text).
// window.speechSynthesis.speak(speech) is called to start speaking the text using the currently selected voice.
document.querySelector('button').addEventListener('click', ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})