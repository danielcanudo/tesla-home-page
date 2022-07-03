const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
    document.querySelector('body').className = 'active';
  }
  const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
    document.querySelector('body').className = '';
  }
  
  document.getElementById('menu_button').onclick = e => {
    e.preventDefault();
    openMenu();
  }
  document.querySelector('aside button.close').onclick = e => {
    closeMenu();
  }
  document.querySelector('.backdrop').onclick = e => {
    closeMenu();
  }
  