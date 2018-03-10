import React from 'react';
import nba from 'nba';
import { AutoComplete, Input, Icon } from 'antd';

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    const players = nba.searchPlayers(value);
    console.log(players);
    this.setState({
      dataSource: !value ?
        [] : nba.searchPlayers(value).map((player) => player.fullName),
    });
  }

  onSelect= (name) => {
    this.props.handleSelectPlayer(name);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        className="search-bar"
        dataSource={dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Search NBA Player"
        size="large"
      >
        <Input suffix={<Icon type="search"/>}/>
      </AutoComplete>
    );
  }
}