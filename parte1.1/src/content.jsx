import Part from './part';
import course from './course';

const Content = () => {
    return (
      <div>
        <Part partes={course.parts}/>
      </div>
    );
  }

export default Content;
