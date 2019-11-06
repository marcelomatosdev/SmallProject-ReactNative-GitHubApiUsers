import React from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
   return (
      <Container>
         <Form>
            <Input
               autoCorrect={false}
               autoCapitalize="none"
               placeholder="Add user"
            />
            <SubmitButton>
               <Icon name="add" size={20} color="#fff" />
            </SubmitButton>
         </Form>
      </Container>
   );
}

Main.navigationOptions = {
   title: 'GitHub Users',
};
