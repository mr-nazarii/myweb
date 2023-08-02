import Slider from "react-infinite-logo-slider";

interface CarrouselProps {
  languages: Array<string>;
  toRight: boolean;
}

export const Carrousel = ({ languages, toRight }: CarrouselProps) => {
  return (
    <div
      style={{
        background: "#3317cf",
        position: "relative",
        left: "-50px",
        padding: "6px 0px",
      }}
    >
      <Slider
        width="220px"
        duration={100}
        pauseOnHover={false}
        blurBorders={false}
        blurBoderColor={"#000000"}
        slidesToShow={1}
        toRight={toRight}
      >
        {languages.map((language, i) => (
          <Slider.Slide key={i}>
            <p
              style={{
                border: "1.6px solid #ffffff22",
                color: "#ffffff",
                padding: "10px 25px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "4px",
                borderRadius: "20px",
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              {language}
            </p>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};
