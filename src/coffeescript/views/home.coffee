###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

class window.HomeView extends Backbone.View

  tagName: "div"

  initialize: ->
 
  render: ->
    @$el.html window.Tpl['home'] {
      foo: 'Welcome!'
    }

    @