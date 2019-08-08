import Tuple from 'app/types/Tuple'

export default class Colour extends Tuple {
  static FromTuple(tuple) { return new Colour(tuple.x, tuple.y, tuple.z) }

  constructor(r, g, b) {
    super(r, g, b, 0)
  }

  get r() { return this.x }
  get g() { return this.y }
  get b() { return this.z }

  get red()   { return this.r }
  get green() { return this.g }
  get blue()  { return this.b }

  add(anotherColour) {
    return Colour.FromTuple(super.add(anotherColour))
  }

  subtract(anotherColour) {
    return Colour.FromTuple(super.subtract(anotherColour))
  }

  multiply(scalarOrColour) {
    if (typeof scalarOrColour === 'number')
      return this._multiplyByScalar(scalarOrColour)
    else
      return this._multiplyByColour(scalarOrColour)
  }

  _multiplyByScalar(scalar) {
    return Colour.FromTuple(super.multiply(scalar))
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
