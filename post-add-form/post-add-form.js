import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(event) {
        this.setState({
            text: ''
        })
        event.preventDefault();
        this.props.onAdd(this.state.text)
    }
    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    value={this.state.text}
                    onChange={this.onValueChange}
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        )
    }
}