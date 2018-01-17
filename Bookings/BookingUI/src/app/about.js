import React from 'react';

class About extends React.Component {
    render() {
        var loginButton = true;
if (false) {
  loginButton = <span> Everything is okay in the world</span>;
} else {
  loginButton = <span> Everything is okay in the Country</span>;
}

return (
    <nav>    
      {loginButton}
    </nav>
  );

        // return (
        //     <h2> All about me</h2>
        // );
    }
}



module.exports = About;