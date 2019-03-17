import React,{ Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


class Articles extends Component{
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:true,
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const articles = res.data;
            this.setState({ articles , loading:false});
          })
      }
      render(){
          return(
              <div> 
                  {
                      !this.state.loading && <div>
                      {this.state.articles.map(article => <div>
                          <h3>{article.title}</h3>{article.body}<br/>
                          <br/><Button href={"/article/"+article.id} variant={"/"+article.id}>view detail ..</Button></div>)}
                  </div>
                  }
                {this.state.loading &&
                <div>
                    <p> Loading Data Please wait ..</p>
                </div>
                }
              </div>
              
          )
      }
}



export default Articles;