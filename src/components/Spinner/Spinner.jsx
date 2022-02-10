import lottie from "lottie-web";
import { useEffect, useRef } from "react";

//Styled Components
import { SpinnerWrapper, Circle, OverlaySpinner } from "./Spiner.elements";

const Spinner = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lotties/lf30_editor_wxacuz13.json"),
    });
  }, []);

  return (
    <>
      <OverlaySpinner />
      <SpinnerWrapper>
        <Circle ref={container}></Circle>
        <span>Loading</span>
      </SpinnerWrapper>
    </>
  );
};

export default Spinner;
