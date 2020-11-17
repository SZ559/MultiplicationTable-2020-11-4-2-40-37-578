
export class MultiplicationTable {

  public render(startNumber: number, endNumber: number): string{
    if(!this.isValidInput(startNumber, endNumber)){
      return ''
    }
    const matrix = this.generateMutiplicationMatrix(startNumber, endNumber)
    return this.renderMutiplicationMatrix(matrix)
  }

  private isValidInput(startNumber: number, endNumber: number): boolean {
    const isValidRange = this.isEndNumberLargerOrEqualToStartNumber(startNumber, endNumber)
    const isInteger = this.isInteger(startNumber) && this.isInteger(endNumber)
    const isWithinScope = this.isInRangeOneToTenInclusive(startNumber) && this.isInRangeOneToTenInclusive(endNumber)
    return isValidRange && isInteger && isWithinScope
  }

  // private generateMutiplicationMatrix(startNumber: number, endNumber: number): MatrixComponent[][] {
  //   const mutiplicationMatrix : MatrixComponent[][] = []
  //   const size = endNumber - startNumber
  //   for(let rowIndex = size; rowIndex > -1; rowIndex --)
  //   {
  //     const numberInRow = endNumber - (size - rowIndex)
  //     const rowOfMatrix: MatrixComponent[] = []
  //     for(let columIndex = 0; columIndex <= numberInRow - startNumber; columIndex ++){
  //       const columnNumber = startNumber + columIndex
  //       rowOfMatrix.push(new MatrixComponent(columnNumber, numberInRow))
  //     }
  //     mutiplicationMatrix.push(rowOfMatrix)
  //   }
  //   return mutiplicationMatrix
  // }
  private generateMutiplicationMatrix(startNumber: number, endNumber: number): MatrixComponent[][] {
    const mutiplicationMatrix : MatrixComponent[][] = []
    const size = endNumber - startNumber
    for(let rowIndex = 0; rowIndex <= size; rowIndex ++)
    {
      const numberInRow = startNumber + rowIndex
      const rowOfMatrix: MatrixComponent[] = []
      for(let columIndex = 0; columIndex <= numberInRow - startNumber; columIndex ++){
        const columnNumber = startNumber + columIndex
        rowOfMatrix.push(new MatrixComponent(columnNumber, numberInRow))
      }
      mutiplicationMatrix.push(rowOfMatrix)
    }
    return mutiplicationMatrix
  }
  private renderMutiplicationMatrix(matrix: MatrixComponent[][]): string{
    let result = ``
    // let indexArray: number[] = []
    // for(const row of matrix)
    // {
    //   row.map( (component) => {
    //     const stringOfComponent = this.printSingleComponenet(component)
    //     indexArray.push(stringOfComponent.length)
    //     return stringOfComponent
    //   }).join()

    // }
    console.log(matrix.length)
    const lengthListOfLastRow: number[] = []
    matrix[matrix.length - 1].forEach((lastRowComponent) => lengthListOfLastRow.push(this.printSingleComponenet(lastRowComponent).length))
    for(const rowList of matrix){
      for(let index = 0; index < rowList.length; index ++){
        const stringOfComponent = this.printSingleComponenet(rowList[index])
        result += stringOfComponent
        result += this.generateString(lengthListOfLastRow[index] - stringOfComponent.length)
      }
      result = result.trimEnd()
      result += '\n'
    }
    result = result.trimEnd()
    return result
  }

  private generateString(amout: number): string{
    let stringResult = ''
    for(let i = 0; i < amout; i++){
      stringResult += ' '
    }
    return stringResult
  }

  private printSingleComponenet(component: MatrixComponent): string{
    return `${component.number1}*${component.number2}=${component.product}  `
  }

  private isEndNumberLargerOrEqualToStartNumber(startNumber: number, endNumber: number): boolean {
    return endNumber >= startNumber
  }

  private isInteger(number: number): boolean {
    return Number.isInteger(number)
  }

  private isInRangeOneToTenInclusive(number: number): boolean {
    return number >= 1 && number <= 10
  }
}

class MatrixComponent {
  number1: number
  number2: number
  product: number

  constructor(number1: number, number2: number) {
    this.number1 = number1
    this.number2 = number2
    this.product = this.number1 * this.number2
  }
}
