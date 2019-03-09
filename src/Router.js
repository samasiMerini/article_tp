import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Layout from './composants/Template/Layout';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Offres from './pages/Offres';



export default () =>(
    <Router>
        <Switch>
            <Redirect from="/" exact to="/Home"/>
            <Route path='/Home' exact component ={() => <Layout><Home /></Layout>}/>
            <Route path='/a-propos-de-nous' exact component ={() => <Layout><Apropos /></Layout>}/>
            <Route path='/articles' exact component ={() => <Layout><Articles /></Layout>}/>
            <Route path='/no-offres' exact component ={() => <Layout><Offres /></Layout>}/>
            <Route path='/Article/:id' exact component ={(props) => <Layout><Article articleId={props.match.params.id} /></Layout>}/>
        
        <Route render={() =>(
                <Layout>
                    <h1>ERROR 404</h1>
                    <p>La page que vous demandez est introuvable</p>
                </Layout>
        )

        }/>
        </Switch>
    </Router>
)
