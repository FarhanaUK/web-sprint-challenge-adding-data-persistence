// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    return await db('resources').select('resource_id', 'resource_name', 'resource_description');
}
  
  const create = async(resources) => {
    const [resource_id] = await db('resources').insert(resources); 
    return await db('resources').where('resource_id', resource_id).first();
    
  }
  

module.exports= { getAll, create }