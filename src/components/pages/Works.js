import React from "react";
import "../../App.css";
import "./Works.css";
import pat03 from "../../assets/pattern03.png";
import pat01 from "../../assets/pattern01.png";
import pat02 from "../../assets/pattern02.png";
import pat04 from "../../assets/pattern04.png";
import art01 from "../../assets/artwork01.png";
import art02 from "../../assets/artwork02.png";
import art03 from "../../assets/artwork03.png";
import art04 from "../../assets/artwork04.png";
import log01 from "../../assets/logo01.png";
import log02 from "../../assets/logo02.png";
import log03 from "../../assets/logo03.png";
import log04 from "../../assets/logo04.png";
import prod01 from "../../assets/product01.png";
import prod02 from "../../assets/product02.png";
import prod03 from "../../assets/product03.png";
import prod04 from "../../assets/product04.png";

export default function Works() {
  return (
    <div className="container3">
      <div className="image-grid-row">
        <div className="bubble01"></div>
        <div className="imgcont01">
          <div id="images01">
            <img src={pat01} />
            <img src={pat02} />
            <img src={pat03} />
            <img src={pat04} />
          </div>
          <div className="see-more01">
            <p>See more</p>
          </div>
          <a href="#patterns">
            <div className="text-on-img01">
              <p>Patterns</p>
            </div>
          </a>
        </div>
        <div className="bubble02"></div>
        <div className="imgcont02">
          <div id="images02">
            <img src={art01} />
            <img src={art02} />
            <img src={art03} />
            <img src={art04} />
          </div>
          <div className="see-more02">
            <p>See more</p>
          </div>
          <a href="#artwork">
            <div className="text-on-img02">
              <p>Artwork</p>
            </div>
          </a>
        </div>
        <div className="bubble03"></div>
        <div className="bubble04"></div>
      </div>
      <div className="image-grid-row2">
        <div className="bubble05"></div>
        <div className="bubble06"></div>
        <div className="imgcont03">
          <div id="images03">
            <img src={log01} />
            <img src={log02} />
            <img src={log03} />
            <img src={log04} />
          </div>
          <div className="see-more03">
            <p>See more</p>
          </div>
          <a href="#logos">
            <div className="text-on-img03">
              <p>Logos</p>
            </div>
          </a>
        </div>
        <div className="bubble07"></div>
        <div className="imgcont04">
          <div id="images04">
            <img src={prod01} />
            <img src={prod02} />
            <img src={prod03} />
            <img src={prod04} />
          </div>
          <div className="see-more04">
            <p>See more</p>
          </div>
          <a href="#productdesign">
            <div className="text-on-img04">
              <p>Product design</p>
            </div>
          </a>
        </div>
        <div className="bubble08"></div>
      </div>
      <div className="c-full">
        <div id="logos">
          <h1>Logos</h1>
          <div style={{ height: "500px" }}></div>
        </div>
        <div id="productdesign">
          <h1>Product design</h1>
          <div style={{ height: "500px" }}></div>
        </div>
        <div id="patterns">
          <h1>Patterns</h1>
          <div style={{ height: "500px" }}></div>
        </div>
        <div id="artwork">
          <h1>Artworks</h1>
          <div style={{ height: "500px" }}></div>
        </div>
      </div>
    </div>
  );
}
