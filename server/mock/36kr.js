import fetch from './fetch'

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

class Mock {
    fetchFlash (b_id, page = 10) {
        return fetch('/newsflash', { per_page: page, ...(b_id ? { b_id } : {}) })
    }

    fetchList () {
        return new Promise(resolve => {
            resolve({
                data: types,
            });
        });
    }
}

export default new Mock();