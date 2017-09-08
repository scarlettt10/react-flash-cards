import React from 'react';

class CardApp extends React.Component {
  state = { cards: [] }
  
  addCard = (card) => {
    this.setState({ cards: [...this.state.cards, card ] })
  }
 
 
 
 
  render() {
    return (
      <div>
        worked
      </div>
    )
  }
}


export default CardApp;