import React from "react";
import Link from "gatsby-link";

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Luke Skywalker has returned to his home planet of Tatooine in an attempt
      to rescue his friend Han Solo from the clutches of the vile gangster Jabba
      the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly
      begun construction on a new armored space station even more powerful than
      the first dreaded Death Star. When completed, this ultimate weapon will
      spell certain doom for the small band of rebels struggling to restore
      freedom to the galaxy...
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
