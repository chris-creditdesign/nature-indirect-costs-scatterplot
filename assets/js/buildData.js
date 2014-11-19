function ifNaNmakeZero (num) {
	if (isNaN(num)) {
		num = 0;
	}
	return num;
}

function buildData (data) {

	var institutionTypesArray = [];
	var statesArray = [];
	var filteredData = [];
	

	for (var i = 0; i < data.length; i++) {

		if (data[i].institution_type === "Higher Ed") {
			data[i].institution_type = "Universities";
		} else if (data[i].institution_type === "Hosp") {
			data[i].institution_type = "Hospitals";
		} else if (data[i].institution_type === "NP res inst") {
			data[i].institution_type = "Non-profits";
		}

		var my_state = data[i].state;

		data[i].stateID = my_state.toLowerCase().split(' ').join("_");

		data[i].floatFY12 = data[i].FY12.length > 0 ? parseFloat(data[i].FY12) : 0;
		data[i].floatFY12 = ifNaNmakeZero(data[i].floatFY12);
		
		data[i].floatFY13 = data[i].FY13.length > 0 ? parseFloat(data[i].FY13) : 0;
		data[i].floatFY13 = ifNaNmakeZero(data[i].floatFY13);
		
		data[i].floatCalculated_indirect_cost = parseFloat(data[i].calculated_indirect_cost);
		data[i].floatCalculated_indirect_cost = ifNaNmakeZero(data[i].floatCalculated_indirect_cost);

		data[i].intDirect_cost = parseInt(data[i].direct_cost, 10);
		data[i].intDirect_cost = ifNaNmakeZero(data[i].intDirect_cost);

		data[i].intIndirect_cost = parseInt(data[i].indirect_cost, 10);
		data[i].intIndirect_cost = ifNaNmakeZero(data[i].intIndirect_cost);
		
		data[i].intFunding = parseInt(data[i].funding, 10);
		data[i].intFunding = ifNaNmakeZero(data[i].intFunding);
	}

	data.forEach(function (element, array, index) {
		if (element.floatFY13 && element.floatCalculated_indirect_cost > 0) {
			filteredData.push(element);
		}
	});

	for (var j = 0; j < filteredData.length; j++) {

		if (statesArray.indexOf(filteredData[j].state) === -1 ) {
			statesArray.push(filteredData[j].state);
		}

		if (institutionTypesArray.indexOf(filteredData[j].institution_type) === -1 ) {
			institutionTypesArray.push(filteredData[j].institution_type);
		}
	}

	statesArray.sort();

	return {
		data: data,
		filteredData: filteredData,
		activeData: [],
		type: institutionTypesArray,
		state: statesArray
	};
}
