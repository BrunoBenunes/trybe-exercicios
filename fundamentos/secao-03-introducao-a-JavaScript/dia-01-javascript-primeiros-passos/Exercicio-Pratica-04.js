let gradePercent = 0
let grade = ''

if (gradePercent >= 90 && gradePercent <= 100) {
    grade = 'A'
} else if (gradePercent >= 80 && gradePercent < 90) {
    grade = 'B'
} else if (gradePercent >= 70 && gradePercent < 80) {
    grade = 'C'
} else if (gradePercent >= 60 && gradePercent < 70) {
    grade = 'D'
} else if (gradePercent >= 50 && gradePercent < 60) {
    grade = 'E'
} else if (gradePercent < 50 && gradePercent >= 0) {
    grade = 'F'
}
else {
    console.log('Nota Inválida')
}
console.log(grade)