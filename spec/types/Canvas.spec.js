import Canvas from 'app/types/Canvas'

describe('Canvas', () => {
  let canvas

  describe('#constructor', () => {
    beforeEach(() => {
      canvas = new Canvas(10, 20)
    })

    it('assigns the width', () => {
      expect(canvas.width).toEqual(10)
    })

    it('assigns the height', () => {
      expect(canvas.height).toEqual(20)
    })

    it('generates a grid of black pixels', () => {
      expect(canvas.pixels.length).toEqual(10)
      canvas.pixels.forEach(column => {
        expect(column.length).toEqual(20)

        column.forEach(pixel => {
          expect(pixel.red).toEqual(0)
          expect(pixel.green).toEqual(0)
          expect(pixel.blue).toEqual(0)
        })
      })
    })
  })
})
