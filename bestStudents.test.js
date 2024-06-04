const bestStudents = require("./bestStudents");

describe("Тестирование функции bestStudents", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  const testCases = [
    {
      description:
        "Тестирование когда есть один студент с наибольшим количеством баллов и наименьшей датой",
      students: [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 46, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      expected: [{ name: "Oleg", score: 46, date: "2022-10-01" }],
      logMessage:
        "Поздравляю, Oleg, вы набрали 46 балла(ов) и стали лучшим(и) студентом(ами) курса! ",
    },
    {
      description:
        "Тестирование функции когда есть студенты с одинаковым количеством баллов и одинаковой датой",
      students: [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-01" },
        { name: "Denis", score: 0, date: "2022-10-02" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
      expected: [
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-01" },
      ],
      logMessage:
        "Поздравляю, Marina и Dmitry, вы набрали 25 балла(ов) и стали лучшим(и) студентом(ами) курса! ",
    },
    {
      description: "Тестирование функции когда баллы всех студентов равны 0",
      students: [
        { name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvara", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" },
      ],
      expected: undefined,
      logMessage: "Дорогие студенты, ждем вас на пересдаче",
    },
    {
      description: "Тестирование функции когда массив студентов пуст",
      students: [],
      expected: undefined,
      logMessage: "Дорогие студенты, ждем вас на пересдаче",
    },
  ];

  test.each(testCases)("$description", ({ students, expected, logMessage }) => {
    const result = bestStudents(students);
    expect(result).toEqual(expected);
    expect(consoleSpy).toHaveBeenCalledWith(logMessage);
  });
});
