###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

$(document).ready () ->
  window.router = new AppRouter
  
  do window.router.checkAuth
  do Backbone.history.start