angular.scenario.dsl('inputByName', function() {
  var chain = {};

  chain.enter = function(value, event) {
	return this.addFutureAction("input '" + this.name + "' enter '" + value + "'",
	  function($window, $document, done) {
		var input = $document.elements('[name="$1"]', this.name).filter(':input');
		input.val(value);
		input.trigger('input');
		done();
	});
  };

  return function(name) {
	this.name = name;
	return chain;
  };
});