###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

class window.HomeView extends Backbone.View

  tagName: "div"

  initialize: ->
    # Do something useful here

  render: ->
    @$el.html window.Tpl['home'] {
      foo: 'It works!'
    }
    @