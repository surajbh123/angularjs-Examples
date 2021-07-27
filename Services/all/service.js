

var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    alert('My name is ' + this.name)
}

var tyler = new Person('Tyler', 23);
tyler.sayName() // alerts 'My name is Tyler'

var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    alert('My name is ' + this.name)
}

var tyler = new Person('Tyler', 23);
tyler.sayName() // alerts 'My name is Tyler'

var Person = function (name, age) {
    // The next line creates an object that will
    // delegate to the person's prototype on failed lookups.

    //var obj = Object.create(Person.prototype);

    // The next line sets 'this' to the newly created object
    // this = obj;

    this.name = name;
    this.age = age;

    // return this;
}

app.service('myService', function ($http, $q) {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }
});

app.service('myService', function ($http, $q) {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }

    this.setArtist = function (artist) {
        _artist = artist;
    }

    this.getArtist = function () {
        return _artist;
    }

    this.callItunes = function () {
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
    }

});

app.controller('myService', function ($scope, myService) {
    $scope.data = {};
    $scope.updateArtist = function () {
        myService.setArtist($scope.data.artist);
    }

    $scope.submitArtist = function () {
        myService.callItunes()
            .then(function (data) {
                $scope.data.artistData = data;
            }, function (data) {
                alert(data);
            })
    }
});
