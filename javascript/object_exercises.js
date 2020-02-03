

const courses = [
  {
    title: 'Programming Languages',
    subject: 'CS',
    number: 364
  },
  {
    title: 'Web Programming',
    subject: 'CS',
    number: 332
  },
  {
    title: 'Conflict Resolution',
    subject: 'EDUC',
    number: 101
  }
];

let max = 0;
for (const course of courses) {
  if (course.number > max) {
    max = course.number;
  }
};
console.log(max);

const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;

  const isAuthor = function(anAuthor) {
    for (const author of authors) {
      if (author === anAuthor){
        return true;
      }
    }
    return false;
  }
}

const harry = new Book('Harry Potter', ['me', 'kira', 'tim']);
console.log(`Book function true: ${harry.isAuthor('me')}`);
console.log(`Book function true: ${harry.isAuthor('Jk Rowling')}`);

const range = function(end, start) {
  const output = [];
  if (start) {
    for(let i = start; i < end; i++) {
      output.push(i);
    }
  } else {
    for(let i = 0; i < end; i++) {
      output.push(i);
    }
  }
};

console.log(range(5));
console.log(range(3, 8));
console.log(range(6, 10));