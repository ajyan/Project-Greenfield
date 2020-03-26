import React from "react";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class StyleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testPics: [
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4"
      ]
    };
  }

  render() {
    return (
      <div className="styleSelectorDiv container-fluid">
        <div class="styleSelectBox container-fluid">
          {" "}
          <p className="row selectedStyleTitle">STYLE > SELECTED STYLE</p>
          <div className="row styleSelectRow">
            <Container>
              <Row className="container-fluid">
                {this.state.testPics.slice(0, 4).map(pic => {
                  return (
                    <Col xs={6} md={6} lg={3} id="styleFirstRow">
                      <Image
                        width="90%"
                        class="styleCircles"
                        src={pic}
                        roundedCircle
                        fluid
                        responsive
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                {this.state.testPics.slice(4).map(pic => {
                  return (
                    <Col xs={6} md={6} lg={3} id="styleSecondRow">
                      <Image
                        width="90%"
                        class="styleCircles"
                        src={pic}
                        roundedCircle
                        fluid
                        responsive
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
