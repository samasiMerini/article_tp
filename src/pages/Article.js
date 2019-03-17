
import React,{ Component } from 'react';
import axios from 'axios';

class Article extends Component{
    constructor(){
        super();
        this.state = {
            article:[],
            loading:true,
        };
    }

    componentDidMount() {
        const id = this.props.articleId;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
            this.setState({ article:res.data, loading:false });
          })
      }
      render(){
          return(
              
              <div>
                {!this.state.loading &&
                    <div>
                            <h3>{this.state.article.title}</h3>
                            <p>{this.state.article.body}</p><br/>
                            <br/>
                    </div>
                }
                {this.state.loading &&

                            <h3 className="text-center">Charement en cours</h3>

                }
              </div>
          )
      }
}
export default  Article;