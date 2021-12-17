const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
 // do create new user code!! Grab from a previous activity!
});

router.post('/login', async (req, res) => {
  // do login user code here!! grab from activity!!
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
