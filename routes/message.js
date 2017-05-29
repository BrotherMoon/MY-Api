const express = require('express');
const router = express.Router();
const JSONUtil = require('../utils/JSONUtil');
const config = require('../config');
const uuidV1 = require('uuid/v1');
const model = require('../models');
const moment = require('moment');
/*留言接口*/
router.post('/', function (req, res, next) {
    const {name, content, from} = req.body;
    model.message.create({
        id: uuidV1(),
        name,
        content,
        from,
        create_time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).then(result => {
        res.send(JSONUtil.resObject(JSONUtil.code.success, '', result));
    }).catch(err => next(err));
});

module.exports = router;