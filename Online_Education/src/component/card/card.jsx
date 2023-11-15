import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"

function BasicCard(props) {
    const course = props.course;
  return (
    <Card style={{ width: '18rem', height:'25rem' }}>
      <Card.Img className="card_image" variant="top" src={course.images} />
      <Card.Body>
        <Card.Text>Author: {course.name} </Card.Text>

        <Card.Title>{course.course_name}</Card.Title>

        <Card.Text>
          {course.description}
        </Card.Text>
        <Card.Text className="price">
            ${course.price}
        </Card.Text>
        <Button variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;