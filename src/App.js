import { useState } from "react";
import {
  AppContainer,
  TypesContainer
} from "./App.styles";
import backgroundImage from "./assets/grage_auto.jpeg";
import Slider from "./components/atoms/Slider/Slider";
import SearchForm from "./components/organisms/SearchForm/SearchForm";
import ShowInformation from "./components/organisms/ShowInformation/ShowInformation";

// NOTE: Main entry point of the application
function App() {
  /**
   * Component States
   */
  const [sliderVisible, setSliderVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [selectCarType, setSelectCarType] = useState("default");
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  /**
   * End of Component States
   */

  /**
   * NOTE: Responsible of opening and closing side panel.
   */
  const toggleSlider = () => {
    if (selectCarType === "default") return setIsTypeSelected(true);

    setSliderVisible(!sliderVisible);
    setIsTypeSelected(false);
  };

  return (
    <AppContainer imageUrl={backgroundImage}>
      <TypesContainer>
        <SearchForm
          isTypeSelected={isTypeSelected}
          selectCarType={selectCarType}
          setSelectCarType={setSelectCarType}
          setSelectedCar={setSelectedCar}
          toggleSlider={toggleSlider}
        />
        <Slider
          selectedData={selectedCar}
          toggleSlider={toggleSlider}
          sliderVisible={sliderVisible}
        >
          <ShowInformation selectedCar={selectedCar} />
        </Slider>
      </TypesContainer>
    </AppContainer>
  );
}

export default App;
