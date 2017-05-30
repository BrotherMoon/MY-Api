module.exports = (app) => {
    //设置跨域访问
    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    app.use('/api/segmentfault', require('./segmentfault'));
    app.use('/api/zhihu', require('./zhihu'));
    app.use('/api/ttmeiju', require('./ttmeiju'));
    app.use('/api/douban', require('./douban'));
    app.use('/api/csdn', require('./csdn'));
    app.use('/api/message', require('./message'));
    app.use('/api/one', require('./one'))
};