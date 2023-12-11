class PrintEditionItem {
  #state;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.#state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.#state * 1.5;
  }

  set state(value) {
    this.#state = value < 0 ? 0 : (value < 100 ? value : 100);
  }

  get state() {
    return this.#state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) this.books.push(book);
  }

  /*findBookBy(type, value) {
    let result = null;
    this.books.forEach((item, index) => {
      if (String(item[type]).indexOf(value) > -1) {
        item.indexLibray = index;

        return result = item;
      }
    })

    return result;
  }*/

  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }


  /*giveBookByName(bookName) {
    let book = this.findBookBy('name', bookName);

    if (book) this.books.splice(book.indexLibray, 1);

    return book;
  }*/

  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (!book) return null;
    this.books = this.books.filter((item) => item.name !== bookName);
    return book;
  }
}

const library = new Library("Моя библиотека");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library);
library.addBook(new NovelBook("Германа Гессе", "Демиан: История юности, написанная Эмилем Синклером", 1919, 256));
console.log(library.findBookBy('releaseDate', 1919));
book = library.giveBookByName("Машина времени");
book.state = 10;
book.fix();
book.fix();
book.fix();
console.log(book.state);
library.addBook(book);
console.log(library);

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return;

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) return 0;

    return this.marks[subject].reduce((acc, item, index, arr) => acc + item / arr.length, 0);
  }

  getAverage() {
    return Object.keys(this.marks).reduce((acc, item, index, arr) => acc + this.getAverageBySubject(item) / arr.length, 0);
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student);
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75