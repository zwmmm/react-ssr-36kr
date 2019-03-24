export default function () {
    return next => action => {
        const { sync, types, ...payload } = action;
        // 如果没有一步请求，直接next
        if (!sync) return next({ type: types, ...payload });
        const [REQUEST, SUCCESS, FAILURE] = types;
        // 有异步请求则先发送请求，然后next对应的action
        next({ type: REQUEST, ...payload });
        return sync()
        .then(result => next({ type: SUCCESS, ...payload, result }))
        .catch(error => next({ type: FAILURE, ...payload, error }))
    }
}