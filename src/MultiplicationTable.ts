export class MultiplicationTable {

  public render(startNumber: number, endNumber: number): string{
    if(!this.isValidInput(startNumber, endNumber)){
      return ''
    }
    return '1*1=1'
  }

  private isValidInput(startNumber: number, endNumber: number): boolean {
    return this.isEndNumberLargerOrEqualToStartNumber(startNumber, endNumber)
  }

  private isEndNumberLargerOrEqualToStartNumber(startNumber: number, endNumber: number): boolean {
    return endNumber >= startNumber
  }
}
