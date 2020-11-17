
export class MultiplicationTable {

  public render(startNumber: number, endNumber: number): string{
    if(!this.isValidInput(startNumber, endNumber)){
      return ''
    }
    const mutiplicationMatrix = this.generateMutiplicationMatrix(startNumber, endNumber)
    return this.renderMutiplicationMatrix(mutiplicationMatrix)
  }

  private isValidInput(startNumber: number, endNumber: number): boolean {
    const isValidRange = this.isEndNumberLargerOrEqualToStartNumber(startNumber, endNumber)
    const isInteger = this.isInteger(startNumber) && this.isInteger(endNumber)
    const isWithinScope = this.isInRangeOneToTenInclusive(startNumber) && this.isInRangeOneToTenInclusive(endNumber)
    return isValidRange && isInteger && isWithinScope
  }

  private generateMutiplicationMatrix(startNumber: number, endNumber: number): Expression[][] {
    const mutiplicationMatrix : Expression[][] = []
    const size = endNumber - startNumber
    for(let rowIndex = 0; rowIndex <= size; rowIndex ++)
    {
      const numberInRow = startNumber + rowIndex
      const rowOfMatrix: Expression[] = []
      for(let columIndex = 0; columIndex <= numberInRow - startNumber; columIndex ++){
        const numberInColumn = startNumber + columIndex
        rowOfMatrix.push(new Expression(numberInColumn, numberInRow))
      }
      mutiplicationMatrix.push(rowOfMatrix)
    }
    return mutiplicationMatrix
  }

  private renderMutiplicationMatrix(matrix: Expression[][]): string{
    let result = ``
    const lengthListOfLastRow: number[] = []
    matrix[matrix.length - 1].forEach((lastRowExpressions) => lengthListOfLastRow.push(this.renderSingleExpression(lastRowExpressions).length))
    for(const rowList of matrix){
      for(let index = 0; index < rowList.length; index ++){
        const stringOfExpression = this.renderSingleExpression(rowList[index])
        result += stringOfExpression
        result += this.generateString(lengthListOfLastRow[index] - stringOfExpression.length)
      }
      result = result.trimEnd()
      result += '\n'
    }
    result = result.trimEnd()
    return result
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

  private generateString(amount: number): string{
    let stringResult = ''
    if(amount > 0){
      for(let i = 0; i < amount; i++){
        stringResult += ' '
      }
    }
    return stringResult
  }

  private renderSingleExpression(expression: Expression): string{
    return `${expression.number1}*${expression.number2}=${expression.product}  `
  }
}

class Expression {
  number1: number
  number2: number
  product: number

  constructor(number1: number, number2: number) {
    this.number1 = number1
    this.number2 = number2
    this.product = this.number1 * this.number2
  }
}
