var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['uiGmapgoogle-maps']).config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({});
    });
})(MyApp || (MyApp = {}));
var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var answer = arrayNumbers.indexOf(8);
console.log(answer);
//# sourceMappingURL=app.js.map