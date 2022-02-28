import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import { Link, useOutletContext } from "react-router-dom";
import {
  IllustrationNotFound,
  NotFoundText,
  WrapperNotFound,
} from "./NotFound.elements";

const NotFound = () => {
  const [isLoading, setIsLoading] = useOutletContext();
  const notFoundContainer = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);

    lottie.loadAnimation({
      container: notFoundContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/lotties/lf30_editor_qejbsiol.json"),
    });
  }, [setIsLoading]);

  return (
    <WrapperNotFound>
      <IllustrationNotFound ref={notFoundContainer} />
      {!isLoading && (
        <NotFoundText>
          <h1>Page Not Found</h1>
          <p>The page you were looking for does not exist. </p>
          <p>
            <Link to="/shop">Click here</Link> to continue shopping.
          </p>
        </NotFoundText>
      )}
    </WrapperNotFound>
  );
};

export default NotFound;
