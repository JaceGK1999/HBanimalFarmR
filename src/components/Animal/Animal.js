import React from 'react';

export default function Animal({ name, say, top, left, type }) {
  return (
    <>
      <div className="animal" style={{ top, left }}>
        <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
        <span className="name">{name}</span>
        <span>{say}</span>
      </div>
    </>
  );
}
