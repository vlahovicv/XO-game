// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { createLobby, reciveLobbyId } from '../actions'


// class LobbiesList extends React.Component {
//     componentDidMount() {
//         this.props.reciveLobbyId()
//     }
//     createLobby(e) {
//         e.preventDefault()
//         this.props.createLobby(this.props.currentUserId, '111')
//     }
//     renderCreate() {
//         if(this.props.isSignedIn) {
//             return(
//                 <div style={{textAlign: 'right'}}>
//                     {/* <Link to={`xo/${this.props.lobbyId}`} className='ui button primary'> */}
//                         <button onClick={(e) => this.createLobby(e)}>Create Lobby</button>
//                     {/* </Link> */}
//                 </div>
//             )
//         }
//     }
//     renderList() {
//        //return this.props.lobbyId.map((lobby, i )=> {
//             return(
//             <div className='item'>
//                 <i className='large middle aligned icon camera' />
//                 <div className='content'>
//                     {/* <Link to={`/xo/${this.props.lobbyId}`} className='header'>
//                         game
//                     </Link> */}
//                     <div className='description'>
//                         game desc
//                     </div>      
//                 </div>
//             </div>
//             )
//         //})
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Games</h2>
//                 {/* <div className='ui celled list'>{this.renderList()}</div> */}
//                 {this.renderCreate()}
//                 {this.props.lobbyId}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return { 
//         //games: Object.values(state.games),
//         currentUserId: state.auth.userId,
//         isSignedIn: state.auth.isSignedIn,
//         lobbyId: state.lobby.lobbyId
//     }
// }

// export default connect( mapStateToProps, { createLobby, reciveLobbyId })(LobbiesList)