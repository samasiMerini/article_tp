
import React,{ Component } from 'react';
import axios from 'axios';

class Article extends Component{
    constructor(){
        super();
        this.state = {
            article:{}
        };
    }

    componentDidMount() {
        const id = this.props.articleId
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
            const articles = res.data;
            this.setState({ articles });
          })
      }
      render(){
          return(
              
              <div>
                  
                  {this.state.article(article => <div>
                      <h3>{article.title}</h3>{article.body}<br/>
                      <br/></div>)}
              </div>
          )
      }
}
export default  Article;