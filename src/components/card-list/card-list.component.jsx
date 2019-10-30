import React from "react";
import { Row, Col } from "antd";
import Card from "../card/card.component";
import "antd/dist/antd.css";
export default function CardList(props) {
  return (
    <div>
      <Row gutter={24}>
        {props.monsters.map(monster => {
          return (
            <Col span={8} key={monster.id}>
              <Card key={monster.id} monster={monster} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
