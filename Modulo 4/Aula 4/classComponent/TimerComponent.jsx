import { Component } from "react";

class TimerComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            contagem: 0
        }

    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState(prevState => ({
                contagem: prevState.contagem + 1
            }))
        }, 1000)
    }

    componentDidUpdate() {
        console.log(`o componente foi atualizado `)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <h1>{this.state.contagem}</h1>
        )
    }
}

export default TimerComponent