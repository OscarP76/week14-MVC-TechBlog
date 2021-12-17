const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
  // create new project use REQ.body!!
});

router.delete('/:id', async (req, res) => {
  // Delete project by id!
});

module.exports = router;
