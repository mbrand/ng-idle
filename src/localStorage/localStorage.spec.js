'use strict';

describe('ngIdle', function() {
  // helpers
  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('ngIdle.localStorage'));

  describe('LocalStorage service', function() {
    beforeEach(function() {
      angular.module('app', function() {});
    });

    var localStorageService, LocalStorage;
    beforeEach(inject(['localStorageService', 'IdleLocalStorage', function(_localStorageService_, _LocalStorage_) {
      localStorageService = _localStorageService_;
      LocalStorage = _LocalStorage_;

      spyOn(localStorageService, 'set').andCallThrough();
    }]));

    it ('set() should set value', function() {
      LocalStorage.set('key', 1);
      expect(localStorageService.set).toHaveBeenCalledWith('key', 1);
    });

    it ('get() should retrieve value as JSON', function() {
      spyOn(localStorageService, 'get').andReturn('{"value": 1}');
      var actual = LocalStorage.get('key');
      expect(actual).toEqualData({value:1});
    });

    it ('remove() should remove key/value', function() {
      spyOn(localStorageService, 'remove');
      LocalStorage.remove('key');
      expect(localStorageService.remove).toHaveBeenCalledWith('key');
    });
  });
});
