class window.LayoutView extends Backbone.View

  render: ->
    @$el.html do window.Tpl['layout/container']
    @