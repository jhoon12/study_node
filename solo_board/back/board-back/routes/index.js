const router = require('express')();
const board = require('./board')

router.get('/', ()=>{console.log('영감')})
router.get('/board', board)



  