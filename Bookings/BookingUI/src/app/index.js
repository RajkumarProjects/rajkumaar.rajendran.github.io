import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
require('./css/index.css');

//Module required
var TodoItem = require('./todoitem');
var About = require('./about');
var CreateRoom = require('./createroom');
var GridList = require('./gridlist');
var CreateOrEdit = require('./createoredit');
var Back = require('./back');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Bookings</h2>
                    <ul>
                        <li><Link to={'/'}>Rooms</Link></li>
                        <li><Link to={'/About'}>About </Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={TodoComponent} />
                        <Route exact path='/About' component={About} />
                    </Switch>
                </div>
            </Router>           
        )
    }
}

//Create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['one', 'two', 'three'],
            showReply: false,
            person: [],
            idValue: 0
        }
    }

    componentDidMount() {
        this.UserList();
    }
    UserList() {
        fetch('http://localhost:8081/api/getallrooms').then(function (results) {
            return results.json();
        }
        ).then(data => {           
            this.setState({ person: data })
        });
    }

    render() {       
        var person = this.state.person;

        person = person.map(function (item, index) {             ;
            return (<TodoItem roomnumber={item.roomnumber} adultscapacity={item.adultscapacity}
                childrencapacity={item.childrencapacity} price={item.price} idValue={item._id} key={index} onDelete={this.onDelete} onEdit={this.onEdit.bind(this)} />);
        }.bind(this));
        // let usermessage;
        // if (1==1) {
        //     userMessage = (
        //       <span>
        //         <h2>{ `Welcome Back ` }</h2>
        //         <p>You can visit settings to reset your password</p>
        //       </span>
        //     )
        //   } else {
        //     userMessage = (
        //       <h2>Hey man! Sign in to see this section</h2>
        //     )
        //   }
        return (
            
            
            <div id="todo-list">                
                {/* <CreateRoomNew /> */}
                
                {!this.state.showReply && < CreateOrEdit onClick={this.onClick.bind(this)}/>}
                
                {/* <a onClick={this.onClick.bind(this)} href='#'>New Room</a> */}
                {this.state.showReply && < Back onBackClick={this.onBackClick.bind(this)}/>}
                {/* <a onClick={this.onBackToListClick.bind(this)} href='#'>Back to List</a> */}
                {this.state.showReply && < CreateRoom id={this.state.idValue} />}
                {!this.state.showReply && <  GridList person={person} />}               
            </div>
        );
    }//render
    //Create Function
    onClick(e) {       
        //  e.preventDefault();
        this.setState({ showReply: !this.state.showReply,
            idValue: 0 })
    }

    onBackClick(e) {
        // e.preventDefault();
        this.setState({ showReply: !this.state.showReply,
            idValue: 0 })
    }

    onDelete(item) {

        fetch("http://localhost:8081/api/rooms/" + item,
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(function (res) { return res.json(); })
            .then(function (data) { alert('Deleted Successfully') })
      
    }

    onEdit(item) {     
        console.log(item);        
        this.setState({ idValue: item })
        console.log(this.state.idValue);
        this.setState({ showReply: true })
        // this.render();
        // this.setState({ showReply: !this.state.showReply })
    }
}



//Put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));