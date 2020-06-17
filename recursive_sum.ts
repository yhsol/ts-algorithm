function recursive_sum(n: number): number {
    if (n <= 1) {
        return n
    }

    return n + recursive_sum(n - 1)
}

let results: number = recursive_sum(5)

export default results