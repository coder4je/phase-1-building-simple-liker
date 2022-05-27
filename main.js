// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal')
const modalH2 = document.querySelector('#modal h2')
const heart = document.querySelectorAll('.like-glyph')
let modal2 = document.querySelector('.hidden')

// Your JavaScript code goes here!

modal.className = 'hidden';

  

heart.forEach(ht => {
  ht.addEventListener('click', () => {
    if (EMPTY_HEART) {
      mimicServerCall()
      .then(res => {
        console.log(res);
      })
  
      .catch((error) => {
        console.log(error)
        modal.hidden = false;
        modalH2.textContent = 'error';
      })
      setTimeout(() => {
        modal.hidden = true;  
        ht.textContent = FULL_HEART;  
      }, 3000);
  
      ht.classList.add('activated-heart');
    }
  
    else {
      ht.textContent = EMPTY_HEART;
      ht.classList.remove('activated-heart');
    }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
