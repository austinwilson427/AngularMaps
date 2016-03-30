var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.center = { latitude: 37.09024, longitude: -100.712891 };
                this.zoom = 4;
                this.markers = [
                    {
                        id: 0,
                        options: {
                            title: 'Seattle Coder Camps',
                        },
                        icon: 'ngApp/coder-camps-logo.png',
                        latitude: 47.671853,
                        longitude: -122.121328
                    },
                    {
                        id: 1,
                        options: {
                            title: 'Houston Coder Camps',
                        },
                        latitude: 29.552561,
                        longitude: -95.395219
                    },
                    {
                        id: 3,
                        options: {
                            title: 'San Francisco Coder Camps',
                        },
                        latitude: 37.809499,
                        longitude: -122.253665
                    }
                ];
            }
            return HomeController;
        })();
        angular.module('MyApp').controller('HomeController', HomeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map