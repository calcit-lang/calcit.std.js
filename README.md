## Calcit STD library for js

### Usage

Random generators:

```js
import { rand, rand_int } from "@calcit/std";

rand();
rand(10);
rand(10, 20);

rand_int();
rand_int(10);
rand_int(10, 20);

rand_shift(10, 2); // 10 +- 2

rand_between(3, 4);
```

Promise functions:

```js
promise_for(xs, (x) => x);
promise_all(xs, (x) => x);
promise_race(xs, (x) => x);
```

### License

MIT
