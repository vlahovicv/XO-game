import React from 'react'
//import io from 'socket.io-client'
import { connect } from 'react-redux'
import { reciveMessage, sendMessage } from '../actions'

//const socket = io.connect('http://localhost:3001')
//state za mess i name, i state za chat kako bi se rirenderovao
//funkcije za on submit, onChange, i renderChat


class Chat extends React.Component {
    componentDidMount() {
        this.props.reciveMessage()
    }

    onMessageSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage(e.target[0].value, e.target[1].value)
    }
    onChange = (e) => {
        //console.log(e)
    }
    renderMessages() {
        return <div>
            <h3>name: {this.props.name}</h3>
            <h3>message: {this.props.message}</h3>
        </div>
    }
    render() {
        return(
            <div>
                <form onSubmit={(e) => this.onMessageSubmit(e)}>
                    <label>
                        Name:
                        <input onChange={(e) => this.onChange(e) }type="text" name="message" />
                    </label>
                    <label>
                        Message:
                        <input onChange={(e) => this.onChange(e) }type="text" name="message" />
                    </label>
                    <input type="submit" value="Send" />
                </form>
                {this.renderMessages()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        name: state.chat.name,
        message: state.chat.message
    }
}
export default connect(mapStateToProps, { sendMessage, reciveMessage })(Chat)