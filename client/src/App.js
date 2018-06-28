import React, { Component } from "react";
import ApollowClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

const client = new ApollowClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
