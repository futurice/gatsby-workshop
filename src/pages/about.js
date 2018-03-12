import React from "react";
import autoBind from "react-autobind";
import Link from "gatsby-link";
import styled from "styled-components";
import Popup from "../components/Popup";
import Button from "../components/Button";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false
    };
    autoBind(this);
  }

  onTogglePopup() {
    this.setState(oldState => {
      return {
        isPopupOpen: !oldState.isPopupOpen
      };
    });
  }

  render() {
    return (
      <div>
        <h1>About {this.props.data.site.siteMetadata.title}</h1>
        <p>
          Luke Skywalker has returned to his home planet of Tatooine in an
          attempt to rescue his friend Han Solo from the clutches of the vile
          gangster Jabba the Hutt. Little does Luke know that the GALACTIC
          EMPIRE has secretly begun construction on a new armored space station
          even more powerful than the first dreaded Death Star. When completed,
          this ultimate weapon will spell certain doom for the small band of
          rebels struggling to restore freedom to the galaxy...
        </p>

        <Button onClick={this.onTogglePopup}>Open popup</Button>

        {this.state.isPopupOpen && <Popup onClose={this.onTogglePopup} />}
      </div>
    );
  }
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
