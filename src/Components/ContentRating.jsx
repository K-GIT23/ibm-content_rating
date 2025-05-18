import React, { Component } from 'react';
import './ContentRating.css';
class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>You get to state your like or dislike of the weather
        Expect partly sunny skies with a modest chance—around 20%—of showers or even an isolated thunderstorm during the day. 
        Early morning conditions might be a bit more overcast, but the cloud cover should break up as the day progresses. 
        High temperatures are forecast to reach between 86°F and 88°F, with winds coming from the west at around 10–15 mph and gusts possibly reaching up to 20 mph. 
        Evening temperatures are likely to dip into the high 60s. 

        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;
