import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String, 
    $lastName: String, 
    $email: String, 
    $password: String) {
    updateUser(
        firstName: $firstName,
        lastName: $lastName,
        email: $email, 
        password: $password) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const ADD_LODGING = gql`
  mutation addLodging(
    $name: String!
    $description: String!
    $image: String!
    $locationId: ID!
    $price: Float!
    $occupancy: Int!
  ) {
    addLodging(
      name: $name
      description: $description
      image: $image
      locationId: $locationId
      price: $price
      occupancy: $occupancy
    ) {
      _id
      name
      description
      image
      locationId
      price
      occupancy
    }
  }
`;

export const ADD_ATTRACTION = gql`
  mutation addAttractions(
    $name: String!, 
    $description: String!, 
    $image: String!, 
    $locationId: ID!, 
    $price: Float!, 
    $start_time: String!, 
    $end_time: String!
  ){
    addAttraction(
        name: $name , 
        description: $description , 
        image: $image, 
        locationId: $locationId, 
        price: $price, 
        start_time: $start_time, 
        end_time: $end_time
    ) {
      _id
      name
      description
      image
      locationId
      price
      start_time
      end_time
    }
  }
`;

export const ADD_EATERY = gql`
mutation addEatery(
  $name: String!, 
  $description: String!, 
  $image: String!, 
  $locationId: ID!, 
  $price: Float!, 
  $cuisine: String!
){
  addEatery(
      name: $name , 
      description: $description , 
      image: $image, 
      locationId: $locationId, 
      price: $price, 
      cuisine: $cuisine
  ) {
    _id
    name
    description
    image
    locationId
    price
    cuisine
    }
  }
`;

export const CREATE_JOURNAL_ENTRY = gql`
  mutation createJournalEntry(
    $date: String!, 
    $title: String!, 
    $content: String!
  ) 
    {
    createJournalEntry(
      date: $date, 
      title: $title,
      content: $content) 
    {
      id
      date
      title
      content
    }
  }
`;

