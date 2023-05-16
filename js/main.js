// PEXELS API
// ir6gQLxYcguDwucjHLgJAzJBg0SlFdkQOYOkam1CmRLJKhuDfJwYY2Xn
fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
  headers: {
    Authorization: 'ir6gQLxYcguDwucjHLgJAzJBg0SlFdkQOYOkam1CmRLJKhuDfJwYY2Xn',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Acessando os dados da foto
    const photo = data.photos[0];

    // Selecionando o elemento HTML onde a foto será exibida
    const photoContainer = document.getElementById('photo-container');

    // Criando a imagem
    const image = document.createElement('img');
    image.src = photo.src.large;
    image.alt = photo.photographer;

    // Adicionando a foto ao container
    photoContainer.appendChild(image);
  })
  .catch((error) => {
    // Trate os erros de requisição
    console.error('Ocorreu um erro:', error);
  });
