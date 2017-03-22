import React from "react";

export default class Wobble extends React.Component {

  render(){

    const boxStyle = {
      backgroundColor: "#2E3532",
      height: "100%",
      width: "100%",
    }

    const headerStyle = {
      color: "#D6D2D2",
      lineHeight: "150%"
    }

    const textStyle = {
      color: "#D6D2D2",
      fontSize: "19px"
    }

    const containerStyle = {
      paddingLeft: "5%"
    }

    const paddingTop = {
      paddingTop: "5%"
    }

    return(
      <div id="box" style={boxStyle}>
        <div class ="container-fluid" style={containerStyle}>
          <div class="row">
            <div class="col-sm-6">
              <div class="title">
                <h1 style={{...headerStyle,...paddingTop}}>The Wobble</h1>
              </div>
              <div class="ingredients">
                <h4 style={headerStyle}>- 2.4lbs Pilsner malt</h4>
                <h4 style={headerStyle}>- 1.6lbs Corn Grist</h4>
                <h4 style={headerStyle}>- 2oz Black Matl</h4>
                <h4 style={headerStyle}>- 1oz of Cluster hops</h4>
              </div>
              <div class="text" style={paddingTop}>
                <p style={textStyle}>
                  Mash and sparge, 1oz of hops at start of boil.
                </p>
                <p style={textStyle}>
                  Cool Immediatly, add a ale type yeast and transfer to roomtemperature area.
                </p>
                <p style={textStyle}>
                  You could add a pilsner type yeast and made a so called 'steam beer'.
                </p>
                <p style={textStyle}>
                  Allow to ferment for about a month. Bottle and serve.
                </p>
                <p style={textStyle}>
                  This recipie is designed for a 3 gallon batch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
