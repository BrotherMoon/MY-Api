const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const JSONUtil = require('../utils/JSONUtil');
const config = require('../config');

router.get('/hot', function (req, res, next) {
    let items = [];
    superagent
        .get(config.reqAddress.zhihu)
        .end((err, sres) => {
            if (err) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取天天美剧本周最热失败，请稍后再试'));
            }
            const $ = cheerio.load(sres.text);
            $('.explore-feed').each((index, item) => {
                let $link = $('h2 a', item);
                items.push({
                    key: index + 1,
                    title: $link.text().trim(),
                    href: `${config.perfix.zhihu}${$link.attr('href')}`
                })
            })
            res.send(JSONUtil.resObject(JSONUtil.code.success, '', {news: items}));
        });

});
module.exports = router;