import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div className="item" key={projects.title}>
            <a title={projects.title}>
              <img alt={projects.title} src={projectImage} />
            </a>
            <a aria-current="page" className="">
              <h2 className=" ProjectRow__SubHeading-sc-1myfgsx-4">
                {projects.title}
              </h2>
            </a>
            <p className="Paragraph-sc-1tzuhix-0 ProjectRow__ProjectParagraph-sc-1myfgsx-5 ckUDHG">
              {projects.category}
            </p>
            <a href={projects.url}>
              <p className="Paragraph-sc-1tzuhix-0 ProjectRow__ProjectLink-sc-1myfgsx-1 cTfmBX">
                View Project <span></span>
              </p>
            </a>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <h1>
          <span>View my work</span>
        </h1>
        <div className="container">{projects}</div>
      </section>
    );
  }
}

export default Portfolio;
