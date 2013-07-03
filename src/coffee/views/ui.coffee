class window.UIView extends Backbone.View

  tagName: 'div'

  initialize: ->

  render: ->
    do @renderHeader
    do @update

    @$el.html @header
    @

  # This method can be called from the views and the router
  # to refresh the UI once the user is logged in/out:
  #
  # do window.ui.reload
  #
  reload: ->
    do @render

  renderHeader: ->
    @header = $ window.Tpl['layout/header'] {
      foo: 'bar'
    }

  # This can be called by the routes to update active elements
  update: ->