const { Router } = require('express');
const router = Router();

const { getDocuments, createDocument, getDocumentById, deleteDocument, updateUser } = require('../controllers/index.controller')

router.get('/documents', getDocuments);
router.get('/documents/:id', getDocumentById);
router.post('/documents', createDocument);
router.delete('/documents/:id', deleteDocument);
router.put('/documents/:id', updateUser);

module.exports = router;