const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const JSONUtil = require('../utils/JSONUtil');
const perfix = 'https://segmentfault.com';
const config = require('../config');

router.get('/hot', function (req, res, next) {
    let items = [];
    superagent
        .get(config.reqAddress.csdn)
        .end((err, sres) => {
            if (err) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取csdn热门内容失败，请稍后再试'));
            }
            const $ = cheerio.load(sres.text);
            $('.hot_blog li').each((index, item) => {
                let $link = $('a', item);
                items.push({
                    key: index + 1,
                    title: $link.text().trim(),
                    href: $link.attr('href')
                })
            })
            res.send(JSONUtil.resObject(JSONUtil.code.success, '', {news: items}));
        });
});
module.exports = router;