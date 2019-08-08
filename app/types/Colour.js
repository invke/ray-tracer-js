import Tuple from 'app/types/Tuple'

export default class Colour extends Tuple {
  constructor(r, g, b) {
    super(r, g, b, 0)
  }

  get r() { return this.x }
  get g() { return this.y }
  get b() { return this.z }

  get red()   { return this.r }
  get green() { return this.g }
  get blue()  { return this.b }
}
