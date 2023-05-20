function orientationPhotos(orientation) {
  document.getElementById('photo-container').innerHTML = '';
  const orientationLink = `https://api.pexels.com/v1/search?query=${orientation}&per_page=12`;
  fetch(orientationLink, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then(APIToJson)
    .then((data) => {
      data.photos.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        document.getElementById('photo-container').appendChild(img);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById('landscape').addEventListener('click', function () {
  orientationPhotos('landscape');
});

document.getElementById('portrait').addEventListener('click', function () {
  orientationPhotos('portrait');
});
