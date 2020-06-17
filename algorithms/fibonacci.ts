function fibo(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibo(n - 2) + fibo(n - 1);
}

const run = (n: number) => console.log(fibo(n));

export default run;
