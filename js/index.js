// Get all pics via querySelectorAll()
// const cards = document.querySelectorAll('[class^="card"]');
const cards = Array.from(document.querySelectorAll('[class^="card"]'));
console.log(cards);

function flipImage() {
    console.log(this);
    this.classList.add('flip');
}

// STEP 1 - Use a for loop to make each card flip upon click
// for(let i=0; i<cards.length; i++) {
//     cards[i].addEventListener('click', flipImage);
// }

// STEP 2 - Comment out code above. Now use a do while loop to make each card flip upon click
// let i = 0;
// do {
//     cards[i].addEventListener('click', flipImage);
//     i = i + 1;
//   } while (i<cards.length);

// STEP 3 - Comment out code above. Now use a .forEach() loop to make each card flip upon click
// cards.forEach(card => {
//     card.addEventListener('click', flipImage);
// });

// cards.forEach(function(card) {
//     card.addEventListener('click', flipImage);
// });

// STEP 4 - Comment out code above. Now use a for OF loop to make each card flip upon click
// for (const card of cards) {
//     card.addEventListener('click', flipImage);
//   }

// STEP 5 - Comment out code above. Now use .map() loop to make each card flip upon click
cards.map(element => {
    element.addEventListener('click', flipImage);
});