function recursive_factorial(n: number): number {
    if (n <= 1) {
        return 1
    }

    return n * recursive_factorial(n - 1)
}

const run = () => recursive_factorial(5)

export default run