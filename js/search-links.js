const navBar = document.querySelector('.nav-bar');

navBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('search-links')) {
    e.preventDefault();

    const searchValue = e.target.innerHTML;

    if (searchValue === 'Nature') {
      search = 'nature';
      apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=12`;
    } else if (searchValue === 'Ocean') {
      search = 'ocean';
      apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=12`;
    } else if (searchValue === 'People') {
      search = 'people';
      apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=12`;
    } else if (searchValue === 'Food') {
      search = 'food';
      apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=12`;
    }

    callAPIFunction(apiUrl);
  }
});
