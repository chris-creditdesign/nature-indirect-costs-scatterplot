function buildData (data) {
		
	for (var i = 0; i < data.length; i++) {
		data[i].FY12 = data[i].FY12.length > 0 ? parseFloat(data[i].FY12) : 0;
		data[i].FY12 = isNaN(data[i].FY12) ? 0 : data[i].FY12;
		
		data[i].FY13 = data[i].FY13.length > 0 ? parseFloat(data[i].FY13) : 0;
		data[i].FY13 = isNaN(data[i].FY13) ? 0 : data[i].FY13;
		
		data[i].calculated_indirect_cost = parseFloat(data[i].calculated_indirect_cost);

		data[i].direct_cost = parseInt(data[i].direct_cost, 10);
		data[i].indirect_cost = parseInt(data[i].indirect_cost, 10);
		data[i].funding = parseInt(data[i].funding, 10);
	}


	return data;
}