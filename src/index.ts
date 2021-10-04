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
