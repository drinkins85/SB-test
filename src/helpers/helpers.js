export function getWeeksCount(start, finish) {
    return Math.round((finish - start) / (7 * 24 * 60 * 60 * 1000));
}

export function getCountByKey(objects, key, value) {
    return objects.reduce((count, obj) => obj[key] === value ? count + 1 : count, 0);
}

export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let i = 0; i < keysA.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i])) {
            return false;
        }

        if (objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}

