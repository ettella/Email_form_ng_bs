var App = angular.module('app', []);

App.controller('C1', function($scope)
	{

		$scope.emailek = [
			{ added:false, felado:"Citadella", targy:"üdvözlet", datum:'2022. 03. 01.', level:".A Citadella nagyon szép látványosság, népszerű a magyarok és a külföldiek körében is."},
			{ added:false, felado:"Budapest", targy:"számla", datum:'2022. 02. 01.'},
			{ added:false, felado:"Duna", targy:"hétvégi program", datum:'2022. 03. 15.' },
			{ added:false, felado:"Tisza", targy:"evezés", datum:'2022. 06. 10.' }
		];

		$scope.sent = [];
		$scope.ujlevelek = [];


		$scope.uj_level_add = function()
		{	
			$scope.ujlevelek.push(
				{
					cimzett:'', 
					targy: '',
					level: ''

				});
		
		}

		$scope.add = function(c, t, l)
		{
			$scope.sent.push({cimzett:c, targy:t, level:l});
			$scope.emils.push({cimzett:c, targy:t, level:l})

		}



		$scope.cimzettek = [" Kiss Robert robertkiss@gmail.com", " Nagy Péter peternagy55@hotmail.com", " Kovács Eszter eszterkovi@citromail.hu", " Gulyás Anna annaguly@gmx.de"];

		$scope.cimzett = '';



	}
);

App.controller('C2', function($scope)
{
	
	$scope.emailek = " ^ Katt a plusz gombra új email írásához! ^";
}
)
