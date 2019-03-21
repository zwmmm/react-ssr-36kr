export default function () {
    return next => action => {
        const { sync, types, ...payload } = action;
        if (!sync) return next({ type: types, ...payload });
        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ type: REQUEST, ...payload });
        return sync()
        .then(result => next({ type: SUCCESS, ...payload, result }))
        .catch(error => next({ type: FAILURE, ...payload, error }))
    }
}