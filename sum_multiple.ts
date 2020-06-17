function sum_multiple(n: number): number {
    let result = 0;
    for (let i = 1; i < n + 1; i++) {
        result = result + (i * i)
    }
    return result
}

export default sum_multiple;