import React  from "react";
import './card-list.stily.css'
import { Card } from '../card/card.component'
export const CardList = (props) => {
  //console.log(props);
  return (
    <div className="card-list">
        {props.users.map(u => (
          <Card key={u.id} user={u}/>
          ))}
    </div>
  );
}
