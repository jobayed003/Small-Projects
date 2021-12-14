const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'v8JK4_STItSW4K1Beyqi_oQVhXnl7deOU65G3wTi4rs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
const setAttributes = (el, attr) => {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
};

// Create Elements For Links & Photos, Add to DOM

const displayPhotos = () => {
  // Run function for each object in photosarray
  photosArray.forEach(photo => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');

    setAttributes(item, { href: photo.links.html, target: '_blank' });

    // Create <img> for photo
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //  Put <img> inside <a> , then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();

    displayPhotos();
    console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
};

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});

// On Load
getPhotos();
