BuildWidget.prototype.buildCheckboxes = function (target) {
	var self = this;

	/* Create checkboxes for each site */
	d3.select(target)
		.append("ul")
		.attr("id","select")
		.selectAll('li')
	  .data(self.data.state)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var checked = 'checked';
			
			var safeName = d.toLowerCase().split(' ').join("_");

			var innerHTML = "<input type='checkbox' id='" + safeName + "' name='select' " + checked + "><label for='" + safeName + "'> " + d + "</label>";

			return innerHTML;
		});
};
