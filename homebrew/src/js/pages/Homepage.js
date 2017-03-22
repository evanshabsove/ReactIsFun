import React from "react";

export default class Homepage extends React.Component {


  render(){

    const styleHeight = {
      height: "100%"
    }

    const carousel = {
      position: "absolute",
      height: "100%",
      top: "0"
    }

    return(
      <div id="myCarousel" class="carousel slide" data-ride="carousel" style={carousel}>
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox" style={styleHeight}>
          <div class="item active" style={styleHeight}>
            <img src="pictures/the-shine.jpg" alt="Shine"></img>
            <div class="carousel-caption">
              <div>
                <h3>The Shine</h3>
              </div>
              <p>A classic americain pilsner, comes out fast and finishes clean.</p>
            </div>
          </div>

          <div class="item" style={styleHeight}>
            <img src="pictures/the-knee.jpg" alt="The knee"></img>
            <div class="carousel-caption">
              <div>
                <h3>The Knee</h3>
              </div>
              <p>A hoppy full bodied IPA will give a strong punch with every drink.</p>
            </div>
          </div>
          <div class="item" style={styleHeight}>
            <img src="pictures/kentucky.jpg" alt="Wobble"></img>
            <div class="carousel-caption">
              <div>
                <h3>The Wobble</h3>
              </div>
              <p> The Kentucky Common. An easy drinking beer, just as easy as getting a grab, will leave a malty taste in your mouth.</p>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
