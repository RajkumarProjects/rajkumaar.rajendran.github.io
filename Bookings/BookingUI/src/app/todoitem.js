import React from 'react';
require('./css/todoItem.css');
//Create TodoItem Component
class TodoItem extends React.Component{
    render () {
        return (
            <tr>
                <td >
                   
                        {this.props.idValue}
                    
                </td>
                <td >
                        {this.props.roomnumber}
                </td>
                <td >
                        {this.props.adultscapacity}
                </td>
                <td >
                        {this.props.childrencapacity}
                </td>
                <td >
                        {this.props.price}
                </td>
                
                <td>
                    <span className='item-delete' onClick={this.handleEdit.bind(this)}> Edit </span>
                </td>
                <td>
                    <span className='item-delete' onClick={this.handleDelete.bind(this)}> Delete </span>
                </td>
                
            </tr>
        )
    }
    //Create Function
    handleDelete () {        
        this.props.onDelete(this.props.idValue);
    }
    handleEdit () {     
        // alert(this.props.idValue)   ;
        this.props.onEdit(this.props.roomnumber);
    }
}


module.exports = TodoItem;