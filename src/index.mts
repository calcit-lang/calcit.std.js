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
