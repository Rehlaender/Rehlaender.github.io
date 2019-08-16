import React from 'react';

import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import {PROYECTS} from '../constants/PROYECTS';

const selectNumOfDoneTodos = createSelector(
  state => state.todos,
  todos => todos
)

const DoneTodosCounter = () => {
  const NumOfDoneTodos = useSelector(selectNumOfDoneTodos)
  return <div>{JSON.stringify(NumOfDoneTodos)}</div>
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <div id="home">
          sweet home alabama
        </div>
      </div>
    )
  }
}

export default Home;