import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Radio from "./Radio";
import { Form, Button, FormGroup } from "react-bootstrap";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { Player } from "video-react";
import ReactAudioPlayer from "react-audio-player";
import { BsGithub } from "react-icons/bs";

function App() {
  const [source, setSource] = React.useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [imgRow1Col1, setImgRow1Col1] = useState("");
  const [imgRow2Col1, setImgRow2Col1] = useState("");
  const [imgRow3Col1, setImgRow3Col1] = useState("");
  const [imgRow4Col1, setImgRow4Col1] = useState("");

  const [imgRow1Col2, setImgRow1Col2] = useState("");
  const [imgRow2Col2, setImgRow2Col2] = useState("");
  const [imgRow3Col2, setImgRow3Col2] = useState("");
  const [imgRow4Col2, setImgRow4Col2] = useState("");

  const [row1Col3, setRow1Col3] = useState("");
  const [row2Col3, setRow2Col3] = useState("");
  const [row3Col3, setRow3Col3] = useState("");
  const [row4Col3, setRow4Col3] = useState("");

  const [row1Col4, setRow1Col4] = useState("");
  const [row2Col4, setRow2Col4] = useState("");
  const [row3Col4, setRow3Col4] = useState("");
  const [row4Col4, setRow4Col4] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const inputRef = React.useRef();

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const vidRef = useRef(null);
  // vidRef.current.stop();
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  const radioChange = (e) => {
    setSelectedOption(e.currentTarget.value);
    if (e.currentTarget.value == "video1") {
      setSource("/images/row1.mp4");
    } else if (e.currentTarget.value == "video2") {
      setSource("/images/row2.mp4");
    } else if (e.currentTarget.value == "video3") {
      setSource("/images/row3.mp4");
    } else {
      setSource("/images/row4.mp4");
    }
  };

  const onLoadClick = (e) => {
    setImgRow1Col1("/images/column1-row1.png");
    setImgRow2Col1("/images/column1-row2.png");
    setImgRow3Col1("/images/column1-row3.png");
    setImgRow4Col1("/images/column1-row4.png");
  };

  const onExplainTextClick = (e) => {
    setImgRow1Col1("/images/column1-row1.png");
    setImgRow2Col1("/images/column1-row2.png");
    setImgRow3Col1("/images/column1-row3.png");
    setImgRow4Col1("/images/column1-row4.png");
  };

  const onExplainAUsClick = (e) => {
    setImgRow1Col2("/images/column2-row1.png");
    setImgRow2Col2("/images/column2-row2.png");
    setImgRow3Col2("/images/column2-row3.png");
    setImgRow4Col2("/images/column2-row4.png");
  };

  const onExplainAudio = (e) => {
    setRow1Col3("/images/row1-col3.wav");
    setRow2Col3("/images/row2-col3.wav");
    setRow3Col3("/images/row3-col3.wav");
    setRow4Col3("/images/row4-col3.wav");
    setRow1Col4("/images/row1-col4.wav");
    setRow2Col4("/images/row2-col4.wav");
    setRow3Col4("/images/row3-col4.wav");
    setRow4Col4("/images/row4-col4.wav");
  };

  return (
    <>
      <Header />
      <div
        className="container1"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Row className="--cui-gutter-x-0.5">
            <Col xs="auto">
              <Form.Text style={{ color: "black", padding: "0" }}>
                Dialog Directory
              </Form.Text>
            </Col>
            <Col xs="auto">
              <Form.Control
                type="text"
                size="sm"
                placeholder="file name"
                readonly="readonly"
                value="http://localhost:3000/agiyd7ohg"
                // onChange={(e) => setName(e.target.value)}
                // defaultValue={searchParams.get("name")}
              />
            </Col>
            <Col xs="auto">
              <Button
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => handleChoose(e)}
              >
                Browse
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => onLoadClick(e)}
              >
                Load
              </Button>
            </Col>
          </Row>

          <Card
            style={{
              width: "30rem",
              marginBottom: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <input
              ref={inputRef}
              className="VideoInput_input"
              directory=""
              webkitdirectory=""
              type="file"
              onChange={handleFileChange}
              // accept=".mov,.mp4"
              style={{ display: "none" }}
            />
            {/* <Card.Img src="/images/xxx.png" /> */}
            {/* <Player playsInline src={videoSrc} fluid={false} /> */}
            <video
              ref={vidRef}
              className="VideoInput_video"
              // width="100%"
              controls
              src={source}
            />
          </Card>

          <Row className="align-items-center mb-3">
            <Col xs="auto">
              <Form.Check type={"radio"} id={`default-radio`} label={`Text`} />
            </Col>
            <Col xs="auto">
              <Form.Check
                type={"radio"}
                id={`default-radio`}
                label={`Text + Audio`}
              />
            </Col>
            <Col xs="auto">
              <Form.Check
                defaultChecked
                type={"radio"}
                id={`default-radio`}
                label={`Text + Audio + Visual`}
              />
            </Col>
          </Row>

          <Row className="align-items-center mb-3 ">
            <Col xs="auto">
              <Button
                class="btn btn-outline-secondary mr-1"
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => handlePlayVideo(e)}
              >
                Classify
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                class="btn btn-outline-secondary mr-1"
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => onExplainTextClick(e)}
              >
                Explain Text
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                class="btn btn-outline-secondary mr-1"
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => onExplainAUsClick(e)}
              >
                Explain AUs
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                class="btn btn-outline-secondary mr-1"
                variant="secondary"
                type="submit"
                size="sm"
                onClick={(e) => onExplainAudio(e)}
              >
                Explain Visual
              </Button>
            </Col>
          </Row>
        </div>

        {/* <Radio /> */}

        <div>
          <Form.Check
            // style={{padding: "10px"}}
            value="video1"
            className="radio"
            type={"radio"}
            id={`default-radio`}
            label={`Video 1`}
            checked={selectedOption === "video1"}
            onChange={(e) => radioChange(e)}
          />

          <Form.Check
            value="video2"
            className="radio"
            type={"radio"}
            id={`default-radio`}
            label={`Video 2`}
            checked={selectedOption === "video2"}
            onChange={radioChange}
          />
          <Form.Check
            value="video3"
            className="radio"
            type={"radio"}
            id={`default-radio`}
            label={`Video 3`}
            checked={selectedOption === "video3"}
            onChange={(e) => radioChange(e)}
          />
          <Form.Check
            value="video4"
            className="radio"
            type={"radio"}
            id={`default-radio`}
            label={`Video 4`}
            checked={selectedOption === "video4"}
            onChange={(e) => radioChange(e)}
          />
        </div>

        <div>
          <Form.Text style={{ color: "black", marginBottom: "10px" }}>
            Column 1
          </Form.Text>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow1Col1 || "/images/images.png"}
            />
          </Card>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow2Col1 || "/images/images.png"}
            />
          </Card>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow3Col1 || "/images/images.png"}
            />
          </Card>
          <Card
            style={{
              width: "10rem",
              // marginBottom: "1rem",
              height: "11rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow4Col1 || "/images/images.png"}
            />
          </Card>
        </div>
        <div>
          <Form.Text style={{ color: "black", marginBottom: "10px" }}>
            Column 2
          </Form.Text>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
            fluid={true}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow1Col2 || "/images/images.png"}
            />
          </Card>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow2Col2 || "/images/images.png"}
            />
          </Card>
          <Card
            style={{
              width: "10rem",
              height: "11rem",
              marginBottom: "1rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow3Col2 || "/images/images.png"}
            />
          </Card>

          <Card
            style={{
              width: "10rem",
              height: "11rem",
              // marginBottom: "1rem",
              // height: "8rem",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              src={imgRow4Col2 || "/images/images.png"}
              // onError={(e) =>
              //   (e.target.onerror = null)((e.target.src = "/images/images.png"))
              // }
            />
          </Card>
        </div>
        <div>
          <Form.Text style={{ color: "black", marginBottom: "10px" }}>
            Column 3
          </Form.Text>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
                // // borderRadius: "px 5px",
                // marginBottom: "60px",
                // marginTop: "50px",
                // // paddingBottom: "40px",
                // marginLeft: "5px",
              }}
              // className="audio"

              src={row1Col3}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row2Col3}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row3Col3}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row4Col3}
              controls
            />
          </div>
        </div>
        <div>
          <Form.Text style={{ color: "black", marginBottom: "10px" }}>
            Column 4
          </Form.Text>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              // className="audio"
              src={row1Col4}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row1Col4}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row1Col4}
              controls
            />
          </div>
          <div class="audio1">
            <ReactAudioPlayer
              style={{
                width: "220px",
              }}
              src={row1Col4}
              controls
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#D1D1D1"
        }}
      >
        <div
          style={{
            borderColor: "#1B2430",
            borderStyle: "solid",
            borderRadius: "5px 5px",
            marginLeft: "40px ",
            marginRight: "40px",
            paddingTop: "20px"
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#D1D1D1",
              paddingLeft: "40px",
              paddingRight: "40px",
              borderColor: "black",
              borderWidth: "1px",
            }}
          >
            <h6> References:</h6>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#D1D1D1",
              padding: "15px 40px",
              borderColor: "black",
              borderWidth: "1px",
            }}
          >
            <div>
              <Card style={{ width: "16rem", backgroundColor: "#f3f4f4" }}>
                <Card.Body>
                  <Card.Title> <BsGithub /> Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card style={{ width: "16rem", backgroundColor: "#f3f4f4" }}>
                <Card.Body>
                  <Card.Title> <BsGithub /> Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card style={{ width: "16rem", backgroundColor: "#f3f4f4" }}>
                <Card.Body>
                  <Card.Title> <BsGithub /> Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card style={{ width: "16rem", backgroundColor: "#f3f4f4" }}>
                <Card.Body>
                  <Card.Title> <BsGithub /> Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card style={{ width: "16rem", backgroundColor: "#f3f4f4" }}>
                <Card.Body>
                  <Card.Title> <BsGithub /> Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div class="footerclass">
        <p> © 2023 Copyright</p>
      </div>
    </>
  );
}

export default App;
