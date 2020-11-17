import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  const table = new MultiplicationTable()
  it('should render multiplication table of (1, 1)', () => {
    // given
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should return an empty string when start number larger than end number', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return an empty string when start number is not integer', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2.5
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return an empty string when end number is not integer', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 2.4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return an empty string when both start and end number are not integer', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2.5
    const end = 2.4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
})
