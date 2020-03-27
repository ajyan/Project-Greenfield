import React from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let ComparisonModal = (props) => {
  let currentName = props.product.name
  let compareName = props.compare.name
  let currentFeatures = props.product.features
  let compareFeatures = props.compare.features
  let totalFeatures = [];
  for (let feature of currentFeatures) {
    if (totalFeatures.indexOf(feature) === -1) {
      totalFeatures.push(feature)
    }
  }
  if (compareFeatures) {
    for (let feature of compareFeatures) {
      if (totalFeatures.indexOf(feature) === -1) {
      totalFeatures.push(feature)
      }
     }
  }

    return (
        
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              COMPARING
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              {currentName}
            </Col>
            <Col xs={6} md={4}>
              {compareName}
            </Col>
          </Row>
        
          <Row className="show-grid">
            <Col xs={6} md={4}>
                Value of Product # 1
            </Col>
            <Col xs={6} md={4}>
                Feature
            </Col>
            <Col xs={6} md={4}>
                Value of Product # 2
            </Col>
          </Row>
        </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ComparisonModal