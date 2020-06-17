function max_num(n: number[]): number {
    const len = n.length;
    let max = n[0];
    for (let i = 0; i < len; i++) {
        if (max < n[i]) {
            max = n[i]
        }
    }
    return max
}

export default max_num;