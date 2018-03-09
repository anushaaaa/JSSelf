/**
 * Created by avemuri on 1/28/2016.
 */
angular.module('confusionApp');
app.controller('menuController',['$scope','menuFactory', function($scope, menuFactory){
    $scope.tab = 1;
    $scope.filterText='';
    $scope.showDetails = false;
    $scope.dishes = menuFactory.getDishes();
    $scope.select = function(setTab){
        $scope.tab = setTab;
        if(setTab == 2){
            $scope.filterText = 'appetizer';
        }else if(setTab == 3){
            $scope.filterText = 'mains';
        }else if(setTab == 4){
            $scope.filterText = 'dessert';
        }else{
            $scope.filterText = '';
        }
    };
    $scope.isSelected = function(checkTab){
        return ($scope.tab === checkTab );
    };
    $scope.toggleDetails = function(){
        $scope.showDetails = !$scope.showDetails;
    }
}]);
app.controller('dishDetailController',['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams,menuFactory){
    $scope.dish=menuFactory.getDish(parseInt($stateParams.id ,10));  // to get parameter id from route
    $scope.custComment={author:'', rating:5, comment:'', date:''};
}]);
app.controller('ContactController',['$scope', function($scope){
    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
        agree:false, email:"" };
    var channels=[{value:"tel", label:"Tel."},
        {value:"Email", label:"Email"}];
    $scope.invalidChannelSelection = false;
    $scope.channels=channels;
}]);
//in contactus.html , feedbackController is nested inside ContactController
// so FeedbackController has access to elements in ContactController
app.controller('FeedbackController',['$scope', function($scope){
    $scope.sendFeedback = function(){
        console.log($scope.feedback);
        if($scope.feedback.agree && $scope.feedback.mychannel == ""){
            $scope.invalidChannelSelection=true;
            console.log($scope.feedback);
        }else{
            $scope.invalidChannelSelection = false;
            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                agree:false, email:"" };
            $scope.feedback.mychannel='';
            $scope.feedbackForm.$setPristine(); // this sets feedbackForm to pristine, i.e feedback form is completely cleared out.
         //this doesn't clear the form. just sets the state of form to clear. you have to manually clear form. as done above.
            console.log($scope.feedback);
        }
    };
}]);
app.controller('DishCommentController',['$scope', function($scope){
    //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.submitComment = function () {
        $scope.custComment.date=new Date().toISOString();
        $scope.custComment.rating= parseInt($scope.custComment.rating);
        //Step 2: This is how you record the date
       // "The date property of your JavaScript object holding the comment" = new Date().toISOString();

        // Step 3: Push your comment into the dish's comment array
        $scope.dish.comments.push($scope.custComment);
console.log($scope.custComment);
        $scope.commentForm.$setPristine();
        $scope.custComment={author:'', rating:5, comment:'', date:''};

        //Step 4: reset your form to pristine

        //Step 5: reset your JavaScript object that holds your comment
    }
}]);

app.controller('AboutController',['$scope', 'corporateFactory', function($scope, corporateFactory){
    $scope.leadersList=corporateFactory.getLeaders();
}]);
app.controller('IndexController',['$scope', 'corporateFactory', 'menuService', function($scope, corporateFactory, menuService){
    $scope.promotions=menuService.getPromotions();
    $scope.featuredDish = menuService.getDish(0);
    $scope.leaderHome=corporateFactory.getLeader(0);

}]);
