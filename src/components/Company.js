import React, { Component} from "react";
import "./Company.css"


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    let company = this.props.company;

    return (
      <div className="Company">
        <h3> {company.companyName}</h3>
        <h3> {company.position}</h3>
        {!company.applied &&
          <button
            type="button"
            onClick={() => this.props.onClick(company.id)}
          >
          Finished Applying
          </button>}
      </div>
    );
  }

}

export {Company};