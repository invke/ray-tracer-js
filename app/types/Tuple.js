export default class Tuple {
  constructor(x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  isPoint() { return this.w == 1.0 }

  isVector() { return !this.isPoint() }
}
