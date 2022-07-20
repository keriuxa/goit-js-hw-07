import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerry = document.querySelector(".gallery");
const imagesGalery = galleryItems.map(item => 
    `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
)
.join('')

galerry.innerHTML = imagesGalery;

new SimpleLightbox( '.gallery a',{captionsData: "alt",
captionDelay: 250})