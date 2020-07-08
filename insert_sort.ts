function find_ins_idx(r: number[], v: number): number {
  for (let i = 0; i < r.length; i++) {
    if (v < r[i]) {
      return i;
    }
  }
  return r.length;
}

function insert_sort(a: number[]): number[] {
  let result: number[] = [];
  while (a.length > 0) {
    let value = a.splice(0, 1)[0];
    let ins_idx = find_ins_idx(result, value);
    result.splice(ins_idx, 0, value);
  }
  return result;
}

export default function run() {
  let d = [2, 4, 5, 1, 3];
  console.log(insert_sort(d));
}
