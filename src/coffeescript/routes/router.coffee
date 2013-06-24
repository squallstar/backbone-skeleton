###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

window.AppRouter = Backbone.Router.extend(
  
  routes:
    '': 'home'

  initialize: ->
    do @reloadHeader
    $('body').append new LayoutView().render()

  reloadHeader: ->
    html = new HeaderView().render()
    header = $('header')

    if header.length
      header.replaceWith html
    else
      $('body').append html

  # Authentication check  
  checkAuth: ->
    location = window.location.hash.replace '#', ''

    redirect_to = false
    redirect_to = 'login' if location != 'login' && false # Adjust it to fit your needs

    window.location.hash = redirect_to if redirect_to
    return redirect_to != false


  # Place all your route constructors here below

  home: ->
    $('#container').html new HomeView().render().el

)