console.log("Script Loaded");

//$HTTP module, that gets pulled in to fulfill the role of AJAX
//$SCOPE, The scope of the application

//NG-model = 'name'
//var $SCOPE.name =... set to whatever the input field says.
//Anytime you reference a variable, you reference $SCOPE.variable.
//
//    var myApp = angular.module('myApp', []);                            //pre-Angular js that we have to write
                                                                        //Standard convention is to have var name = angular.model('name').
                                                                        //aka, the [] - says go grab the dependencies that I require.


//var myApp = angular.module('myApp', []);

//myApp.controller('GreetingController', ['$scope', function($scope) {
//    $scope.greeting = 'Hola!';
//}]);
//
//    myApp.controller('Welcome', ["$scope", function($scope){
//        $scope.heading = "Message: ";
//        $scope.count = '5';
//
//        $scope.updateMessage = function(){                              //Making up a function that we are tying to the scope called "update message".
//            $scope.message = "Hello, " + $scope.name + "!";
//            $scope.count += 1;
//            console.log($scope.count);
//        };
//
//        $scope.goodByeMessage = function(){                              //Making up a function that we are tying to the scope called "update message".
//            $scope.message = "Goodbye, " + $scope.name + ", See you soon!";
//        };
//                                                                        //Here's us declaring a variable
//    }]);                                                                   // Here, we are defining the controller for our app
////                                                               PASS in the $scope, you will not find this in alot of textbooks.


//     Trying to Animate Balls
//
//        var myApp = angular.module('myApp', []);
//
//    myApp.controller('BallAnimate', ["$scope", function($scope){
//         $scope.heading = "Crazy Fun Colored Objects";
//
//         $scope.start = function(){
//             $scope.this().toggles = [{ state: true }, { state: false }, { state: true }];
//         };
//
//         //$scope.stop = function(){
//         //
//         //};
//
//    }]);

    ////Will Now Try to Make a Navigation Menu
     var myApp = angular.module('myApp', []);

     myApp.controller('FriendsList', ["$scope", function($scope){
         $scope.heading = "Friends and Family";
         $scope.hi = console.log('hi');
         $scope.thisID ='';

         $scope.clickHere = function() {
             $scope.thisID = 'thing';
             console.log($scope.thisID);

             var getEl = document.getElementById(5);
                console.log(getEl);
         };

    //
    //     //};
    //     $scope.count = 5;
    //     $scope.log = console.log($scope.count);
    ////
    //    $scope.buttonSo = function(){
    //         $scope.message = $scope.count + 1;
    //    };

     }]);