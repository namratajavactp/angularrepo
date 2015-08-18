var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
                 $scope.doctors = {
                    'Doctor1': {
                        'Doctor1_Patient1': ['Doctor1_Patient1_Addr_1', 'Doctor1_Patient1_Addr_2', 'Doctor1_Patient1_Addr_3', 'Doctor1_Patient1_Addr_4'],
                        'Doctor1_Patient2': ['Doctor1_Patient2_Addr_1', 'Doctor1_Patient2_Addr_2', 'Doctor1_Patient2_Addr_3'],
                        'Doctor1_Patient3': ['Doctor1_Patient3_Addr_1', 'Doctor1_Patient3_Addr_2', 'Doctor1_Patient3_Addr_3']
                    },
                    'Doctor2': {
                        'Doctor2_Patient1': ['Doctor2_Patient1_Addr_1', 'Doctor2_Patient1_Addr_2'],
                        'Doctor2_Patient2': ['Doctor2_Patient2_Addr_1', 'Doctor2_Patient2_Addr_2'],
                        'Doctor2_Patient3': ['Doctor2_Patient3_Addr_1', 'Doctor2_Patient3_Addr_2']
                    },
                    'Doctor3': {
                        'Doctor3_Patient1': ['Doctor3_Patient1_Addr_1'],
                        'Doctor3_Patient2': ['Doctor3_Patient2_Addr_1']
                    }
                };
});
