const { Router } = require('express');
const router = Router();
// router.use()

router.get('/:name/:age', (req, res, next) => {

    res.status(200).json({
        message: `Hello ${req.params.name}, you are ${req.params.age} years old`
    })
})
module.exports = router;
