import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import backgroundImg from '../../background.png';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})`, top }}>
      {animals.map((item) => (
        <Animal key={item.name} {...item} />
      ))}
    </main>
  );
}
