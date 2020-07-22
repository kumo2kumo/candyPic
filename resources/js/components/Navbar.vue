<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
    candyPic
    </RouterLink>
    <div class="navbar__manu">
          <!-- ログインしていたら -->
      <div class="navbar__item">
        <button class="button">
          <i class="icon icon-md-add"></i>
          submit a photo
        </button>
      </div>
      <span class="navbar__item">
        username
      </span>
      <!-- ログインしていなかったら -->
      <div class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          Login/Register
        </RouterLink>
      </div>
    </div>
  </nav>
</template>