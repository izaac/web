var Entry = React.createClass({
  render: function(){
    var author_link = "http://www.freecodecamp.com/" + this.props.author;
    return(
      <div className="note" key={this.props.key} >
        <a className="cust-link" href={this.props.link}><img className="avatar" src={this.props.picture}></img></a>
        <div className="note-section">
          <p><a className="gen-link" href={this.props.link}>{this.props.headline}</a></p>
        </div>
        <div className="nick-section">
          <p className="nickname">Author: <a href={author_link}>{this.props.author}</a></p>
        </div>
        <div className="votes-section">
          <p><i className="fa fa-heart"></i> {this.props.votes}</p>
        </div>
        <div className="date-section">
          <p><i className="fa fa-calendar"></i> {this.props.date}</p>
        </div>
      </div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {news: []};
  },
  componentDidMount: function() {
    var arr = [];
    $.get('http://www.freecodecamp.com/news/hot', function(data) {
      var id;
      var headline;
      var link;
      var picture;
      var author;
      var votes;
      var date;

      data.forEach(function (entry){
        id = entry.id;
        if(entry.headline.length > 40)
          headline = entry.headline.substring(0, 37) + '...';
        else
          headline = entry.headline;
        link = entry.link;
        picture = entry.author.picture;
        author = entry.author.username;
        votes = entry.rank;
        date = new Date(entry.timePosted).toGMTString().slice(0, -13);
        if (author === undefined) {author = "unknown"};
        arr.push([id, headline, link, picture, author, votes, date]);
      });
        // console.log(nodes[0].id);
      if(this.isMounted()){
        this.setState({news: arr})
      }
    }.bind(this));
  },
  addCard: function(newToAdd) {
    this.setState({news: this.state.news.concat(newToAdd)});
  },
  render: function() {

    return (
      <div>
        <h1>FreeCodeCamp News</h1>
        {/*   {this.state.news} //here i get json array */}

        {this.state.news.map(function(n) {
          return <Entry key={n[0]} headline={n[1]} author={n[4]} link={n[2]} picture={n[3]} votes={n[5]} date={n[6]}/>
        })}

      </div>

    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));
