import React, { Component} from "react";
import "./Company.css"


class Company extends Component {
  render() {
    let company = this.props.company;

    return (
      <div className="Company">
        <div>
          <button
            className="Company-delete"
            type="button"
            onClick={() => this.props.onClickDelete(company.id)}
          >
          ❌
        </button>
        </div>

        <h3 className="Company-name"> {company.companyName}</h3>
        <h3> {company.position}</h3>

        {/* Applied Button */}
        {!company.applied &&
          <div>
            <button type="button" onClick={() => this.props.onClickAdd(company.id)}>
              I applied!
            </button>
          </div>
        }

        {/* Accepted Button */}
        {company.waitForResponse &&
          <div>
          <button type="button" onClick={() => this.props.onClickOffer(company.id)}>
            Accepted
          </button>
          <button type="button" onClick={() => this.props.onClickReject(company.id)}>
            Rejected
          </button>
          </div>
        }
      </div>
    );
  }

}

export {Company};