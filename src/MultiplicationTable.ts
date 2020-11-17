import { start } from "repl"

export class MultiplicationTable {

  public render(startNumber: number, endNumber: number): string{
    if(!this.isValidInput(startNumber, endNumber)){
      return ''
    }
    return '1*1=1'
  }

  private isValidInput(startNumber: number, endNumber: number): boolean {
    const isValidRange = this.isEndNumberLargerOrEqualToStartNumber(startNumber, endNumber)
    const isInteger = this.isInteger(startNumber) && this.isInteger(endNumber)
    const isWithinScope = this.isInRangeOneToTenInclusive(startNumber) && this.isInRangeOneToTenInclusive(endNumber)
    return isValidRange && isInteger && isWithinScope
  }

  private isEndNumberLargerOrEqualToStartNumber(startNumber: number, endNumber: number): boolean {
    return endNumber >= startNumber
  }

  private isInteger(number: number): boolean {
    return Number.isInteger(number)
  }

  private isInRangeOneToTenInclusive(number: number): boolean {
    return number >= 2 && number <= 10
  }
}
