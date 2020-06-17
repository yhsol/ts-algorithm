function find_same_name(n: string[]): Set<unknown | string> {
    let results = new Set();
    const len = n.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (n[i] === n[j]) {
                results.add(n[i])
            }
        }
    }
    return results;
}

export default find_same_name;