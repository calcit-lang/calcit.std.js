export let rand = (n: number, m: number): number => {
  if (m != null) {
    return n + (m - n) * Math.random();
  }
  if (n != null) {
    return Math.random() * n;
  }
  return Math.random() * 100;
};

export let rand_int = (n: number, m: number): number => {
  if (m != null) {
    return Math.floor(n + Math.random() * (m - n));
  }
  if (n != null) {
    return Math.floor(Math.random() * n);
  }
  return Math.floor(Math.random() * 100);
};

export let rand_shift = (n: number, dn: number): number => {
  if (typeof n === "number" && typeof dn === "number") {
    return n - dn + 2 * dn * Math.random();
  } else {
    throw new Error("expected 2 numbers");
  }
};

export let rand_between = (from: number, to: number): number => {
  if (typeof from === "number" && typeof to === "number") {
    return from + (to - from) * Math.random();
  } else {
    throw new Error("expected 2 numbers");
  }
};

/** Calcit List turnes to Array */
type ToArray<T> = { toArray: () => T[] };

export async function promise_for<T, S extends ToArray<T>>(
  xs: T[] | S,
  f: (t: T) => Promise<T>
): Promise<T> {
  let xs2 = xs;
  if ((xs as S).toArray != null) xs2 = (xs as S).toArray();
  let xs3 = xs2 as T[];

  let ret = null;
  for (let i = 0; i < xs3.length; i++) {
    let x = xs3[i];
    ret = await f(x);
  }

  return ret;
}

export function promise_all<T, S extends ToArray<T>>(
  xs: T[] | S,
  f: (t: T) => Promise<T>
): Promise<T[]> {
  let xs2 = xs;
  if ((xs as S).toArray != null) xs2 = (xs as S).toArray();
  let xs3 = xs2 as T[];

  return Promise.all(xs3.map((x) => f(x)));
}

export function promise_race<T, S extends ToArray<T>>(
  xs: T[] | S,
  f: (t: T) => Promise<T>
): Promise<T> {
  let xs2 = xs;
  if ((xs as S).toArray != null) xs2 = (xs as S).toArray();
  let xs3 = xs2 as T[];

  return Promise.race(xs3.map((x) => f(x)));
}
