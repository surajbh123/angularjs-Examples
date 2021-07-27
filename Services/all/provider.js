
app.provider('myProvider', function ($http, $q) {
  var baseUrl = 'https://itunes.apple.com/search?term=';
  var _artist = '';
  var _finalUrl = '';

  // Going to set this property on the config fn below
  this.thingFromConfig = '';

  var makeUrl = function () {
    _artist = _artist.split(' ').join('+');
    _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
    return _finalUrl;
  }
});

this.$get = function ($http, $q) {
  return {
    callItunes: function () {
      makeUrl()
      var deferred = $q.defer();
      $http({
        method: 'JSONP',
        url: _finalUrl
      }).success(function (data) {
        deferred.resolve(data);
      }).error(function () {
        deferred.reject('There was an error');
      })

      return deferred.promise;
    },
    setArtist: function (artist) {
      _artist = artist;
    },
    getArtist = function () {
      return _artist;
    },
    thingonConfig: this.thingFomConfig
  }
}


app.provider('myProvider', function ($http, $q) {
  var baseUrl = 'https://itunes.apple.com/search?term=';
  var _artist = '';
  var _finalUrl = '';

  // Going to set this property on the config fn below
  this.thingFromConfig = '';

  var makeUrl = function () {
    _artist = _artist.split(' ').join('+');
    _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
    return _finalUrl;
  }

  this.$get = function ($http, $q) {
    return {
      callItunes: function () {
        makeUrl()
        var deferred = $q.defer();
        $http({
          method: 'JSONP',
          url: _finalUrl
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject('There was an error');
        })

        return deferred.promise;
      },
      setArtist: function (artist) {
        _artist = artist;
      },
      getArtist = function () {
        return _artist;
      },
      thingonConfig: this.thingFomConfig
    }
  }
});

app.controller('myProviderCtrl', function ($scope, myProvider) {
  $scope.data = {};
  $scope.updateArtist = function () {
    myProvider.setArtist($scope.data.artist);
  }

  $scope.submitArtist = function () {
    myProvider.callItunes()
      .then(function (data) {
        $scope.data.artistData = data;
      }, function (data) {
        alert(data);
      })
  }

  $scope.data.thingFromConfig = myProvider.thingOnConfig;
});

app.config(function (myProviderProvider) {
  // Note that NG appends 'Provider' to the end of the provider name.
  myProviderProvider.thingFromConfig = 'This sentence was set in app.config. Providers are the only service that can be passed into config. Check out the code to see how it works.';
})
