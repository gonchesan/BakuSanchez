import {
  SpinnerWrapper,
  Circle,
  Shadow,
  OverlaySpinner,
} from "./Spiner.elements";

const Spinner = () => {
  return (
    <>
      <OverlaySpinner />
      <SpinnerWrapper>
        <Circle />
        <Shadow />
        <span>Loading</span>
      </SpinnerWrapper>
    </>
  );
};

export default Spinner;
