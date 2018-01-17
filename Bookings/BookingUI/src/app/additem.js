import React from 'react';
var createReactClass = require('create-react-class');

//Require module
require('./css/addItem.css');
var AddItem = createReactClass({
    render: function () {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type='text' required ref="newItem" />
                <input type='submit' value="Hite me" />
            </form>
        );
    },

    //Custom Functions
    handleSubmit: function (e) {
        e.preventDefault();


        var payload = {
            "roomnumber": 111,
            "adultscapacity": 5,
            "childrencapacity": 2,
            "price": 100,
            "available": true
        };

        var data = new FormData();
        data.append("json", JSON.stringify(payload));
        fetch("http://localhost:8081/api/rooms",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(payload)
            })
            .then(function (res) { return res.json(); })
            .then(function (data) { alert(JSON.stringify(data)) })

        // fetch('http://localhost:8081/api/rooms'){
        //     method: "POST",
        //     body: data
        // }).then(function(data)
        //     {
        //             return data.json();
        //     }
        // ).then(json =>{
        //     console.log(json);
        // });

        //Edit Record
        // fetch('http://localhost:8081/api/rooms?roomNumber=101').then(function(data)
        //     {
        //             return data.json();
        //     }
        // ).then(json =>{
        //     console.log(json);
        // });

        //     e.preventDefault();
        // this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;