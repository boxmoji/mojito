import keycode from "keycode";
import React from "react";
import {injectIntl} from "react-intl";
import {Button, FormControl, FormGroup, Glyphicon, InputGroup} from "react-bootstrap";
import PropTypes from "prop-types";

class BranchesSearchText extends React.Component {

    static propTypes = {
        "searchText": PropTypes.string.isRequired,
        "isSpinnerShown": PropTypes.bool.isRequired,

        "onBranchesSearchTextChanged": PropTypes.func.isRequired,
        "onPerformSearch": PropTypes.func.isRequired
    }

    onKeyDownOnSearchText(e) {
        e.stopPropagation();
        if (e.keyCode === keycode("enter")) {
            this.props.onPerformSearch();
        }
    }

    onSearchButtonClicked() {
        this.props.onPerformSearch();
    }

    renderSearchButton() {
        return (
            <Button onClick={() => this.onSearchButtonClicked()}>
                <Glyphicon glyph='glyphicon glyphicon-search'/>
            </Button>
        );
    }

    render() {
        return (
            <div className="col-xs-6 search-text">
                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' value={this.props.searchText}
                                     onChange={(e) => this.props.onBranchesSearchTextChanged(e.target.value)}
                                     placeholder={this.props.intl.formatMessage({id: "branches.searchtext"})}
                                     onKeyDown={(e) => this.onKeyDownOnSearchText(e)}/>
                        <InputGroup>
                            {this.props.isSpinnerShown && (<span className="glyphicon glyphicon-refresh spinning"/>)}
                        </InputGroup>
                        <InputGroup.Button>{this.renderSearchButton()}</InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
};

export default injectIntl(BranchesSearchText);
