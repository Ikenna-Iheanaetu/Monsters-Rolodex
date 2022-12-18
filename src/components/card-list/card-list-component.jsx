import { Component } from "react";
import Card from "../card/card";
import './card-list-style.css';


class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from cardlist");
    const { monsters } = this.props;
    

    return (
      <div className="card-list">
        {monsters.map((monster) => {
            return(
           <Card monster={monster} />
        )})}
      </div>
    );
  }
}

export default CardList;
