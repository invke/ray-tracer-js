import Colour from 'app/types/Colour'
import { EPSILON } from 'app/constants'

describe('Colour', () => {
  let colour

  describe('components', () => {
    beforeEach(() => colour = new Colour(-0.5, 0.4, 1.7))

    it('has a red component', () => {
      expect(colour.red).toEqual(-0.5)
    })

    it('has a green component', () => {
      expect(colour.green).toEqual(0.4)
    })

    it('has a blue component', () => {
      expect(colour.blue).toEqual(1.7)
    })
  })
})
