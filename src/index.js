module.exports = function solveEquation(equation) {
    let solution =  {
        a: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[0],
        b: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[1],
        c: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[2],
        answer: [0, 0]
    }
    solution.answer[0] = Math.round(( (-1) * solution.b + Math.sqrt( solution.b * solution.b - 4 * solution.a * solution.c)) / (2 * solution.a))
    solution.answer[1] = Math.round(( (-1) * solution.b - Math.sqrt( solution.b * solution.b - 4 * solution.a * solution.c)) / (2 * solution.a))
    solution.answer.sort((right, left) => {return right - left})
    return solution.answer
}
