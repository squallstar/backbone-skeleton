###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

window.LayoutView = Backbone.View.extend

  render: ->
    do window.Tpl['layout/container']