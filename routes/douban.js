const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const JSONUtil = require('../utils/JSONUtil');
const config = require('../config');

router.get('/hot', function (req, res, next) {
    let items = [];
    superagent
        .get(config.reqAddress.douban)
        .end((err, sres) => {
            if (err) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取豆瓣热门电影失败，请稍后再试'));
            }
            const $ = cheerio.load(sres.text);
            $('td.title').each((index, item) => {
                let $link = $('a', item);
                items.push({
                    key: index + 1,
                    title: $link.text(),
                    href: $link.attr('href')
                })
            })
            res.send(JSONUtil.resObject(JSONUtil.code.success, '', {news: items}));
        });
});
module.exports = router;