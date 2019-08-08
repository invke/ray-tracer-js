import Tuple from 'app/types/Tuple'

export default class Colour extends Tuple {
  static FromTuple(tuple) { return new Colour(tuple.x, tuple.y, tuple.z) }

  static Black() { return new Colour(0, 0, 0) }
  static White() { return new Colour(1, 1, 1) }
  static Red()   { return new Colour(1, 0, 0) }
  static Green() { return new Colour(0, 1, 0) }
  static Blue()  { return new Colour(0, 0, 1) }

  constructor(r, g, b) {
    super(r, g, b, 0)
  }

  get r() { return this.x }
  get g() { return this.y }
  get b() { return this.z }

  get red()   { return this.r }
  get green() { return this.g }
  get blue()  { return this.b }

  multiply(scalarOrColour) {
    if (typeof scalarOrColour === 'number')
      return this._multiplyByScalar(scalarOrColour)
    else
      return this._multiplyByColour(scalarOrColour)
  }

  _multiplyByScalar(scalar) {
    return super.multiply(scalar)
  }

  // Hadamard (or Schur) product.
  // The piecewise multiplication of the two colours components.
  _multiplyByColour(anotherColour) {
    return new Colour(
      this.r * anotherColour.r,
      this.g * anotherColour.g,
      this.b * anotherColour.b,
    )
  }
}
