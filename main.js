// 1. Alter the text color of the paragraph to a shade of aqua.
let paragraph = document.getElementById('main-paragraph');
paragraph.style.color = 'aqua'; 

// 2. Adjust the font size of the heading to 42 pixels.
let heading = document.getElementById('main-heading');
heading.style.fontSize = '42px';

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.';

// 4. Reduce the opacity of the 13th item to 30% transparency.
let listItems = document.querySelectorAll('.item'); // .item selects all list items by class
listItems[12].style.opacity = '0.3'; // (Index 12 = 13th) item i had some help on this one is there a better way?

// 5. Modify the text of the 3rd item to read "Greetings!"
listItems[2].innerText = 'Greetings!'; // Index 2 = 3rd item

// 6. Update the image below the list to display the new image.
let mainImg = document.getElementById('main-img');
mainImg.src = 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=';

// 7. Resize the new image to a height of 250 pixels.
mainImg.style.height = '250px';

// 8. Integrate an additional image using innerHTML below the existing image.
let newImgHTML = '<img id="extra-img" src="https://media.istockphoto.com/id/471296532/photo/planet-earth-at-night.jpg?s=612x612&w=0&k=20&c=n-9GMF-nYTuZJ5z6oc7sCo8MagfPlx2JeK-4visym_E=" alt="Earth">';
mainImg.insertAdjacentHTML('afterend', newImgHTML);

// 9. Adjust the height of the new image to 280 pixels programmatically.
let extraImg = document.getElementById('extra-img');
extraImg.style.height = '280px';

// 10. Append a 16th <li> element to the list using innerHTML.

let list = document.getElementById('list'); // Select the <ul> using its ID
list.innerHTML += '<li id="item-17">Placeholder text</li>'; 

// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
let newItem = document.getElementById('item-17'); // Select the newly added <li> by its ID
newItem.classList.add('item');
// 12. Populate the new <li> with the text "Never gonna give you up."
newItem.innerText = 'Never gonna give you up.'; 