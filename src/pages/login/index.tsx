import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from 'antd';

function Index() {
  const navigate = useNavigate();
  const login = () => navigate('/home');
  
  return (
    <div>
      <Button onClick={login}>login</Button>
    </div>
  );
}

export default Index;
