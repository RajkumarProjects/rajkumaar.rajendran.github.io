import React from 'react';

class CreateRoomNew extends React.Component
    {     
          
          
        render() {
            return (
                <form  onSubmit={this.handleSubmit.bind(this)}>
                <label>Room Number</label >
                <input type='text' required ref="newRoomNumber"  />               
                <br/>
                <label>Adults Capacity</label >
                <input type='text' required ref="newAdultsCapacity"  />
                <br/>
                <label>Children Capacity</label >
                <input type='text' required ref="newChildrenCapacity"  />
                <br/>
                <label>Price</label >
                <input type='text' required ref="newPrice" />
                <br/>
                <label>Available</label >
                <input type='text' required ref="newAvailable"  />
                <br/>
                <input type='submit' value="Save" />
                </form>
            );          
        }
         //Custom Functions
    handleSubmit(e){        
        e.preventDefault();        
    alert('test');
    }
       
}



module.exports = CreateRoomNew;