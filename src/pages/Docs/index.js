import React, { Component } from "react";
import { Link } from "react-router";
import AdSense from "react-adsense";
import { docsPageMap } from "../../websiteConfig";
import Markdown from "react-markdown";
import _ from "lodash";
import "./index.css";

class Docs extends Component {
  state = {
    source: "## Loading..."
  };

  RouterLink = props => {
    return props.href.match(/^(https?:)?\/\//) ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ) : (
      <Link to={props.href}>{props.children}</Link>
    );
  };

  fetchDocs = () => {
    const self = this;
    const { params } = this.props;
    if (_.includes(_.keys(docsPageMap), params.project)) {
      if (_.includes(docsPageMap[params.project], params.page)) {
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
    const { params } = this.props;

    return (
      <div id="md-container">
        <Markdown
          source={this.state.source}
          escapeHtml={false}
          renderers={{ link: this.RouterLink }}
        />
        {_.includes(docsPageMap[params.project], params.page) &&
          params.page !== "index" && (
            <AdSense.Google
              style={{ display: "block", textAlign: "center" }}
              client="ca-pub-3522556458609123"
              layout="in-article"
              slot="4737354731"
              format="fluid"
            />
          )}
      </div>
    );
  }
}

export default Docs;
