import Slider from "react-slick";
import image1 from "../assets/jeans1.jpg";
const TestimonialData = [
  {
    id: 1,
    name: "Masrafhi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: image1,
  },
  {
    id: 2,
    name: "Tamim",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "./dress3.jpg",
  },
  {
    id: 3,
    name: "Sakib",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "./four.jpg",
  },
  {
    id: 5,
    name: "Miraz",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "hoodie4.jpg",
  },
];

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="text-3xl text-blue-700  absolute right-4 top-1/2"
      //   style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="text-3xl text-blue-700 top-1/2 absolute left-4 z-20 "
      onClick={onClick}
    >
      {" "}
      &#10094;
    </div>
  );
}

const Slides = () => {
  var settings = {
    dots: true,

    // arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-10">
      <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div key={data.id}>
            <div className="w-screen h-[420px]">
              <img src={data.img} alt="" className="w-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
