var mainPhotoElement = document.getElementById('mainPhoto');
var previewPhotosElement = document.getElementById('previewPhotos');
var prevArrowElement = document.getElementById('prevArrow');
var nextArrowElement = document.getElementById('nextArrow');
var paginationElement = document.getElementById('pagination');
var fullscreenContainer = document.getElementById('fullscreenContainer');
var fullscreenPhotoElement = document.getElementById('fullscreenPhoto');
var closeButton = document.getElementById('closeButton');
var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');

var galleryFolder = 'gallery';
var totalPhotos = 28; 

var currentIndex = 0;
var previewPhotosPerPage = 10;
var totalPages = Math.ceil(totalPhotos / previewPhotosPerPage);

displayMainPhoto();
displayPreviewPhotos();
updatePagination();
startMainPhotoRotation();

function displayMainPhoto() {
  var imageUrl = galleryFolder + '/image' + (currentIndex + 1) + '.jpg';
  mainPhotoElement.src = imageUrl;
}

function displayPreviewPhotos() {
  previewPhotosElement.innerHTML = '';
  var endIndex = currentIndex + previewPhotosPerPage;

  for (var i = currentIndex; i < endIndex; i++) {
    var imageUrl = galleryFolder + '/image' + (i + 1) + '.jpg';
    var previewPhotoElement = document.createElement('img');
    previewPhotoElement.classList.add('preview-photo');
    previewPhotoElement.src = imageUrl;
    previewPhotoElement.alt = 'Preview Photo';
    previewPhotoElement.addEventListener('click', previewClickHandler.bind(null, i));
    previewPhotosElement.appendChild(previewPhotoElement);
  }

  updateArrowVisibility();
}

function previewClickHandler(index) {
  if (currentIndex !== index) {
    currentIndex = index;
    displayMainPhoto();
    updateArrowVisibility();
  }
}

function updateArrowVisibility() {
  prevArrowElement.classList.toggle('disabled', currentIndex === 0);
  nextArrowElement.classList.toggle('disabled', currentIndex >= totalPhotos - previewPhotosPerPage);
}

function updatePagination() {
  paginationElement.innerHTML = '';
  var currentPage = Math.floor(currentIndex / previewPhotosPerPage) + 1;

  for (var i = 1; i <= totalPages; i++) {
    var pageElement = document.createElement('span');
    pageElement.classList.add('page-number');
    pageElement.textContent = i;
    pageElement.addEventListener('click', paginationClickHandler);
    if (i === currentPage) {
      pageElement.classList.add('active');
    }
    paginationElement.appendChild(pageElement);
  }
}

function paginationClickHandler(event) {
  var pageNumber = parseInt(event.target.textContent);
  currentIndex = (pageNumber - 1) * previewPhotosPerPage;
  displayPreviewPhotos();
  updatePagination();
}

prevArrowElement.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex -= previewPhotosPerPage;
    displayPreviewPhotos();
    updatePagination();
  }
});

nextArrowElement.addEventListener('click', function() {
  if (currentIndex < totalPhotos - previewPhotosPerPage) {
    currentIndex += previewPhotosPerPage;
    displayPreviewPhotos();
    updatePagination();
  }
});

function getRandomIndex(max) {
  return Math.floor(Math.random() * max) + 1;
}

function startMainPhotoRotation() {
  setInterval(function() {
    displayMainPhoto();
  }, 20000);
}

// Fullscreen functionality
function openFullscreen(index) {
  var imageUrl = galleryFolder + '/image' + (index + 1) + '.jpg';
  fullscreenPhotoElement.src = imageUrl;
  fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
  fullscreenContainer.style.display = 'none';
}

function showNextPhoto() {
  if (currentIndex < totalPhotos - 1) {
    currentIndex++;
    displayFullscreenPhoto();
  }
}

function showPreviousPhoto() {
  if (currentIndex > 0) {
    currentIndex--;
    displayFullscreenPhoto();
  }
}

function displayFullscreenPhoto() {
  var imageUrl = galleryFolder + '/image' + (currentIndex + 1) + '.jpg';
  fullscreenPhotoElement.src = imageUrl;
}

mainPhotoElement.addEventListener('mouseenter', function() {
  mainPhotoElement.style.cursor = 'zoom-in';
});

mainPhotoElement.addEventListener('mouseleave', function() {
  mainPhotoElement.style.cursor = 'default';
});

mainPhotoElement.addEventListener('click', function() {
  openFullscreen(currentIndex);
});

closeButton.addEventListener('click', function() {
  closeFullscreen();
});

nextButton.addEventListener('click', function() {
  showNextPhoto();
});

prevButton.addEventListener('click', function() {
  showPreviousPhoto();
});

document.addEventListener('keydown', function(event) {
  if (fullscreenContainer.style.display === 'flex') {
    if (event.key === 'Escape') {
      closeFullscreen();
    } else if (event.key === 'ArrowRight') {
      showNextPhoto();
    } else if (event.key === 'ArrowLeft') {
      showPreviousPhoto();
    }
  }
});
