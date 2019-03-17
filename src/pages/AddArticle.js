import React,{ Component } from 'react';
import  {Form, Button, Alert} from 'react-bootstrap';


class AddArticle extends Component{
    constructor(){
        super();
        this.state = {
            value: '',
            auteur:'',
            email:'',
            categorie:'',
            titre:'',
            body:'',
            isHiden:false,
            error:false,
            errorMsg:'',
    
    };
        

    }
    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value, error:false});
      }

      handleSubmit = () =>{
            if(this.state.titre=== ""){
                this.setState({error:true,errorMsg:'Veuillez saisir le titre'})
                return;
            }
            if(this.state.auteur === ""){
                this.setState({error:true,errorMsg:"Veuillez saisir le nom d'auteur"})
                return;
            }
            if(this.state.email===""){
                this.setState({error:true,errorMsg:"Veuillez saisir l'email"})
                return;
            }   
            if(this.state.body===""){
                this.setState({error:true,errorMsg:"Veuillez saisir le contenu de l'article"})
                return;
            }   

            this.setState({isHiden: true });  
      }

      modifyArticle = () =>{
            this.setState({isHiden: false})
      }

      sendArticle =()  =>{
            
      }


      render(){
          return(
            <div>
                {this.state.error && 
                    <Alert  variant="danger">
                    {this.state.errorMsg}
                    </Alert>
                }
                {!this.state.isHiden && 
                <Form>
    <Form.Group controlId="formBasicAuteur">
    <Form.Label>Auteur</Form.Label>
    <Form.Control type="text" placeholder="Auteur" name='auteur' value={this.state.auteur} onChange={this.handleChange}  />
    <Form.Text className="text-muted">
      {this.state.value}
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="categorie">
    <Form.Label>Categorie</Form.Label>
        <Form.Control as="select" value={this.state.categorie} name='categorie' onChange={this.handleChange}>
        <option>Theatre</option>
        <option>Cinema</option>
        <option>Test</option>
        </Form.Control>
    </Form.Group>
  <Form.Group controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Titre" name="titre" value={this.state.titre} onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Article</Form.Label>
    <Form.Control as="textarea" rows="3"  name="body" value={this.state.body}  onChange={this.handleChange}></Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={this.handleSubmit}>
    Consulter L'aperçu
  </Button>
</Form>

                }
                {this.state.isHiden &&
                <div> 
                    <h1>Titre de l'article</h1>
                    <h2>{this.state.titre}</h2>
                    <p>{this.state.body}</p>
                    <Button variant="warning" onClick={this.modifyArticle}>Modifier L'article</Button>
                    <Button variant="success">Publier L'article</Button>
                </div> }
            </div>
              
          )
      }
}
export default  AddArticle;