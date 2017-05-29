const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const JSONUtil = require('../utils/JSONUtil');
const config = require('../config')

router.get('/hot', function (req, res, next) {
    let items = [];
    superagent.get(config.reqAddress.segmentfaults)
        .end((err, sres) => {
            if (err) {
                return next(JSONUtil.resObject(JSONUtil.code.error, '获取segmentfault头条失败，请稍后再试'));
            }
            const $ = cheerio.load(sres.text);
            $('.news__item').each((index, item) => {
                let $link = $('h4>a', item);
                items.push({
                    key: index + 1,
                    title: $link.text(),
                    href: `${config.perfix.segmentfaults}${$link.attr('href')}`,
                    author: $('span .mr10', item).text(),
                    from: $('.ml10', item).text(),
                    upNum: $('.news__item-zan-number', item).text(),
                    comNum: $('.news__item-comment-box', item).text()
                });
            });
            res.send(JSONUtil.resObject(JSONUtil.code.success, '', {news: items}));
        });
});

module.exports = router;
