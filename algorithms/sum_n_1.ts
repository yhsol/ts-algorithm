function sum_n(n: number): number {
    let result: number = 0;
    for (let i: number = 1; i < n + 1; i++) {
        result = result + i
    }
    return result
}

export default sum_n;