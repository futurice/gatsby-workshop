import React from "react";
import autoBind from "react-autobind";
import Link from "gatsby-link";
import styled from "styled-components";
import Popup from "../components/Popup";
import Button from "../components/Button";
import H1 from "../components/H1";

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 150%;
  font-size: 18px;
`;

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
        <H1>About {this.props.data.site.siteMetadata.title}</H1>
        <Paragraph>
          Luke Skywalker has returned to his home planet of Tatooine in an
          attempt to rescue his friend Han Solo from the clutches of the vile
          gangster Jabba the Hutt. Little does Luke know that the GALACTIC
          EMPIRE has secretly begun construction on a new armored space station
          even more powerful than the first dreaded Death Star. When completed,
          this ultimate weapon will spell certain doom for the small band of
          rebels struggling to restore freedom to the galaxy...
        </Paragraph>

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
