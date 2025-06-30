const images = [
  {
    preview: 'img/s1-1-min.png',
    original: 'img/s1-1.png',
    description: 's1-1',
  },
  {
    preview: 'img/s1-2-min.png',
    original: 'img/s1-2.png',
    description: 's1-2',
  },
  {
    preview: 'img/s1-3-min.png',
    original: 'img/s1-3.png',
    description: 's1-3',
  },
  {
    preview: 'img/s2-1-min.png',
    original: 'img/s2-1.png',
    description: 's2-1',
  },
  {
    preview: 'img/s2-2-min.png',
    original: 'img/s2-2.png',
    description: 's2-2',
  },
   {
    preview: 'img/s2-3-min.png',
    original: 'img/s2-3.png',
    description: 's2-3',
  },
  {
    preview: 'img/s3-1-min.png',
    original: 'img/s3-1.png',
    description: 's3-1',
  },
  {
    preview: 'img/s3-2-min.png',
    original: 'img/s3-2.png',
    description: 's3-2',
  },
  {
    preview: 'img/s3-3-min.png',
    original: 'img/s3-3.png',
    description: 's3-3',
  },
];

//галерея

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join('');

gallery.innerHTML = markup;

// делегування + модалка

gallery.addEventListener('click', event => {
  event.preventDefault();

  const clickedImage = event.target;

  if (clickedImage.nodeName !== 'IMG') return;

  const largeImageURL = clickedImage.dataset.source;
  const altText = clickedImage.alt;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${altText}" />
  `);

  instance.show();
});
