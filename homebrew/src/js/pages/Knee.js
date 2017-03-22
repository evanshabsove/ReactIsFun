import React from "react";

export default class Homepage extends React.Component {

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
                <h1>The Knee</h1>
              </div>
              <div class="ingredients" style={paddingTop}>
                <h4 style={headerStyle}>- 4lbs of pale malt</h4>
                <h4 style={headerStyle}>- 1lbs of crystal 40 or 60</h4>
                <h4 style={headerStyle}>- 1oz of Centenial hops</h4>
                <h4 style={headerStyle}>- 1oz of Cascade hops</h4>
              </div>
              <div class="text" style={paddingTop}>
                <p style={textStyle}>
                  Mash and sparge, add 0.25oz of Cascade hops at start of boil and again at 35. Add 0.5oz of cascade at 20min and again at 5.
                </p>
                <p style={textStyle}>
                  Cool Immediatly, add a ale type yeast and transfer to roomtemperature area.
                </p>
                <p style={textStyle}>
                  Add rest of Cascade hops during secondary fermentation to dry hop.
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
