// const Tuple = require('app/types/Tuple')
import Tuple from 'app/types/Tuple'

describe('Tuple', () => {
  let tuple

  describe('a tuple with w=1.0 is a point', () => {
    beforeEach(() => {
      tuple = new Tuple(4.3, -4.2, 3.1, 1.0)
    })

    it('assigns the axis\'', () => {
      expect(tuple.x).toEqual(4.3)
      expect(tuple.y).toEqual(-4.2)
      expect(tuple.z).toEqual(3.1)
      expect(tuple.w).toEqual(1.0)
    })

    it('is a point', () => {
      expect(tuple.isPoint()).toBe(true)
    })

    it('is not a vector', () => {
      expect(tuple.isVector()).toBe(false)
    })
  })
})
