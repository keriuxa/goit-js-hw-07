import { galleryItems } from './gallery-items.js';

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

const createModal = (event) => {
event.preventDefault()
const onEscButton = (event) =>{
  if(event.code === 'Escape'){
    instance.close() }
}
  if (event.target.nodeName!== "IMG"){
    return
  }
const instance = basicLightbox.create(` <img src="${event.target.dataset.source}" >`, {
  onShow:(instance) =>
document.addEventListener('keydown', onEscButton)
}, {
    onClose: (instance) => 
    document.removeEventListener('keydown', onEscButton)
}
)
instance.show()

}


galerry.addEventListener("click", createModal)
