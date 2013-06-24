###
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
###

class Storage

  instance = null

  @namespace = 'settings'

  @current: ->
    instance ?= new Storage()

  constructor: () ->
    @localStorageAvailable = typeof window.localStorage isnt 'undefined'
    @storage = window.localStorage
    window.localCache = {};

  set: (key, value) ->
    @storage.setItem "#{@namespace}.#{key}", value if @localStorageAvailable

  unset: (key) ->
    @storage.removeItem "#{@namespace}.#{key}" if @localStorageAvailable

  get: (key) ->
    @storage.getItem "#{@namespace}.#{key}" if @localStorageAvailable

  @cache: (key, val) ->
    return unless key?
    return window.localCache[key] unless val?
    window.localCache[key] = val;