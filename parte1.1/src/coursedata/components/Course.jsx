import Content from './Content';
import courses from './courses';


const Course = () => {
    return (
      <div>
        {courses.map(course => {
          return (
            <Content key={course.id} course={course} />
          )
        })}
        
      </div>
    );
  }

export default Course;
