import React from "react";
import Hero from "components/sections/Hero";
import LayoutDefault from "layouts/LayoutDefault";
import FeaturesTiles from "components/sections/FeaturesTiles";
import FeaturesSplit from "components/sections/FeaturesSplit";
import Testimonial from "components/sections/Testimonial";
import CallToAction from "components/sections/CallToAction";
import TrackedPage from "utils/GoogleAnalytics";
import ScrollReveal from "utils/ScrollReveal";

/**
 * The landing page for the website.
 */
export default function Home(): JSX.Element {
  return (
    <TrackedPage>
      <ScrollReveal>
        <LayoutDefault>
          <Hero className="illustration-section-01" />
          <FeaturesTiles />
          <FeaturesSplit
            invertMobile
            topDivider
            imageFill
            className="illustration-section-02"
          />
          <Testimonial topDivider />
          <CallToAction split />
        </LayoutDefault>
      </ScrollReveal>
    </TrackedPage>
  );
}
