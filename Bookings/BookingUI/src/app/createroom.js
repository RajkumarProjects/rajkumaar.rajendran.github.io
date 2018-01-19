import React from 'react';

class CreateRoom extends React.Component
    {
        constructor(props) {
            super(props);
            this.state = {
                roomNumber:'',
                adults:'',
                children:'',
                price:'',
                available:''             
            };              
            this.UserList = this.UserList.bind(this);        
        }
        componentDidMount() {
            this.UserList();
          }
    
          UserList() {
            fetch('http://localhost:8081/api/rooms?roomNumber=' + this.props.id).then(function(results)
            {
               
                    return results.json();
            }
        ).then(data =>{
                      this.setState({  roomNumber:data[0].roomnumber,
                adults:data[0].adultscapacity,
                children:data[0].childrencapacity,
                price:data[0].price})
            
        });     

         
          }
        handleChangeRoomNumber(e) {
            this.setState({ roomNumber: e.target.value });
          }
          handleChangeAdults(e) {
            this.setState({ adults: e.target.value });
          }
          handleChangeChildren(e) {
            this.setState({ children: e.target.value });
          }
          handleChangePrice(e) {
            this.setState({ price: e.target.value });
          }
          handleChangeAvailable(e) {
            this.setState({ available: e.target.value });
          }
         
          
          
          
        render() {
            return (
                <form  onSubmit={this.handleSubmit.bind(this)}>
                <label>Room Number</label >
                <input type='text' required ref="newRoomNumber" value={this.state.roomNumber} onChange={ this.handleChangeRoomNumber.bind(this) } />               
                <br/>
                <label>Adults Capacity</label >
                <input type='text' required ref="newAdultsCapacity" value={this.state.adults} onChange={ this.handleChangeAdults.bind(this) } />
                <br/>
                <label>Children Capacity</label >
                <input type='text' required ref="newChildrenCapacity" value={this.state.children} onChange={ this.handleChangeChildren.bind(this) } />
                <br/>
                <label>Price</label >
                <input type='text' required ref="newPrice" value={this.state.price} onChange={ this.handleChangePrice.bind(this) } />
                <br/>
                <label>Available</label >
                <input type='text' required ref="newAvailable" onChange={ this.handleChangeAvailable.bind(this) } />
                <br/>
                <input type='submit' value="Save" />
                </form>
            );          
        }
         //Custom Functions
    handleSubmit(e){   
    
        // e.preventDefault();   
        var roomData = {
            "roomnumber": this.refs.newRoomNumber.value,
            "adultscapacity": this.refs.newAdultsCapacity.value,
            "childrencapacity": this.refs.newChildrenCapacity.value,
            "price": this.refs.newPrice.value,
            "available": true
        };     
       
         this.props.onSubmit(roomData)
       

  
       
    }
       
}



module.exports = CreateRoom;