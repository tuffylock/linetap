var React = require('react');

var InfoDisplay = React.createClass({
  render: function () {
    return (
      <div className="info-pane">
        <div className="info">
          <div className="infoo-inset" />
          <h1>Fix your typing, not your typos.</h1>

          <p>Touch typing means typing words, not letters. Typos don't appear out of nowhere, they're a product of your history and a character's surroundings. Muscle memory, built over time, is difficult to adjust when the words that trip us up the most often are the ones we type the least frequently, and by the time you make a mistake the only skill you're practicing is correcting it faster.</p>

          <p>Proto-typist trains you to get it right the first time - enforcing immediate repetition, rather than allowing backspace or only accounting for errors when calculating your accuracy. By honing in on problem areas and maintaining the full context that led you to make the mistake in the first place bad habits are remedied, not just acknowledged.</p>

        </div>
      </div>
    );
  }
});

module.exports = InfoDisplay;
