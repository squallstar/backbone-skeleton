###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

# This mimics "if x == y"
Handlebars.registerHelper "is", (x, y, options) ->
  return options.fn(this) if x is y
  options.inverse this