// Local reviews data
let reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: 'I\'m baby meggings twee health goth. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0;

// Function to save reviews data to local storage
function saveReviewsToLocalStorage() {
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Function to load reviews data from local storage
function loadReviewsFromLocalStorage() {
  const storedReviews = localStorage.getItem('reviews');
  if (storedReviews) {
    reviews = JSON.parse(storedReviews);
  }
}

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Load reviews from local storage on page load
window.addEventListener('DOMContentLoaded', function () {
  loadReviewsFromLocalStorage();
  showPerson(currentItem);
});

// Show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Open review form container on hyperlink click
document.getElementById('writeReviewLink').addEventListener('click', function () {
  document.querySelector('.review-form-container').style.display = 'flex';
});

// Close review form container on button click
document.getElementById('closeReviewFormBtn').addEventListener('click', function () {
  document.querySelector('.review-form-container').style.display = 'none';
});

// Handle form submission
document.getElementById('reviewForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const job = document.getElementById('job').value;
  const message = document.getElementById('message').value;

  // Create new review object
  const newReview = {
    id: reviews.length + 1,
    name: name,
    job: job,
    img: "default_img3.png", // Use a default image URL or add user uploaded image URL here
    text: message,
  };

  // Add the new review to the reviews array
  reviews.push(newReview);

  // Save the updated reviews array to local storage
  saveReviewsToLocalStorage();

  // Reset form values
  document.getElementById('reviewForm').reset();

  // Close the review form container
  document.querySelector('.review-form-container').style.display = 'none';

  // Show the newly added review
  currentItem = reviews.length - 1;
  showPerson(currentItem);

});
