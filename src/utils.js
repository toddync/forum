export const getUrlQueryString = (val) => {
  const existParam = window.location.search.includes('?');

  const existSlug = window.location.search
    .split('?')[1]
    .includes(val);

  const id =
    window.location.search.includes('=') &&
    +window.location.search.split('=')[1];

  if (!existParam || !existSlug || !id) {
    backTo('/');
    return;
  }

  return id;
};
