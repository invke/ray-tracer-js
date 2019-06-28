// const Tuple = require('app/types/Tuple')
import Tuple from 'app/types/Tuple'

describe('Tuple', () => {
  let tuple

  describe('with w = 1.0', () => {
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
      expect(tuple.isPoint).toBe(true)
    })

    it('is not a vector', () => {
      expect(tuple.isVector).toBe(false)
    })
  })

  describe('with w = 0.0', () => {
    beforeEach(() => {
      tuple = new Tuple(4.3, -4.2, 3.1, 0.0)
    })

    it('assigns the axis\'', () => {
      expect(tuple.x).toEqual(4.3)
      expect(tuple.y).toEqual(-4.2)
      expect(tuple.z).toEqual(3.1)
      expect(tuple.w).toEqual(0.0)
    })

    it('is not a point', () => {
      expect(tuple.isPoint).toBe(false)
    })

    it('is a vector', () => {
      expect(tuple.isVector).toBe(true)
    })
  })

  describe('#equals', () => {
    it('returns true if the x, y, z and are both points', () => {
      expect(
        (new Tuple(4.3, -4.2, 3.1, 1.0)).equals(new Tuple(4.3, -4.2, 3.1, 1.0))
      ).toBe(true)
    })

    it('returns false if the x, y, z are equal but one is a point the other a vector', () => {
      expect(
        (new Tuple(4.3, -4.2, 3.1, 1.0)).equals(new Tuple(4.3, -4.2, 3.1, 0.0))
      ).toBe(false)
    })
  })

  describe('#add', () => {
    it('returns a tuple from the addition of their components', () => {
      const result = (new Tuple(3, -2, 5, 1)).add(new Tuple(-2, 3, 1, 0))
      expect(result.x).toEqual(1)
      expect(result.y).toEqual(1)
      expect(result.z).toEqual(6)
      expect(result.w).toEqual(1)
    })
  })
  
  describe('#subtract', () => {
    describe('subtracting two points', () => {
      beforeEach(() => {
        tuple = Tuple.Point(3, 2, 1).subtract(Tuple.Point(5, 6, 7))
      })
  
      it('returns a vector', () => {
        expect(tuple.isVector).toBe(true)
      })
      
      it('subtracts components pairwise', () => {
        expect(tuple.x).toEqual(-2)
        expect(tuple.y).toEqual(-4)
        expect(tuple.z).toEqual(-6)
      })
    })
  
    describe('subtracting a vector from a point', () => {
      beforeEach(() => {
        tuple = Tuple.Point(3, 2, 1).subtract(Tuple.Vector(5, 6, 7))
      })
  
      it('returns a point', () => {
        expect(tuple.isPoint).toBe(true)
      })
  
      it('subtracts components pairwise', () => {
        expect(tuple.x).toEqual(-2)
        expect(tuple.y).toEqual(-4)
        expect(tuple.z).toEqual(-6)
      })
    })

    describe('subtracting two vectors', () => {
      beforeEach(() => {
        tuple = Tuple.Vector(3, 2, 1).subtract(Tuple.Vector(5, 6, 7))
      })

      it('returns a vector', () => {
        expect(tuple.isVector).toBe(true)
      })

      it('subtracts components pairwise', () => {
        expect(tuple.x).toEqual(-2)
        expect(tuple.y).toEqual(-4)
        expect(tuple.z).toEqual(-6)
      })
    })

    describe('subtracting a vector from the zero vector', () => {
      beforeEach(() => {
        tuple = Tuple.ZeroVector().subtract(Tuple.Point(1, -2, 3))
      })

      it('returns a vector', () => {
        expect(tuple.isVector).toBe(true)
      })

      it('inverts the sign of the components', () => {
        expect(tuple.x).toEqual(-1)
        expect(tuple.y).toEqual(2)
        expect(tuple.z).toEqual(-3)
      })
    })
  })

  describe('#negate', () => {
    beforeEach(() => {
      tuple = (new Tuple(1, -2, 3, -4)).negate()
    })

    it('inverts the sign of the components', () => {
      expect(tuple.x).toEqual(-1)
      expect(tuple.y).toEqual(2)
      expect(tuple.z).toEqual(-3)
      expect(tuple.w).toEqual(4)
    })
  })

  describe('#mutliply', () => {
    describe('multiplying a tuple by a scalar', () => {
      beforeEach(() => {
        tuple = (new Tuple(1, -2, 3, -4)).multiply(3.5)
      })

      it('multiplys the tuple components piecewise', () => {
        expect(tuple.x).toEqual(3.5)
        expect(tuple.y).toEqual(-7)
        expect(tuple.z).toEqual(10.5)
        expect(tuple.w).toEqual(-14)
      })
    })

    describe('multilying a tuple by a fraction', () => {
      beforeEach(() => {
        tuple = (new Tuple(1, -2, 3, -4)).multiply(0.5)
      })

      it('multiplys the tuple components piecewise', () => {
        expect(tuple.x).toEqual(0.5)
        expect(tuple.y).toEqual(-1)
        expect(tuple.z).toEqual(1.5)
        expect(tuple.w).toEqual(-2)
      })
    })
  })

  describe('static methods', () => {
    describe('#Point', () => {
      beforeEach(() => tuple = Tuple.Point(4.3, -4.2, 3.1))

      it('returns a point tuple', () => {
        expect(tuple.isPoint).toBe(true)
      })

      it('assigns axis\'', () => {
        expect(tuple.x).toEqual(4.3)
        expect(tuple.y).toEqual(-4.2)
        expect(tuple.z).toEqual(3.1)
      })
    })

    describe('#Vector', () => {
      beforeEach(() => tuple = Tuple.Vector(4.3, -4.2, 3.1))

      it('returns a vector tuple', () => {
        expect(tuple.isVector).toBe(true)
      })

      it('assigns axis\'', () => {
        expect(tuple.x).toEqual(4.3)
        expect(tuple.y).toEqual(-4.2)
        expect(tuple.z).toEqual(3.1)
      })
    })
  })
})
