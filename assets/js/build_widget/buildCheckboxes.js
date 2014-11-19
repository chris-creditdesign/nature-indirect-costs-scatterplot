BuildWidget.prototype.buildCheckboxes = function (target, data) {
	

	/* Create checkboxes for each site */
	d3.select(target)
		.append("ul")
		.selectAll('li')
	  .data(data)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var checked = 'checked';
			
			var safeName = d.toLowerCase().split(' ').join("_");

			var innerHTML = "<label ><input type='checkbox' value='" + safeName + "' " + checked + "> " + d + "</label>";

			return innerHTML;
		});
};
