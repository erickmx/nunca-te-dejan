import { expect, assert } from 'chai'

describe('# Api unit test', function() {
  it('should say hello world', () => {
    assert.notEqual("Hola mundo", "Holo munda")
  })
  
  it('should check the type', () => {
    expect(1).to.be.equals(1)
  })
})
