import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import { Divider, Form, Label , Container, Grid, Segment,Button,
Image 
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
    <Container>
      <Grid columns='16'>
         <Grid.Column>
          </Grid.Column>
      </Grid>
         <Grid columns='16'>
         <Grid.Column>
          </Grid.Column>
      </Grid>
         <Grid columns='16'>
         <Grid.Column>
          </Grid.Column>
      </Grid>
    <Grid columns='16'>
         <Grid.Column>
          </Grid.Column>
      </Grid>
      <Grid columns='equal'>
      <Grid.Column>
    </Grid.Column>
    <Grid.Column width={12}>
      <Segment>
 <center><Image src={logo} size='medium' shape='rounded' className='logo' fluid/></center>
  <Form>
    <Form.Field>
      <input type='text' placeholder='User or Email' type='text' />
    </Form.Field>
    <Form.Field>
      <input type='text' placeholder='Password' type='password' />
    </Form.Field>
     <Button color="gray" size='large' fluid >
     Entrar
  </Button>
  </Form>
  </Segment>
  </Grid.Column>
     <Grid.Column>
    
    </Grid.Column>

  </Grid>
  </Container>
     
    );
  }
}



export default App;
