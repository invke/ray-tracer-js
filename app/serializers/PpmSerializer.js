import _ from 'lodash'
import heredoc from 'heredocument'

export default class PpmSerializer {
  constructor(canvas, colourSpace = 255) {
    this.canvas = canvas
    this.colourSpace = colourSpace
  }

  render() {
    return [this._ppmHeader(), this._ppmBody()].join('\n')
  }

  _ppmHeader() {
    return heredoc`
      P3
      ${this.canvas.width} ${this.canvas.height}
      255`
  }

  _ppmBody() {
    const lines = _.range(this.canvas.height).map(y => this._ppmBodyLine(y))
    return lines.join('\n') // join the lines
  }

  _ppmBodyLine(y) {
    // each line of the ppm body corresponds to a row of the canvas
    return _.range(this.canvas.width).map(x => {
      return this._ppmPixel(this.canvas.getPixel(x, y))
    }).join(' ')
  }

  _ppmPixel(pixel) {
    return [
      this._pixelChannelToColourSpace(pixel.red),
      this._pixelChannelToColourSpace(pixel.green),
      this._pixelChannelToColourSpace(pixel.blue),
    ].join(' ')
  }

  _pixelChannelToColourSpace(channel) {
    const clampedChannel = _.clamp(channel, 0, 1)
    return Math.round(clampedChannel * this.colourSpace)
  }
}
