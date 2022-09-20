
import './styles.css';
import { useNavigate } from 'react-router-dom'; 

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }
    navigate('/chat',{replace:true});
  };
  return (
    <div className="container">
      <div className={"formContainer"}>
        <h1><center>{`Magely ChatRoom`}</center></h1>
        <input className={"input"} 
        placeholder='Username...' 
        onChange={(e) => setUsername(e.target.value)}/>
        <select className={"input"}
        onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='Public_ChatRoom'>Public_ChatRoom</option>
          <option value='Games_Forum'>games_Forum</option>
          <option value='Vibes'>Vibes</option>
          <option value='Music_Forum'>Music_Form</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;