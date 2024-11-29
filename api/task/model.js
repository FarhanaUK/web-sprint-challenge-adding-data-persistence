// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('tasks')
    .join('projects as p', 'tasks.project_id', '=', 'p.project_id')
    .select('tasks.task_id', 
      'tasks.task_description', 
      'tasks.task_notes', 
      'tasks.task_completed', 
      'p.project_name', 
      'p.project_description');
    return rows.map(row => ({
        ...row,
        task_completed: !!row.task_completed 
    }));
  };
  
  const create = async(tasks) => {
    const [task_id] = await db('tasks').insert(tasks); 
    const newP = await db('tasks').where('task_id', task_id).first();
    return {
      ...newP,
      task_completed: !!newP.task_completed, 
    };
  }
  

module.exports= { getAll, create }