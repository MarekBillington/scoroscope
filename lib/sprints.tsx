/**
 * 	Gets the data included 
 * 
 * 	@return data {}
 */
export function getSprintById(id) {
	const data = require(`../sprints/${id}.json`);

	return data;
}