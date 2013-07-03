###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

window.AppRouter = Backbone.Router.extend(
  
  routes:
    '': 'home'

  initialize: ->
    window.ui = new UIView().render()
    $('body').append window.ui.el
    $('body').append new LayoutView().render().el

  # Authentication check
  checkAuth: ->
    location = window.location.hash.replace '#', ''
    
    redirect_to = false

     # Adjust this to fit your needs
    redirect_to = 'login' if location != 'login' && false

    window.location.hash = redirect_to if redirect_to
    return redirect_to != false


  # Place all your route constructors here below

  home: ->
    $('#container').html new HomeView().render().el
)