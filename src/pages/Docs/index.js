import React, { Component } from "react";
import Markdown from "react-markdown";
import AdSense from "react-adsense";
import _ from "lodash";

import { docsPageMap } from "../../websiteConfig";
import RouteLink from "../../components/RouteLink";
import "./index.css";

class Docs extends Component {
  state = {
    source: "## Loading..."
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
          renderers={{ link: RouteLink }}
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
