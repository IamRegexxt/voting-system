import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Button, MenuList, ListItemIcon } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const Navigation = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = JSON.parse(localStorage.getItem("token"));
        setUser(response.data);
        
        navigate("/dashboard");
      } catch (error) {
        console.error("Failed to Fetch User", error);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };



  return (
    <>




      <AppBar position="absolute" style={{ backgroundColor: '#333333' }}>
        <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography style={{ fontSize: '20px' }} variant="h6" color="inherit" component="div">
            Election System
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Nav>
              <Nav.Item>
                <Button
                    component={Link}
                    to="/dashboard/candidates"
                    variant="outlined"
                    style={{ color: 'white', borderColor: 'white', marginLeft: '20px' }}
                >
                  Candidates
                </Button>
              </Nav.Item>
            </Nav>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', flex: 1 }}>
              <Nav>
                <Nav.Item>
                  <Button
                      component={Link}
                      to="/dashboard/positions"
                      variant="outlined"
                      style={{ color: 'white', borderColor: 'white', marginLeft: '20px' }}
                  >
                    Position
                  </Button>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Typography style={{ marginLeft: '20px', fontSize: '20px' }}>
            {users ? `${users.user.name}` : 'User'}
            <Button style={{ marginLeft: '20px' }} color="inherit" onClick={handleLogout}>Logout
              <ExitToAppOutlinedIcon />
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>



    </>
  );
};

export default Navigation;
