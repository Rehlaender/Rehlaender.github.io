import React from 'react';

export const StageredWord = (props) => {

  const { words } = props;

  const listItems = words.map((word, i) => {
    return [...word].map((letter, j) => (
      <p ke={j}>
        {letter}
      </p>
      )
    )
  });

  return (
    <div>
      {listItems}
    </div>
  );
}
