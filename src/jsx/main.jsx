import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class Tile extends React.Component {

      render() {
        return <div className='tile' data-index={this.props.num} onClick={this.handleClick} >{this.props.num}</div>
      }
    }

    class Board extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          tiles: []
        }
      }

      renderTile(i) {
        return <Tile key={i} num={i} onClick={this.clickTile} />
      }


      render() {
        console.log(this.state.tiles);
        for(let i=1; i<16; i++) {
          this.state.tiles.push(this.renderTile(i));
        }

        this.state.tiles.push(<div className="empty" key={16}></div>)

        return (
          <div id="game-board">
              {this.state.tiles}
          </div>
        )
      }
    }
    ReactDOM.render(
      <Board />,
      document.getElementById('app')
    );
});
