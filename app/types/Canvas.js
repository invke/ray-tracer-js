import _ from 'lodash'

import Colour from 'app/types/Colour'

export default class Canvas {
  constructor(width, height) {
    this.width  = width
    this.height = height

    // initialize pixel grid to black
    this.pixels = _.times(width, () => {
      return _.times(height, () => {
        return Colour.Black()
      })
    })
  }

  getPixel(x, y) { return this.pixels[x][y] }

  setPixel(x, y, colour) { this.pixels[x][y] = colour }
}
