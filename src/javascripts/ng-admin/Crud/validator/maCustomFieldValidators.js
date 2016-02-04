export default function maCustomFieldValidators() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, ele, attrs, ctrl){
            ctrl.$parsers.unshift(function(value) {
                if (!scope.v.custom) {
                    return value;
                }
              
                for (var key in scope.v.custom) {
                    if (!scope.v.custom.hasOwnProperty(key)) continue;

                    var validator = scope.v.custom[key];
                    var response = validator(value, scope.$parent.form); 
                    ctrl.$setValidity(key, response);
                }

                return value;
            });
        }
    }
};
