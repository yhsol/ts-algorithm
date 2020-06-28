export default function run(): void {
  const list = [39, 14, 67, 102];
  const name = ["Justin", "John", "Mike", "Summer"];
  const result = search_by_index(list, 67, name);
  console.log(result);
}

function sequential_search(a: number[], s: number): number[] {
  const n = a.length;
  let results = [];
  for (let i = 0; i < n; i++) {
    if (a[i] === s) {
      results.push(i);
    }
  }

  return results;
}

function search_by_index(a: number[], s: number, n: string[]): string {
  let key = sequential_search(a, s)[0];
  return n[key];
}
