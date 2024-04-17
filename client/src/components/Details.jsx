import React from "react";
import "../css/Details.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Carousel } from "react-responsive-carousel";
import breakfast from "../images/breakfast.jpg";
import lunch from "../images/lunch.jpg";
import dinner from "../images/dinner.jpg";
function Details() {
  return (
    <div className="details">
      <div className="carousel">
        <Carousel>
          <div>
            <img src={breakfast} alt="not found" />
          </div>
          <div>
            <img src={lunch} alt="not found" />
          </div>
          <div>
            <img src={dinner} alt="not found" />
          </div>
        </Carousel>
      </div>
      <div className="tab mt-2 ">
        <div className="mt-2 px-3">
          <h2>The Big Chill Cakery</h2>
        </div>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel>
            <div className="p-3">
              <div className="my-3">
                <h4>Phone Number</h4>
                <p className="text-danger">+91 3423423216</p>
              </div>
              <div className="my-3">
                <h4>The Big Chill Cakery</h4>
                <p>
                  Shop 1,Plot D,Samrudhi compley,chincholi <br />
                  Mumbai-400002 ,Maharastra.
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Details;
