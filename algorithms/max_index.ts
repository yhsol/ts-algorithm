function max_index(n: number[]): number {
    let idx = 0;
    let n_len = n.length;

    for (let i = 0; i < n_len; i++) {
        if (n[idx] < n[i]) {
            idx = i
        }
    }

    return idx;
}

export default max_index;