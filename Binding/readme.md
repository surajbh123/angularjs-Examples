# one way databinding
- scope / controllers --> view
- ng-bind and evaluation Expression

# two ways databinding
- scope / controllers --> <-- view
- ng-model

# one time databinding
- scope / controllers -->  | 1 time |   view
- :: in evaluation expression

``` JavaScript
// update in br
angular.element($0).scope().a=100;
100
angular.element($0).scope().$digest()

```