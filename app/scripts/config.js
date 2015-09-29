/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/patients");

    $stateProvider

        .state('patients', {
            url: "/patients",
            templateUrl: "views/patients/content.html"
        })
        .state('patient_card', {
            url: "/patients/patient_1",
            templateUrl: "views/patients/patient_card.html"
        })
        .state('notifications', {
            url: "/notifications",
            templateUrl: "views/notifications/content.html"
        })
        .state('call_list', {
            url: "/call_list",
            templateUrl: "views/call_list/content.html"
        })
        .state('calendar', {
            url: "/calendar",
            templateUrl: "views/calendar/content.html"
        })
        .state('work_list', {
            abstract: true,
            url: "/work_list",
            templateUrl: "views/common/content.html"
        })
        .state('work_list.asthma', {
            url: "/work_list/1",
            templateUrl: "views/work_list/asthma.html"
        })
        .state('work_list.copd', {
            url: "/work_list/2",
            templateUrl: "views/work_list/copd.html"
        })
        .state('work_list.cvrm', {
            url: "/work_list/3",
            templateUrl: "views/work_list/cvrm.html"
        })
        .state('work_list.diabetes', {
            url: "/work_list/4",
            templateUrl: "views/work_list/diabetes.html"
        })
        .state('work_list.monitor', {
            url: "/work_list/5",
            templateUrl: "views/work_list/monitor.html"
        })
        .state('reports', {
            url: "/reports",
            templateUrl: "views/reports/content.html"
        })
        .state('clinic_settings', {
            url: "/clinic_settings",
            templateUrl: "views/clinic_settings/content.html"
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
