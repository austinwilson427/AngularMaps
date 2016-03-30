namespace MyApp {

    angular.module('MyApp', ['uiGmapgoogle-maps']).config((uiGmapGoogleMapApiProvider: any) => {
        uiGmapGoogleMapApiProvider.configure({

        });
    });

}

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = arrayNumbers.indexOf(8);
console.log(answer);