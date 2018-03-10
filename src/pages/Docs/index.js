import React, { Component } from "react";
import { Link } from "react-router";
import Markdown from "react-markdown";
import _ from "lodash";
import "./index.css";

const pageMap = {
  projects: ["core", "mobile", "desktop", "api", "faq"],
  pages: ["index"]
};

class Docs extends Component {
  state = {
    source: "## Loading..."
  };

  RouterLink = props => {
    return props.href.match(/^(https?:)?\/\//) ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    ) : (
      <Link to={props.href}>{props.children}</Link>
    );
  };

  fetchDocs = () => {
    const self = this;
    const { params } = this.props;
    if (_.includes(pageMap.projects, params.project)) {
      if (_.includes(pageMap.pages, params.page)) {
        fetch(`/md/${params.project}/${params.page}.md`).then(
          self.responseProcessing
        );
      } else {
        fetch(`/md/${params.project}/index.md`).then(self.responseProcessing);
      }
    } else {
      fetch(`/md/index.md`).then(self.responseProcessing);
    }
  };

  responseProcessing = response => {
    const self = this;
    if (response.status >= 200 && response.status < 300) {
      response.text().then(function(text) {
        self.setState({ source: text });
      });
    } else {
      self.setState({
        source:
          "## OOPS! Something went wrong! <br /> [Return to the docs](/docs)"
      });
    }
  };

  componentDidMount() {
    this.fetchDocs();
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (
      prevProps.params.project !== props.params.project ||
      prevProps.params.page !== props.params.page
    ) {
      this.fetchDocs();
    }
  }

  render() {
    return (
      <div id="md-container">
        <Markdown
          source={this.state.source}
          escapeHtml={false}
          renderers={{ link: this.RouterLink }}
        />
      </div>
    );
  }
}

export default Docs;
