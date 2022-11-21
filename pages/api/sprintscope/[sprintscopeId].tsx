import { getSprintById } from "../../../lib/sprints";

export default function handler(req, res) {
  const id = req.query.sprintscopeId;
  const data = getSprintById(id);
  
  // have 3 things, title, graph 
  res.status(200).json(data);
}