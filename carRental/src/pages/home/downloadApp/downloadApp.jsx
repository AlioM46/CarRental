import React from "react";
import downloadAndroid from "../../../assets/images/downloadAndroid.svg";
import downlaodIOS from "../../../assets/images/downloadIOS.svg";
import PageContainer from "../../../components/PageContainer/PageContainer";
import "./downloadApp.css";
const downloadApp = () => {
  return (
    <div className="downloadApp">
      <PageContainer>
        <div className="downloadApp__text">
          <h3>Download out app to get most out of it</h3>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>

          <div className="downloadApp__text__images">
            <img src={downlaodIOS} />
            <img src={downloadAndroid} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default downloadApp;
