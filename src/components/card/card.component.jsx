import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import "./card.css";

export default function cardComp(props) {
  return (
    <div className="card-container">
      <Card
        bordered={true}
        hoverable
        bodyStyle={{background:'lightblue'}}
        cover={
          <img
            alt="monster"
            src={`https://robohash.org/${props.monster.id}/?set=set2&size=180x180&bgset=bg1`}
          />
        }
      >
        {props.monster.name}
       <p> {props.monster.email}</p>
      </Card>
    </div>
  );
}
