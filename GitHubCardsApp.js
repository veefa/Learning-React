//Cards
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
    //itreat through the cards
  //render card
  <div>
    {props.profile.map(profile => <Card {...profile} />)}
    
  </div>
);

class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} style={{margin:"1rem"}}/>
        <div className="info">
          <div className="name" style={{fontSize:"2rem"}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}
            
class Form extends React.Component {
	render() {
  	return (
        // add cards Button
    	<form>
    	  <input className="header"/>{this.props.title}
        <button>Add card</button>
    	</form>
    );
  }	
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: testData,
    }
  }
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form/>
        <CardList profile={this.state.profile}/>
    	</div>
    );
  }	
}

ReactDOM.render(
  <App title="The GitHub Cards Apps" />, mountNode
);
