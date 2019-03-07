// 影片信息
const movies = [
    {
        id: '1652592',
        title: '阿丽塔：战斗天使',
        photo: 'https://coocssweb.github.io/photos/react-ssr/movie-01.jpg',
        score: 7.6,
        meta: '122分钟 / 动作 / 科幻 / 冒险 / 罗伯特·罗德里格兹(导演) / 罗莎·萨拉查 / 克里斯托弗·沃尔兹 / 基恩·约翰逊 / 2019-02-22(中国大陆) 上映',
        desc: '故事发生在遥远的26世纪，外科医生依德（克里斯托弗·瓦尔兹 Christoph Waltz 饰）在垃圾场里捡到了只剩下头部的机械少女将她带回家中，给她装上了本来为自己已故的女儿所准备的义体，并取名阿丽塔（罗莎·萨拉扎尔 Rosa Salazar 饰）。',
    },
    {
        id: '30163509',
        title: '飞驰人生',
        photo: 'https://coocssweb.github.io/photos/react-ssr/movie-02.jpg',
        score: 7.0,
        meta: '98分钟 / 喜剧 / 韩寒(导演) / 沈腾 / 黄景瑜 / 尹正 / 2019-02-05(中国大陆) 上映',
        desc: '曾经在赛车界叱咤风云、如今却只能经营炒饭大排档的赛车手张驰（沈腾饰）决定重返车坛挑战年轻一代的天才。然而没钱没车没队友，甚至驾照都得重新考，这场笑料百出不断被打脸的复出之路，还有更多哭笑不得的窘境在等待着这位过气车神……',
    },
    {
        id: '4840388',
        title: '新喜剧之王',
        photo: 'https://coocssweb.github.io/photos/react-ssr/movie-03.jpg',
        score: 5.88,
        meta: '91分钟 / 剧情 / 喜剧 / 周星驰(导演) / 王宝强 / 鄂靖文 / 张全蛋 / 2019-02-05(中国大陆) 上映',
        desc: '一直有个明星梦的小镇大龄女青年如梦跑龙套多年未果。她和父亲关系紧张，亲友都劝她放弃，只有男友查理还支持她。在剧组，如梦遇见了年少时启发她演戏的男演员马可。但此时过气多年的马可却因内心自卑而性情狂躁，对如梦百般折磨。如梦仍乐观坚持演戏，然而一次比一次沉重的打击却接踵而来，最后她决定放弃梦想，回到父母身边找了份稳定工作，但却得知自己入围了知名导演新片的大型选角。如梦陷入艰难抉择...',
    }
];

// 电影类型
const types = [
    {
        id: 11,
        name: '动作'
    },
    {
        id: 12,
        name: '搞笑'
    },
    {
        id: 13,
        name: '漫威'
    },
    {
        id: 14,
        name: '科幻'
    }
];

class Demo {
    fetchHome () {
        return new Promise(resolve => {
            resolve({
                music: movies,
            });
        });
    }

    fetchList () {
        return new Promise(resolve => {
            resolve(types);
        });
    }
}

export default new Demo();