import React, { Component } from 'react';
import './ToDo.css';

const init = [
    {
        value: 'value',
        style: {
            
        }
    }
]

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            init: init,
            adder: false,
            value: ''
        };

        this.handleText = this.handleText.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
    }

    handleText(text) {
        this.setState({
            todo: {
                value: text.target.value,
            },
            value: text.target.value
        });
    }

    remove(el) {
        el.style = {
            animationName: 'disappear',
            animationDuration: '.6s',
            animationTimingFunction: 'cubic-bezier(.53,-0.17,.91,-0.2)',
        }
        this.setState(this.state);
        const update = this.state.init.filter(e => {
            console.log(e !== el);
            return e !== el;
        });
        setTimeout(() => {this.setState({ init: update })}, 600);
    }

    add(e) {
        e.preventDefault();
        e.stopPropagation();

        var todo = [this.state.todo];
        todo.push(...this.state.init);
        console.log(todo);
        this.setState({ 
            init: todo,
            adder: false,
            value: '',
            time: ''
        });
    }

    showAdder() {
        this.setState({adder: true});
    }

    render() {
        return (
            <div>
                <div className="todo">
                    {/* <h1>Tasks:</h1> */}
                    {this.state.init.map((e, i) => {
                        return (
                            <div style={e.style} className="task" key={i}>
                                <div className="content">
                                    <div className="left">{e.value}</div>
                                </div>
                                    <div className="time">{e.time}</div>
                                    <button onClick={() => this.remove(e)} className="right">x</button>
                            </div>
                        )
                    })}
                </div>
                <div className="addControls">
                <form className={this.state.adder ? "appear form" : "form"} onKeyDown={(e) => (e.keyCode == 13) ? this.add(e) : console.log('please press enter')}>
                    <input onChange={this.handleText} className="input shadow" type="text" value={this.state.value} placeholder="Type your task..."/>
                    <button onClick={(e) => this.add(e)} type="button">add</button>
                </form>
                <button onClick={() => this.showAdder()} className="plusButton shadow"><img src={require('./img/plus.svg')} alt="plus" className="plusIcon"/></button>
                </div>
            </div>
        )
    }
}

export default ToDo;