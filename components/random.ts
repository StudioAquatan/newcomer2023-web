export default class Random {
  x: number;
  y: number;
  z: number;
  w: number;
  constructor(seed?: number) {
    const genSeed = () => {
      const now = new Date();
      return now.getTime();
    };
    seed ??= genSeed();
    this.x = 123456789;
    this.y = 362436069;
    this.z = 521288629;
    this.w = seed;
  }

  // XorShift
  next() {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return (this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8)));
  }

  // min以上max以下の乱数を生成する
  nextNumber(min: number, max: number) {
    const r = Math.abs(this.next());
    return min + (r % (max + 1 - min));
  }
}

export function shuffle<T>(list: Array<T>, seed?: number) {
  const random = new Random(seed);
  return list.slice().sort(() => random.nextNumber(0, 1) - 0.5);
}
