import React from "react";
import { Menu, Segment } from 'semantic-ui-react';

const Navbar = () => {

  return (
    <div>
      <Menu attached="top">
        

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search animals..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>

      <Segment attached="bottom">
        <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    </div>
  );
};

export default Navbar;
