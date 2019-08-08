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

  describe('#add', () => {
    let result
    beforeEach(() => {
      colour = new Colour(0.9, 0.6, 0.75)
      result = colour.add(new Colour(0.7, 0.1, 0.25))
    })

    it('returns a colour from the addition of their components', () => {
      expect(result.red).toEqual(1.6)
      expect(result.green).toEqual(0.7)
      expect(result.blue).toEqual(1.0)
    })
  })

  
  describe('#subtract', () => {
    let result
    beforeEach(() => {
      colour = new Colour(0.9, 0.6, 0.75)
      result = colour.subtract(new Colour(0.7, 0.1, 0.25))
    })

    it('returns a colour from the subtraction of their components', () => {
      expect(result.red).toApproximatelyEqual(0.2)
      expect(result.green).toApproximatelyEqual(0.5)
      expect(result.blue).toApproximatelyEqual(0.5)
    })
  })
})
