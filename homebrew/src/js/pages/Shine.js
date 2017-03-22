import React from "react";

export default class Shine extends React.Component {


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

    console.log(headerStyle);
    return(
      <div id="box" style={boxStyle}>
        <div class ="container-fluid" style={containerStyle}>
          <div class="row">
            <div class="col-sm-6">
              <div class="title">
                <h1 style={{...headerStyle,...paddingTop}}>The Shine</h1>
              </div>
              <div class="ingredients" style={paddingTop}>
                <h4 style={headerStyle}>- 2.5lbs of 2 row malt</h4>
                <h4 style={headerStyle}>- 1.5lbs of corn grist</h4>
                <h4 style={headerStyle}>- 3 oz of Saaz Hops</h4>
              </div>
              <div class="text" style={paddingTop}>
                <p style={textStyle}>
                  Mash and sparge, add all hops at beginning of 60 min boil.
                </p>
                <p style={textStyle}>
                  Cool Immediatly, add a Pilsner type yeast and transfer to a cool
                  area (around 4 degrees).
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
