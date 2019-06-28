import { EPSILON } from 'app/constants'

export default class Tuple {
  static Point(x, y, z) { return new Tuple(x, y, z, 1.0) }
  static ZeroPoint()    { return Tuple.Point(0, 0, 0) }

  static Vector(x, y, z) { return new Tuple(x, y, z, 0.0) }
  static ZeroVector()    { return Tuple.Vector(0, 0, 0) }

  constructor(x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  get isPoint() { return this.w == 1.0 }

  get isVector() { return !this.isPoint }

  get magnitude() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    )
  }

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
      this.x + anotherTuple.x, this.y + anotherTuple.y,
      this.z + anotherTuple.z, this.w + anotherTuple.w
    )
  }

  subtract(anotherTuple) {
    return new Tuple(
      this.x - anotherTuple.x, this.y - anotherTuple.y,
      this.z - anotherTuple.z, this.w - anotherTuple.w
    )
  }

  negate() { return Tuple.ZeroVector().subtract(this) }

  multiply(scalar) {
    return new Tuple(
      this.x * scalar, this.y * scalar,
      this.z * scalar, this.w * scalar
    )
  }
}
