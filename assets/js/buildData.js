function buildData (data) {

	var institutionTypesArray = [];
	var statesArray = [];
		
	for (var i = 0; i < data.length; i++) {
		institutionTypesArray.push(data[i].institution_type);
		statesArray.push(data[i].state);

		data[i].FY12 = data[i].FY12.length > 0 ? parseFloat(data[i].FY12) : 0;
		data[i].FY12 = isNaN(data[i].FY12) ? 0 : data[i].FY12;
		
		data[i].FY13 = data[i].FY13.length > 0 ? parseFloat(data[i].FY13) : 0;
		data[i].FY13 = isNaN(data[i].FY13) ? 0 : data[i].FY13;
		
		data[i].calculated_indirect_cost = parseFloat(data[i].calculated_indirect_cost);

		data[i].direct_cost = parseInt(data[i].direct_cost, 10);
		data[i].indirect_cost = parseInt(data[i].indirect_cost, 10);
		data[i].funding = parseInt(data[i].funding, 10);
	}

	var institutionTyesSet = d3.set(institutionTypesArray).values();

	var statesSet = d3.set(statesArray).values();

	return {
		data: data,
		type: institutionTyesSet,
		state: statesSet
	};
}