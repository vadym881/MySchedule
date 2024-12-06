import { Lesson } from "./models/lesson.ts";
import { School } from "./models/school.ts";
import { Task } from "./models/task.ts";
const taskAsync = new Task("Learn async");

taskAsync.setContent("Get really familiar with async functionality");

//taskAsync.printTask();
taskAsync.setFinishDate(7);

const school = new School();
const math = new Lesson("Math", "TUE", "09:50");
school.addEventLesson(math);

const math2 = new Lesson("Math", "WED", "08:55");
school.addEventLesson(math2);
school.removeEventLesson(math2)
school.removeEventLesson(math2)
school.printSchedule();