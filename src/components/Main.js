import React from 'react';
import {ShotChart} from './ShotChart';
import {Profile} from './Profile';
import nba from 'nba';

export class Main extends React.Component {
  state = {
    playerId: nba.findPlayer('Stephen Curry').playerId,
    playerInfo: {},
  };

  componentDidMount() {
    nba.stats.playerInfo({PlayerID: this.state.playerId}).then((info) => {
      const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      this.setState({playerInfo: playerInfo});
      console.log(playerInfo);
    })

  }

  render() {
    return (
      <div className="main">
        <Profile playerInfo={this.state.playerInfo}/>
        <ShotChart playerId={this.state.playerId}/>
      </div>
    );
  }
}

//https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612745/2017/260x190/201935.png
//https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612739/2017/260x190/2544.png