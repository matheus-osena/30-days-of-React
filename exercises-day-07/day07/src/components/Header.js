import React from "react";

class Header extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2023');
    }
  
    render() {
    const {welcome,title,subtitle,author:{firstName,lastName},date,} = this.props.data;
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName}{lastName}</p>
          <small>{date}</small>
          <button onClick={this.greetPeople}>Greet</button>
        </div>
      </header>
    );
  }
}

export default Header;