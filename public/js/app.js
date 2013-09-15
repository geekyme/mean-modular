'use strict';

// Declare app level module which depends on filters, and services
window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'mean.site', 'mean.auth', 'mean.articles']);

// bundling dependencies
window.angular.module('mean.site', ['mean.site.home_ctrl', 'mean.site.header_ctrl']);
window.angular.module('mean.auth', []);
window.angular.module('mean.articles', []);

