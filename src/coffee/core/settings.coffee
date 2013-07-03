###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

class Settings

  instance = null

  @current: ->
    instance ?= new Settings()

  constructor: () ->
    @localStorageAvailable = typeof window.localStorage isnt 'undefined'
    @storage = window.localStorage
    window.localCache = {};

  set: (key, value) ->
    @storage.setItem "settings.#{key}", value if @localStorageAvailable

  unset: (key) ->
    @storage.removeItem "settings.#{key}" if @localStorageAvailable

  get: (key) ->
    @storage.getItem "settings.#{key}" if @localStorageAvailable