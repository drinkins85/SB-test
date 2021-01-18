export function getWeeksCount(start, finish) {
    return Math.round((finish - start) / (7 * 24 * 60 * 60 * 1000));
}

export function getCountByKey(objects, key, value) {
    return objects.reduce((count, obj) => obj[key] === value ? count + 1 : count, 0);
}
