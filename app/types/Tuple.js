import { EPSILON } from 'app/constants'

export default class Tuple {
  static Point(x, y, z) { return new Tuple(x, y, z, 1) }
  static ZeroPoint()    { return Tuple.Point(0, 0, 0) }

  static Vector(x, y, z) { return new Tuple(x, y, z, 0) }
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
      Math.pow(this.x, 2) + Math.pow(this.y, 2) +
      Math.pow(this.z, 2) + Math.pow(this.w, 2)
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
    return new this.constructor(
      this.x + anotherTuple.x, this.y + anotherTuple.y,
      this.z + anotherTuple.z, this.w + anotherTuple.w
    )
  }

  subtract(anotherTuple) {
    return new this.constructor(
      this.x - anotherTuple.x, this.y - anotherTuple.y,
      this.z - anotherTuple.z, this.w - anotherTuple.w
    )
  }

  negate() { return Tuple.ZeroVector().subtract(this) }

  multiply(scalar) {
    return new this.constructor(
      this.x * scalar, this.y * scalar,
      this.z * scalar, this.w * scalar
    )
  }

  normalize() {
    return new this.constructor(
      this.x / this.magnitude,
      this.y / this.magnitude,
      this.z / this.magnitude,
      this.w / this.magnitude,
    )
  }

  dot(anotherTuple) {
    return (
      this.x * anotherTuple.x +
      this.y * anotherTuple.y +
      this.z * anotherTuple.z +
      this.w * anotherTuple.w
    )
  }

  cross(anotherTuple) {
    return new this.constructor(
      this.y * anotherTuple.z - this.z * anotherTuple.y,
      this.z * anotherTuple.x - this.x * anotherTuple.z,
      this.x * anotherTuple.y - this.y * anotherTuple.x,
    )
  }
}
