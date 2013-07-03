###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

class window.LayoutView extends Backbone.View

  render: ->
    @$el.html do window.Tpl['layout/container']
    @