import  React  from 'react';
import  Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Offres = ()=> (
    <div> <h2>Nos Offres </h2>
   <Card bg="Secondary" text="white" style={{ width: '18rem' }}>
  <Card.Header as="h5">Etudiant</Card.Header>
  <Card.Body>
    <Card.Title>Gratuit</Card.Title>
    <Card.Text>
      With supporting text
      </Card.Text>
      <Card.Text>
      With supporting text
      </Card.Text>
      <Card.Text>
      With supporting text
      </Card.Text>
    <Button variant="primary">Demander un compte </Button>
  </Card.Body>
</Card>
<Card bg="Secondary" text="white" style={{ width: '18rem' }}>
  <Card.Header as="h5">Etudiant</Card.Header>
  <Card.Body>
    <Card.Title>Gratuit</Card.Title>
    <Card.Text>
      With supporting text
      </Card.Text>
      <Card.Text>
      With supporting text
      </Card.Text>
      <Card.Text>
      With supporting text
      </Card.Text>
      
    
    <Button variant="primary">Acheter </Button>
  </Card.Body>
</Card>
</div>

)
export default Offres;