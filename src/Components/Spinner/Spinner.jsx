import { SpinnerWrapper, Circle, Shadow } from "./Spiner.elements";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Circle />
      <Shadow />
      <span>Loading</span>
    </SpinnerWrapper>
  );
};

export default Spinner;
