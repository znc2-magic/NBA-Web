import React from 'react';
import {Profile} from './Profile';
import nba from 'nba';
import {DataViewContainer} from './DataViewContainer';

export class Main extends React.Component {
  state = {
    playerInfo: {playerId: nba.findPlayer('Stephen Curry').playerId},
  };

  componentDidMount() {
    nba.stats.playerInfo({PlayerID: this.state.playerInfo.playerId}).then((info) => {
      const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      this.setState({playerInfo: playerInfo});
      console.log(playerInfo);
    })

  }

  render() {
    return (
      <div className="main">
        <Profile playerInfo={this.state.playerInfo}/>
        <DataViewContainer playerId={this.state.playerInfo.playerId}/>
      </div>
    );
  }
}