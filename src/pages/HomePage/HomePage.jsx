import React, { useState } from "react";
import { HomeImage } from "../../assets";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import api from "../../api"
import Modal from "../../components/Modal/Model";

function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      user_email: '',
      user_name: '',
      password: ''
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      api.login.register(formData).then((response) => {
        if(response){
          setIsModalOpen(false); 
        }
     });  
  };
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let login = {
      "user_email": username,
      "user_password": password
  };
  api.login.login(login).then((response) => {
   localStorage.setItem('responseData', JSON.stringify(response?.body));
   if(response){
    navigate("/dashboard")
   }
});  
};
  return (
    <div className="login-page">
      <div className="login-left">
        {!isLoginClicked ? (<div style={{ display: "flex", flexDirection: "column" }}>
          <div class="title-div">
            <h1>MoneyMinder</h1>
          </div>
          <h2 style={{ color: "#392c44"}}>Mind Your money & Ease Expense tracking</h2>
          <div style={{ marginTop: "25px" }}>
          <p>
  Don't Have an account? 
  <button 
    style={{ 
      color: "#28317a", 
      fontWeight: 'bold', 
      cursor: 'pointer', 
      background: 'none', 
      border: 'none', 
      padding: 0,
      textDecoration: 'underline',
      marginLeft: '4px'
    }} 
    onClick={() => { setIsModalOpen(true); }}
  >
    Register
  </button>
</p>
<p>
  Have an account? 
  <button 
    style={{ 
      color: "#28317a", 
      fontWeight: 'bold', 
      cursor: 'pointer', 
      background: 'none', 
      border: 'none', 
      padding: 0,
      textDecoration: 'underline',
      marginLeft: '4px'
    }} 
    onClick={() => { setIsLoginClicked(true); }}
  >
    Login
  </button>
</p>

          </div>
        </div>) : (
          <>
            <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" style={{ backgroundColor: '#28317a'}}>Login</button>
            </div>
          </form>
        </div>
          </>
        )}
      </div>
      <div className="login-right">
        <div>
          <img src={HomeImage} alt="Logo" />
        </div>
      </div>
      {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <form onSubmit={handleFormSubmit}>
                    <p style={{ color: "#28317a", fontWeight: 'bold' }}>
              Register Form
            </p>
                    <div className="form-group">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Username:
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
              <button type="submit" style={{ backgroundColor: '#28317a'}}>Submit</button>
              <button type="button" style={{ backgroundColor: '#ffffff', color: "#000000" }} onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
                    </form>
                </Modal>
            )}
    </div>
  );
}

export default HomePage;
