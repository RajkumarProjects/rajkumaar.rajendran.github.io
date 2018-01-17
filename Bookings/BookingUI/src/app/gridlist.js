import React from 'react';

class GridList extends React.Component {
    constructor(props) {
        super(props);             
    }
    render() {
 
        return (
            <table>
                <thead><tr>
                    <th>AutoID</th><th>Room Number</th><th>Adults Capacity</th><th>Children Capacity</th><th>Price</th><th>Edit</th><th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.person}
                </tbody>
            </table>
        );


    }
}
module.exports = GridList;