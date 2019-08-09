import heredoc from 'heredocument'

import Canvas from 'app/types/Canvas'
import Colour from 'app/types/Colour'
import PpmSerializer from '../../app/serializers/PpmSerializer'

describe('PpmSerializer', () => {
  let serializer

  describe('#render', () => {
    let ppmString, ppmHeader, ppmBody

    describe('with a small canvas', () => {
      beforeEach(() => {
        const canvas = new Canvas(5, 3)
        canvas.setPixel(0, 0, new Colour(1.5, 0, 0))
        canvas.setPixel(2, 1, new Colour(0, 0.5, 0))
        canvas.setPixel(4, 2, new Colour(-0.5, 0, 1))

        serializer = new PpmSerializer(canvas)

        ppmString = serializer.render()
        const ppmLines = ppmString.split('\n')
        ppmHeader = ppmLines.slice(0, 3).join('\n')
        ppmBody   = ppmLines.slice(3).join('\n')
      })

      it('assigns the header correctly', () => {
        expect(ppmHeader).toEqual(heredoc`
          P3
          5 3
          255`
        )
      })

      it('assigns the body from the pixels rgb values', () => {
        expect(ppmBody).toEqual(heredoc`
          255 0 0 0 0 0 0 0 0 0 0 0 0 0 0
          0 0 0 0 0 0 0 128 0 0 0 0 0 0 0
          0 0 0 0 0 0 0 0 0 0 0 0 0 0 255`
        )
      })
    })
  })
})
