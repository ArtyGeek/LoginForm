'use strict';
angular.module('customServices', []).factory('loginForm', function() {
	email: string;
	password: string;
  });

var emailValid = element(by.binding('form.uEmail.$valid'));
var passwordValid = element(by.binding('form.uPassword.$valid'));

var userNameInput = element(by.model('user.email'));
var passwordInput = element(by.model('user.password'));