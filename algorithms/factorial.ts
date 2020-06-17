function factorial(n: number): number {
    let results = 1;
    for (let i = 1; i < n + 1; i++) {
        results = results * i
    }
    return results
}

let results = factorial(5)

function run() {
    return factorial(5)
}

export default run;