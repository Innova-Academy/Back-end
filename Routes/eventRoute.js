const router = require('express').Router();
const event = require('../controller/eventController')

router.post('/addEvent',event.addEvent);
router.delete('/deleteEvent/:id',event.deleteEvent)
router.get('/getOne/:id',event.getOne)
router.put('/update/:id',event.updateEvent)


module.exports = router;



