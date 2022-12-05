import React from "react";

// core components

import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import DetailSection from "./DetailSection/DetailSection";
import VideoSection from "./VideoSection/VideoSection";
import ContactSection from "./ContactSection/ContactSection";
import CompatibilitySection from "./CompatibilitySection/CompatibilitySection";
import BuyProduct from "./BuyProduct/buyProducts";

function LandingPage(props) {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }, []);

  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, [props.reload]);
  return (
    <div>
      <LandingPageHeader {...props} />
      <div className="main">
        <DetailSection {...props} />
        <CompatibilitySection {...props}/>
        <BuyProduct {...props} />
        <ContactSection />
      </div>
      <DemoFooter />
    </div>
  );
}

export default LandingPage;
