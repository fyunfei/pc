;(function(window, factory) {
  factory(window);
}(this, function(window) {
	// 动态创建命名空间
	App.namespace = function(name) {
	  let parts = name.split('.');
		let current = App;
		for (let i in parts) {
			if (!current[parts[i]]) { current[parts[i]] = {}; }
			current = current[parts[i]];
		}
	};

	App.namespace('configMap');
}));
