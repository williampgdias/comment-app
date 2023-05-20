// PEXELS API KEY
// ir6gQLxYcguDwucjHLgJAzJBg0SlFdkQOYOkam1CmRLJKhuDfJwYY2Xn

const apiKey = 'ir6gQLxYcguDwucjHLgJAzJBg0SlFdkQOYOkam1CmRLJKhuDfJwYY2Xn';

// APITOJSON FUNCTION
function APIToJson(response) {
  return response.json();
}

// SHOWONSCREEN FUNCTION
function showOnScreen(data) {
  const photos = data.photos;
  const photoContainer = document.getElementById('photo-container');
  photoContainer.innerHTML = '';

  photos.map((photo) => {
    // Creating the image
    const image = document.createElement('img');
    image.src = photo.src.landscape;
    image.alt = photo.photographer;

    // Adding the photo to the container
    photoContainer.appendChild(image);
  });
}

function createApiUrl(route, link) {
  const baseUrl = 'https://api.pexels.com';
  return `${baseUrl}${route}?${link}`;
}

// HOME PAGE WITH RANDOM PHOTOS
let page = 1;
let apiUrl = createApiUrl('/v1/curated', `page=${page}&per_page=12`);

function callAPIFunction(url) {
  return fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then(APIToJson)
    .then(showOnScreen);
}

callAPIFunction(apiUrl);
