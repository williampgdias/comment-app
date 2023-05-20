const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach((pageLink) => {
  pageLink.addEventListener('click', function (e) {
    e.preventDefault();

    const pageValue = pageLink.getAttribute('data-page');

    if (pageValue === '1') {
      page = 1;
      apiUrl = createApiUrl('/v1/curated', `page=${page}&per_page=12`);
    } else if (pageValue === '2') {
      page = 2;
      apiUrl = createApiUrl('/v1/curated', `page=${page}&per_page=12`);
    } else if (pageValue === '3') {
      page = 3;
      apiUrl = createApiUrl('/v1/curated', `page=${page}&per_page=12`);
    }

    callAPIFunction(apiUrl);
  });
});
