const db = require('../../data/dbConfig')

const getAll = async () => {
  const rows = await db('projects').select('project_id', 'project_name', 'project_description', 'project_completed');
  return rows.map(row => ({
      ...row,
      project_completed: !!row.project_completed 
  }));
};

const create = async(projects) => {
  const [project_id] = await db('projects').insert(projects); 
  const newP = await db('projects').where('project_id', project_id).first();
  return {
    ...newP,
    project_completed: !!newP.project_completed, 
  };
}

module.exports= { getAll, create }