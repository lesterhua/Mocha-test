
//describe 指出測試單元，，也就是測試的function add
//it是測試案例example
//example1, 如果是數字2+1=3
//example2, 如果是字串'2'+'1', 回報是錯誤
//example3, 如果不是正整數，0+4，回報是錯誤
//example4, 如果負數，-1+4 ，回報是錯誤
var should = chai.should()
describe('function add', function () {
    it('should add two number and return result', function () {
        var result = add(2, 1)
        result.should.be.equal(3)
    })
    it('string inputs should be illegal', function () {
        var result = add('2', '1')
        result.should.be.equal('something wrong!!')
    })
    it('0 is illegal', function () {
        var result = add(0, 4)
        result.should.be.equal('something wrong!!')
    })
    it('negative number are illegal', function () {
        var result = add(-1, 4)
        result.should.be.equal('something wrong!!')
    })
})
