//const { Pool } = require('pg');

/*const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: "javier",
    database: 'firstapi',
    port: '5432'
})*/

var pg = require('pg');

pool = new pg.Client("postgres://liobrhuq:0BGhap10ljsQD8E9elUoto9c8vsofERE@jelani.db.elephantsql.com/liobrhuq");
pool.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    pool.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
    });
  
  });

const getDocuments = async (req, res) => {
    const response = await pool.query('SELECT * FROM documents');
    res.status(200).json(response.rows);
}

const createDocument = async (req, res) => {
    const { name, description } = req.body;

    const response = await pool.query('INSERT INTO documents (name, description) VALUES ($1, $2)', [name, description])
    console.log(response);
    res.json({
        message: 'Document Added Successfully',
        body: {
            document: {name, description}
        }
    });

}

const getDocumentById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM documents WHERE id = $1', [id]);
    res.json(response.rows);
};

const deleteDocument = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM documents WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);

};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    const response = await pool.query('UPDATE documents SET name = $1, description =$2 WHERE id = $3', [name, description, id])
    console.log(response);
    res.json({
        message: 'Document Updated Successfully',
        body: {
            document: {name, description}
        }
    });
};

module.exports = {
    getDocuments,
    createDocument,
    getDocumentById,
    deleteDocument,
    updateUser
}