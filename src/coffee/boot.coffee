$(document).ready () ->
  window.router = new AppRouter
  
  do window.router.checkAuth
  do Backbone.history.start