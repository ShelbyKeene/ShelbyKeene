import {textTyping} from "text-typing";


/*window.onload = function() {
  let typing = document.querySelector('.typing-text');
  let words = ['Web Designer', 'Artist', 'Data Analyst', 'Photographer'];
  let cursor = 0;
  let speed = "120ms";
  let interval = null;

  function type() {
    let word = words[cursor];
    let length = word.length;
    let current = typing.textContent;
    if (current.length !== length) {
      let letter = word.slice(current.length, current.length +1);
      typing.textContent += letter;
    } else {
      clearInterval(interval);
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    interval = setInterval(deleteLetter, speed / 2);
  }

  function deleteLetter() {
    let word = words[cursor];
    let current = typing.textContent;
    if (current.length !== 0) {
      let letter = current.slice(-1);
      typing.textContent = current.slice(0, current.length -1);
    } else {
      clearInterval(interval);
      cursor++;
      if (cursor >= words.length) {
        cursor = 0;
      }
      setTimeout(type, 1000);
    }
  }

  type();
}*/

/*document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typing-text', {
      strings: ['Web Developer', 'Artist', 'Data Analyst', 'Photographer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true
    });
  });*/
  
 // Optional: get the element by ID
//const typingText = document.getElementById('typing-text');

// Get the element by class name
//const typingText = document.querySelector('.typing-text');

// Optional: set the text dynamically
// typingText.textContent = 'This is a typing text function.';

// Optional: set a delay before starting the animation
// setTimeout(() => typingText.classList.add('typing'), 1000);

// Start the animation immediately
//typingText.classList.add('typing');

/*(async () => {      
  const txt = textTyping(document.getElementById("myHeading"));
  await txt.typeText("Hello");
})();

(async () => {      
  const txt = textTyping(elem);
  await txt.typeText("Hello");
  await txt.backspace(2);
})();

(() => {
  const txt = textTyping(elem);
  txt.typeText("Hello").then(resp => {
    resp.backspace(2);
  });
})();*/

let type = new Typed('.typing-text',{
  strings: [ 'Web Designer','Front-End Developer','Graphic Designer','Photographer' ],
  typeSpeed:120,
    loop:true
});