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
      expect(tuple.isPoint()).toBe(true)
    })

    it('is not a vector', () => {
      expect(tuple.isVector()).toBe(false)
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
      expect(tuple.isPoint()).toBe(false)
    })

    it('is a vector', () => {
      expect(tuple.isVector()).toBe(true)
    })
  })

  describe('static methods', () => {

    describe('#Point', () => {
      beforeEach(() => tuple = Tuple.Point(4.3, -4.2, 3.1))

      it('returns a point tuple', () => {
        expect(tuple.isPoint()).toBe(true)
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
        expect(tuple.isVector()).toBe(true)
      })

      it('assigns axis\'', () => {
        expect(tuple.x).toEqual(4.3)
        expect(tuple.y).toEqual(-4.2)
        expect(tuple.z).toEqual(3.1)
      })
    })

    describe('#AreEquivalent', () => {

      it('returns true if the x, y, z and are both points', () => {
        expect(
          Tuple.AreEquivalent(
            new Tuple(4.3, -4.2, 3.1, 1.0),
            new Tuple(4.3, -4.2, 3.1, 1.0)
          )
        ).toBe(true)
      })

      it('returns false if the x, y, z are equal but one is a point the other a vector', () => {
        expect(
          Tuple.AreEquivalent(
            new Tuple(4.3, -4.2, 3.1, 1.0),
            new Tuple(4.3, -4.2, 3.1, 0.0)
          )
        ).toBe(false)
      })

    })

  })

})
