var myWebsite = angular.module('myWebsite', ["firebase"]);

myWebsite.controller('firebaseCtrl', ['$scope', '$firebase', function($scope, $firebase){
	var coursesData = new Firebase("https://rajdeepgill.firebaseio.com/courses");
	var socialMediaData = new Firebase("https://rajdeepgill.firebaseio.com/socialMedia");
	var contactRequestsData = new Firebase("https://rajdeepgill.firebaseio.com/contactRequests");
	var schoolActivities = new Firebase("https://rajdeepgill.firebaseio.com/activities");
	var experiences = new Firebase("https://rajdeepgill.firebaseio.com/workExperiences");
	var allSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills");
	var skSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills/specificKnowledge");
	var icSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills/informationCommunication");
	var tpoSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills/thinkingPlanningOrganizational");
	var tmSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills/teamworkManagement");
	var gSkills = new Firebase("https://rajdeepgill.firebaseio.com/skills/general");
	var aboutMe = new Firebase("https://rajdeepgill.firebaseio.com/aboutMe");
	$scope.courses = $firebase(coursesData);
	$scope.socialSites = $firebase(socialMediaData);
	$scope.contactRequests = $firebase(contactRequestsData);
	$scope.activities = $firebase(schoolActivities);
	$scope.workExperiences = $firebase(experiences);
	$scope.skills = $firebase(allSkills);
	$scope.skSkills = $firebase(skSkills);
	$scope.icSkills = $firebase(icSkills);
	$scope.tpoSkills = $firebase(tpoSkills);
	$scope.tmSkills = $firebase(tmSkills);
	$scope.gSkills = $firebase(gSkills);
	$scope.me = $firebase(aboutMe);

	$scope.addSubmition = function() {
		$scope.contactRequests.$add({
			name: $scope.name,
			email: $scope.email,
			phonenumber: $scope.phonenumber,
			message: $scope.message
		});
	}
}]);