// Mock user database
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' }
  ];
  
  // Handle signup
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;
    
      if (users.some(u => u.username === username)) {
        alert('Username already exists! Please choose another.');
        return;
      }
    
      users.push({ username, password });
      alert('Signup successful! Please login.');
      window.location.href = 'index.html';
    });
  }
  
  // Handle login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
    
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid username or password!');
      }
    });
  }