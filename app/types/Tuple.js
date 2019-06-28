import { EPSILON } from 'app/constants'

export default class Tuple {
  constructor(x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  isPoint() { return this.w == 1.0 }

  isVector() { return !this.isPoint() }

  static Point(x, y, z) { return new Tuple(x, y, z, 1.0) }

  static Vector(x, y, z) { return new Tuple(x, y, z, 0.0) }

  static AreEquivalent(oneTuple, anotherTuple) {
    return (
      Math.abs(oneTuple.x - anotherTuple.x) < EPSILON &&
      Math.abs(oneTuple.y - anotherTuple.y) < EPSILON &&
      Math.abs(oneTuple.z - anotherTuple.z) < EPSILON &&
      Math.abs(oneTuple.w - anotherTuple.w) < EPSILON
    )
  }
}
