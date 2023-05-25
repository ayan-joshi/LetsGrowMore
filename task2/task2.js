// JavaScript code for fetching user data and populating the user grid
const getUsersBtn = document.querySelector('.get-users-btn');
const userGrid = document.querySelector('.user-grid');

getUsersBtn.addEventListener('click', getUsers);

function getUsers() {
  showSkeletonLoading();
  
  // Make an API call to fetch user data
  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      hideSkeletonLoading();
      displayUsers(data.data);
    })
    .catch(error => {
      hideSkeletonLoading();
      console.log('Error:', error);
    });
}

function displayUsers(users) {
  // Clear existing user cards
  userGrid.innerHTML = '';

  // Create and append user cards
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>Email: ${user.email}</p>
    `;
    userGrid.appendChild(card);
  });
}

function showSkeletonLoading() {
  userGrid.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.classList.add('user-card', 'skeleton-loading');
    card.innerHTML = `
      <div class="skeleton-avatar"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    `;
    userGrid.appendChild(card);
  }
}

function hideSkeletonLoading() {
  const skeletonCards = document.querySelectorAll('.skeleton-loading');
  skeletonCards.forEach(card => card.remove());
}
