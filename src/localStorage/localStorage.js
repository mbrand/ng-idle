angular.module('ngIdle.localStorage', ['LocalStorageModule'])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ngIdle')
  }])
  .service('IdleLocalStorage', ['localStorageService', function(localStorageService) {
    var storage = localStorageService;
    
    return {
      set: function(key, value) {
        storage.set(key, value);
      },
      get: function(key) {
        return angular.fromJson(storage.get(key));
      },
      remove: function(key) {
        storage.remove(key);
      }
    };
  }]);
