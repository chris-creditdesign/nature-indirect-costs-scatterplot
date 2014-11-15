BuildWidget.prototype.buildCheckboxes = function (target) {
	this.data.state.unshift("ALL");

	/* Create checkboxes for each site */
	d3.select(target)
		.append("ul")
		.selectAll('li')
	  .data(this.data.state)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var checked = 'checked';
			
			var safeName = d.toLowerCase().split(' ').join("_");

			var innerHTML = "<label ><input type='checkbox' value='" + safeName + "' " + checked + "> " + d + "</label>";

			return innerHTML;
		});
};
