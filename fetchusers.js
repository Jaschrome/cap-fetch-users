document.addEventListener('DOMContentLoaded', function() {
  const fetchUsersBtn = document.getElementById('fetchUsersBtn');
  const userDataDisplay = document.getElementById('userDataDisplay');

  fetchUsersBtn.addEventListener('click', function() {
    fetchUsers();
  });

  async function fetchUsers() {
    try {
      const response = await fetch('https://reqres.in/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      displayUsers(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }

  function displayUsers(users) {
    userDataDisplay.innerHTML = '';
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <div class="avatar">
          <img src="${user.avatar}" alt="User Avatar">
        </div>
        <div class="user-info">
          <h2>${user.first_name} ${user.last_name}</h2>
          <p>Email: ${user.email}</p>
        </div>
      `;
      userDataDisplay.appendChild(userCard);
    });
  }
});
