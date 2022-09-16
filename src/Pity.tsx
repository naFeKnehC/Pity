import * as React from "react";
import {useState} from "react";

interface props {

}

export const Pity: React.FC<props> = () => {

  const [test] = useState('aaa');

  return (
    <div>{test}</div>
  );
};

