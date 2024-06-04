const bestStudents = (students) => {
  let bestStudents;
  students.forEach((student) => {
    if (student.score === 0) {
      return;
    }
    if (!bestStudents) {
      bestStudents = [student];
      return;
    }

    if (student.score > bestStudents[0].score) {
      bestStudents = [student];
      return;
    }

    if (student.score === bestStudents[0].score) {
      if (new Date(student.date) < new Date(bestStudents[0].date)) {
        bestStudents = [student];
        return;
      }

      if (new Date(student.date) > new Date(bestStudents[0].date)) {
        return;
      }

      bestStudents.push(student);
    }
  });
  if (!bestStudents) {
    console.log("Дорогие студенты, ждем вас на пересдаче");
    return;
  }
  const names = bestStudents.map((student) => student.name);
  console.log(
    `Поздравляю, ${names.join(" и ")}, вы набрали ${
      bestStudents[0].score
    } балла(ов) и стали лучшим(и) студентом(ами) курса! `
  );
  return bestStudents;
};
module.exports = bestStudents;
