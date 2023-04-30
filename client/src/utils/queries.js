import { gql } from '@apollo/client';


export const LOCATIONS_QUERY = gql`
  query {
    locations {
      _id
      name
      coordinates
    }
  }
`;

export const LODGINGS_QUERY = gql`
  query lodgings($location: ID, $name: String) {
    lodgings(location: $location, name: $name) {
      _id
      name
      description
      location {
        _id
        name
        coordinates
      }
    }
  }
`;

export const ATTRACTIONS_QUERY = gql`
  query attractions($location: ID, $name: String) {
    attractions(location: $location, name: $name) {
      _id
      name
      description
      location {
        _id
        name
        coordinates
      }
    }
  }
`;

export const EATERIES_QUERY = gql`
  query eateries($location: ID, $name: String) {
    eateries(location: $location, name: $name) {
      _id
      name
      description
      location {
        _id
        name
        coordinates
      }
    }
  }
`;

export const USER_QUERY = gql`
  query {
    user {
      _id
      email
      location {
        _id
        name
        coordinates
      }
    }
  }
`;

export const JOURNAL_ENTRIES_QUERY = gql`
  query JournalEntries {
    journalEntries {
      id
      date
      title
      content
    }
  }
`;
