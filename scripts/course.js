const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Front-end Frameworks", credits: 3, completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: false }
];

const container = document.getElementById('coursesContainer');
const creditDisplay = document.getElementById('totalCredits');

function renderCourses(courseArray) {
  container.innerHTML = '';
  let total = 0;
  courseArray.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) card.classList.add('completed');
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>${course.credits} credits</p>`;
    container.appendChild(card);
    total += course.credits;
  });
  creditDisplay.textContent = total;
}

document.getElementById('allBtn').addEventListener('click', () => renderCourses(courses));
document.getElementById('wddBtn').addEventListener('click', () => {
  renderCourses(courses.filter(c => c.code.startsWith("WDD")));
});
document.getElementById('cseBtn').addEventListener('click', () => {
  renderCourses(courses.filter(c => c.code.startsWith("CSE")));
});

renderCourses(courses);

