import _ from 'lodash'
import heredoc from 'heredocument'

const MAXIMUM_LINE_LENGTH = 70

export default class PpmSerializer {
  constructor(canvas, colourSpace = 255) {
    this.canvas = canvas
    this.colourSpace = colourSpace
  }

  render() {
    return `${this._header()}\n${this._body()}\n`
  }

  _header() {
    return heredoc`
      P3
      ${this.canvas.width} ${this.canvas.height}
      255`
  }

  _body() {
    const rowsLines = _.range(this.canvas.height).map(y =>
      this._bodyLinesForPixelRow(y)
    )

    return rowsLines.join('\n') // join the lines
  }

  _bodyLinesForPixelRow(y) {
    // each line of the ppm body corresponds to a row of the canvas
    const pixelsValues = this._pixelRowsValues(y)

    let lines = []
    pixelsValues.forEach(pixelsValue => {

      if (lines.length === 0 || _.last(lines).length > MAXIMUM_LINE_LENGTH - 4)
        lines.push(`${pixelsValue}`)

      else
        lines[lines.length - 1] += ` ${pixelsValue}`

    })

    return lines.join('\n')
  }

  _pixelRowsValues(y) {
    let pixelsValues = []

    _.range(this.canvas.width).forEach(x => {
      const pixelsValue = this._pixelsValues(this.canvas.getPixel(x, y))
      pixelsValues.push(...pixelsValue)
    })

    return pixelsValues
  }

  _pixelsValues(pixel) {
    return [
      this._pixelChannelToColourSpace(pixel.red),
      this._pixelChannelToColourSpace(pixel.green),
      this._pixelChannelToColourSpace(pixel.blue),
    ]
  }

  _pixelChannelToColourSpace(channel) {
    const clampedChannel = _.clamp(channel, 0, 1)
    return Math.round(clampedChannel * this.colourSpace)
  }
}
