angular.module("sportPicker", []).controller("listCtrl", function($scope) {
    $scope.sports = [
		{sport:"Swimming", pic:"images/swimming.PNG"},
		{sport:"Football", pic:"images/football.PNG"},
		{sport:"Gymnastics", pic:"images/gymnastics.PNG"},
		{sport:"Netball", pic:"images/netball.PNG"},
		{sport:"Volleyball", pic:"images/volleyball.PNG"},
		{sport:"Running", pic:"images/running.PNG"}
	];
});