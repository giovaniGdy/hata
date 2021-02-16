import React from "react";

import NavbarSelector from "../../components/navbar/navbar-selector";

export default class Home extends React.Component {
  render() {
    return (
      <body>
        <header>
          <nav>
            <NavbarSelector />
          </nav>
        </header>
        <div className="sub-body">
          
        </div>
      </body>
    );
  }
}
