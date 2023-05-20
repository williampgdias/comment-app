const navBar = document.querySelector('.nav-bar');

navBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('search-links')) {
    e.preventDefault();

    const searchValue = e.target.innerHTML;

    if (searchValue === 'Nature') {
      search = 'nature';
      page = 1;
      apiUrl = createApiUrl('/v1/search', `query=${search}&per_page=12`);
    } else if (searchValue === 'Ocean') {
      search = 'ocean';
      apiUrl = createApiUrl('/v1/search', `query=${search}&per_page=12`);
    } else if (searchValue === 'People') {
      search = 'people';
      apiUrl = createApiUrl('/v1/search', `query=${search}&per_page=12`);
    } else if (searchValue === 'Food') {
      search = 'food';
      apiUrl = createApiUrl('/v1/search', `query=${search}&per_page=12`);
    }

    callAPIFunction(apiUrl);
  }
});
