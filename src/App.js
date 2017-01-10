/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Segment, Divider, Card, Input, Button, Form } from 'semantic-ui-react';
import Client from './Client';

import ArtObject from './Components/ArtObject';
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   const query = this.state.value;

   if (query !== '') {
    Client.search(query).then((response) => (
      this.setState({
        records: response.data
      })
    ));
   }
   event.preventDefault();
 }

  componentWillMount() {
    Client.getData().then((response) => (
        this.setState({
          records: response.data
        })
      ));
  }

// handleSearchCancel() {
//   this.setState({
//     matchingFoods: [],
//     showRemoveIcon: false,
//   });
//   this.refs.search.value = '';
// }

  render() {
    return (
      <div>
        <Segment inverted id="museum-title">
          <Divider horizontal inverted>The Getty</Divider>
        </Segment>
        <Segment stacked>
          <Form onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            placeholder='Search by city (Pekin, Shanghai, or Tianjin)'
            value={this.state.value}
            onChange={this.handleChange}/>
            <Button type="submit">Search</Button>
          </Form>
        </Segment>
        <Card.Group itemsPerRow={2}>
          {
            this.state.records.map((record, index) => <ArtObject key={index} artData={record.attributes} />)
          }
        </Card.Group>
      </div>


    );
  }
}

export default App;
