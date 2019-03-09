import React,{ Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


class Articles extends Component{
    constructor(){
        super();
        this.state = {
            articles:[]
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const articles = res.data;
            this.setState({ articles });
          })
      }
      render(){
          return(
              // eslint-disable-next-line react/react-in-jsx-scope
              <div>
                  {this.state.articles.map(article => <div>
                      <h3>{article.title}</h3>{article.body}<br/>
                      <br/><Button href={"/article/"+article.id} variant={"/"+article.id}>view detail ..</Button></div>)}
              </div>
          )
      }
}



export default Articles;