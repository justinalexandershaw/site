import React from "react";
import LayoutDefault from "layouts/LayoutDefault";
import Animation from "components/elements/Animation";
import TrackedPage from "utils/GoogleAnalytics";
import ScrollReveal from "utils/ScrollReveal";

/**
 * The 404 error page for the website.
 */
export default function PageNotFound(): JSX.Element {
  return (
    <TrackedPage>
      <ScrollReveal>
        <LayoutDefault>
          <Animation
            src="./page_not_found.riv"
            style={{ height: "calc(100vh - 286px)", marginTop: "80px" }}
          ></Animation>
        </LayoutDefault>
      </ScrollReveal>
    </TrackedPage>
  );
}
