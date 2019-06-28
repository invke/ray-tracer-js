import { EPSILON } from 'app/constants'

export default class Tuple {
  constructor(x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  get isPoint() { return this.w == 1.0 }

  get isVector() { return !this.isPoint }

  static Point(x, y, z) { return new Tuple(x, y, z, 1.0) }

  static Vector(x, y, z) { return new Tuple(x, y, z, 0.0) }

  equals(anotherTuple) {
    return (
      Math.abs(this.x - anotherTuple.x) < EPSILON &&
      Math.abs(this.y - anotherTuple.y) < EPSILON &&
      Math.abs(this.z - anotherTuple.z) < EPSILON &&
      Math.abs(this.w - anotherTuple.w) < EPSILON
    )
  }

  add(anotherTuple) {
    return new Tuple(
      this.x + anotherTuple.x,
      this.y + anotherTuple.y,
      this.z + anotherTuple.z,
      this.w + anotherTuple.w
    )
  }

  subtract(anotherTuple) {
    return new Tuple(
      this.x - anotherTuple.x,
      this.y - anotherTuple.y,
      this.z - anotherTuple.z,
      this.w - anotherTuple.w
    )
  }
}
