import _ from 'lodash'

import Colour from 'app/types/Colour'
import PpmSerializer from 'app/serializers/PpmSerializer'

export default class Canvas {
  constructor(width, height, fill = null) {
    this.width  = width
    this.height = height

    // initialize pixel grid to black
    this.pixels = _.times(width, () => {
      return _.times(height, () => {
        return fill || Colour.Black()
      })
    })
  }

  getPixel(x, y) { return this.pixels[x][y] }

  setPixel(x, y, colour) { this.pixels[x][y] = colour }

  toPpm() {
    const ppmSerializer = new PpmSerializer(this)
    ppmSerializer.render()
  }
}
