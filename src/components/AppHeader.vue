<template>
    <header>
      <div class="top-header">
        <div class="header-logo">
          <img src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1716565101/header_yjt5n6.webp" alt="User Image" class="header-logo-image">
          <p class="name">to-do list</p>
        </div>
        <div class="user-card">
          <img src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1716486165/avatar-removebg-preview_2_xmp4h7.webp" alt="User Image" class="user-image">
        </div>
      </div>

      <ul class="navbar">
        <router-link to="/doing" class="nav-link" exact active-class="active">Doing</router-link>
        <router-link to="/done" class="nav-link" exact active-class="active">Done</router-link>
        <router-link to="/" class="nav-link" exact active-class="active">to-do</router-link>
      </ul>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  header .top-header {
    display: flex;
  justify-content: space-between;
    background-color: white;
    padding: 1rem;
  }

  header .navbar {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.active {
  font-weight: bold;
  border-bottom: 1px solid black;
}

.task-text{
  font-size: large;
  margin-bottom: 15px;
}

.header-logo {
  align-items: center;
  display: flex;
  gap: 5px;
}

.header-logo-image {
  width: 35px; 
  height: 45px;
  margin-bottom: 10px; 
}
 
.name {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: black;
}

.user-card {
  align-items: center;
  display: flex;
  gap: 5px;
}

.user-image {
  width: 50px; 
  height: 50px;
  border-radius: 50%; 
  margin-bottom: 10px;
  cursor: pointer; 
}

.delete-task{
  font-size: 50px;
  cursor: pointer;
}
  </style>
  