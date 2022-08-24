let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 document.getElementById("main-title").textContent =  "Dom T's Homepage";


  // Part 2
document.querySelector('body').style.backgroundColor = 'pink'

  // Part 3
const rmLstltm = document.querySelector("li:last-child")
rmLstltm.parentElemenet.removeChild(rmLstltm);

  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');
  specialTitle.forEach(special => {
    special.style.fontSize = '2rem';
  });

  // Part 5
  const raceChanges = document.getElementById('past-races');
  const races = raceChanges.querySelectorAll('li');
  for (let i = 0; i < races.length; i++) {
  if (races[i].textContent === "Chicago") {
    raceChanges.removeChild(races[i]);
  }};

  // Part 6
  const newRace = document.createElement('li');
newRace.innerText = 'Punta Cana';
raceChanges.appendChild(newRace);


  // Part 7

  const newBlogPost = document.createElement('div');
document.querySelector('.main').appendChild(newBlogPost);

newBlogPost.classList.add('blog-post');
newBlogPost.classList.add('purple');

const barcelona = document.createElement('h1');
barcelona.innerText = "PUNTA CANA";
newBlogPost.appendChild(puntaCana);



  // Part 8
//const randomQuote = function() {
//   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
// };
  const quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote)
  
  // Part 9

  const toggler = document.getElementsByClassName('blog-post');
  Array.from(toggler).forEach(post => {
    post.addEventListener('mouseout', (event) => {
      post.classList.toggle('purple');
    })
    post.addEventListener('mouseenter', (event) => {
      post.classList.toggle('red');
    });
  });
});
  // 