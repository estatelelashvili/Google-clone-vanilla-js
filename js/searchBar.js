export const setSearchFocus = () => {
  document.getElementById('search').focus();
};

export const showClearTextButton = () => {
  const search = document.getElementById('search');
  const clear = document.getElementById('clear');
  if (search.value.length) {
    clear.classList.remove('none');
    clear.classList.remove('flex');
  } else {
    // clear
  }
};
