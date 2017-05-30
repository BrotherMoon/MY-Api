module.exports = {
    reqHeader: {
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Accept-Encoding': "gzip, deflate, sdch",
        'Accept-Language': "zh-CN,zh;q=0.8",
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36",
        'Connection': "keep-alive"
    },
    reqAddress: {
        segmentfaults: 'https://segmentfault.com/news',
        zhihu: 'https://www.zhihu.com/explore#daily-hot',
        ttmeiju: 'http://www.ttmeiju.com/',
        douban: 'https://movie.douban.com/',
        csdn: 'http://www.csdn.net/',
        oneIdList: 'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
        todayOne: (id) => `http://v3.wufazhuce.com:8000/api/onelist/${id}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
    },
    perfix: {
        segmentfaults: 'https://segmentfault.com',
        zhihu: 'https://www.zhihu.com',
        ttmeiju: 'http://www.ttmeiju.com/'
    }
}