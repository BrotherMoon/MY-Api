const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const JSONUtil = require('../utils/JSONUtil');
const config = require('../config');

/*获取one中的idlist*/
router.get('/idlist', function (req, res, next) {
    superagent
        .get(config.reqAddress.oneIdList)
        .end((err, sres) => {
            if (err || !sres.ok) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取one idlist失败，请稍后再试'));
            }
            res.send(JSON.stringify(sres.body));
        });
});

/*根据idlist获取one内容*/
router.get('/today/:id', function (req, res, next) {
    const id = req.params.id;
    superagent
        .get(config.reqAddress.todayOne(id))
        .end((err, sres) => {
            if (err || !sres.ok) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取one today失败，请稍后再试'));
            }
            res.send(JSON.stringify(sres.body));
        });
});

module.exports = router;