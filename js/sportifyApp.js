angular.module("sportPicker", []).controller("listCtrl", function($scope) {
    $scope.sports = [
		{sport:"Swimming", pic:"images/swimming.png"},
		{sport:"Football", pic:"images/football.png"},
		{sport:"Gymnastics", pic:"images/gymnastics.png"},
		{sport:"Netball", pic:"images/netball.png"},
		{sport:"Volleyball", pic:"images/volleyball.png"},
		{sport:"Running", pic:"images/running.png"}
	];
});