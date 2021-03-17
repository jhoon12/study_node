const router = require('express').Router();
const board = require('./board')

router.get('/', ()=>{console.log('영감')})
router.get('/board', board)

module.exports = router ;

  