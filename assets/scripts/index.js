const numberOfStudents=12;
const grades=[];

//Генерируем случайные значения оценок
function getRandomGrade(){
  return Math.floor(Math.random()*100)+1;
};
//Заполняем массив оценками
function fillGradesArray(numberOfStudents) {
  for (let i = 0; i < numberOfStudents; i++) {
    grades.push(getRandomGrade()); 
  }
}
fillGradesArray(numberOfStudents);

console.log('Оценки студентов:', grades);

//Расчет среднего балла
function calcAverageGrade(grades) {
    if (grades.length === 0) return 0; 
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return Math.floor(sum / grades.length); 
  }
  const gradesAverageScore = calcAverageGrade(grades);
  console.log('Cредний балл студентов:', gradesAverageScore);

 // Максимальный балл 
 function getMaxOfArray(grades) {
    return Math.max.apply(null, grades);
  }
  const maxGrade = getMaxOfArray(grades);
  console.log('Максимальный балл студентов:', maxGrade);

 // Минимальный балл
 function getMinOfArray(grades) {
    return Math.min.apply(null, grades);
  }
  const minGrade = getMinOfArray(grades);
  console.log('Минимальный балл студентов:', minGrade);


 // Балл выше или равен 60. 
const foundPositiveGrades = grades.filter(grades => grades >= 60);
console.log('Положительные оценки (>= 60):', foundPositiveGrades);

const numberOfPositiveGrades = foundPositiveGrades.length;

console.log('Количество положительных оценок (>= 60):', numberOfPositiveGrades);

//Балл ниже 60.
const foundNegativGrades = grades.filter(grades => grades < 60);
console.log('Отрицательные ценки (< 60):', foundNegativGrades);

const numberOfNegativGrades = foundNegativGrades.length;

console.log('Количество отрицательных оценок (< 60):', numberOfNegativGrades);


//Преобразование числовых оценок в формат буквенных A/B/C/D/E:
//Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//Если оценка ниже 20, преобразуйте её в "E"


function reformedGrades(grades) {
    return grades.map(grade => {
      if (grade >= 80) {
        return 'A';
      } else if (grade >= 60 && grade <= 79) {
        return 'B';
      } else if (grade >= 40 && grade <= 59) {
        return 'C';
      } else if (grade >= 20 && grade <= 39) {
        return 'D';
      } else {
        return 'E';
      }
    });
}

const newGrade = reformedGrades(grades);
console.log('Преобразование числовых оценок в формат буквенных оценок A/B/C/D/E:', newGrade);


