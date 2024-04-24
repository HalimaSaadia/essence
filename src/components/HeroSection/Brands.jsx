import Slider from "react-slick";
import "./brands.css"

const Brands = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
  return (
    <Slider {...settings} className={` mt-10 bg-white p-3 `}>
      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://www.shutterstock.com/image-vector/new-york-usa-february-vector-260nw-2311629011.jpg"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Yankee</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbAw1CmQ-2hci4lEteie3M6RfDd_7670ZydsJTaPHSQ&s"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Next</p>
      </div>
      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/1OykIvrw9xmVrRDgV0K6OozBu1swDGf6NfQkNjEwYwgtta1SWHryUursYn7nvLCfXeY"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Keurig</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bK21qEkwNF0x8oH9Xh7iOP_1FcsLZ9Wks4m0JB8M_Q&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Swiffer</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFmOai3fuCZZH87uwKNvg08MnrWKD0VUfJlf4kUe4hw&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Dyson</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/6PwGC6EJ52-b57VgfItw0FDztgP9eYT9oIbMjT8nUAY8Tles6AuH1lNvijoM9wEadrg=w240-h480-rw"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Breville</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rdinrTY-ceG8nDG93xy7xi8ngHS_Bqp8KxjuMei0GA&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Cuisinart </p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbAw1CmQ-2hci4lEteie3M6RfDd_7670ZydsJTaPHSQ&s"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Next</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/1OykIvrw9xmVrRDgV0K6OozBu1swDGf6NfQkNjEwYwgtta1SWHryUursYn7nvLCfXeY"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Keurig</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bK21qEkwNF0x8oH9Xh7iOP_1FcsLZ9Wks4m0JB8M_Q&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Swiffer</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bK21qEkwNF0x8oH9Xh7iOP_1FcsLZ9Wks4m0JB8M_Q&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Swiffer</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFmOai3fuCZZH87uwKNvg08MnrWKD0VUfJlf4kUe4hw&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Dyson</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/6PwGC6EJ52-b57VgfItw0FDztgP9eYT9oIbMjT8nUAY8Tles6AuH1lNvijoM9wEadrg=w240-h480-rw"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Breville</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bK21qEkwNF0x8oH9Xh7iOP_1FcsLZ9Wks4m0JB8M_Q&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Swiffer</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFmOai3fuCZZH87uwKNvg08MnrWKD0VUfJlf4kUe4hw&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Dyson</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/6PwGC6EJ52-b57VgfItw0FDztgP9eYT9oIbMjT8nUAY8Tles6AuH1lNvijoM9wEadrg=w240-h480-rw"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Breville</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rdinrTY-ceG8nDG93xy7xi8ngHS_Bqp8KxjuMei0GA&s"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Cuisinart </p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbAw1CmQ-2hci4lEteie3M6RfDd_7670ZydsJTaPHSQ&s"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Next</p>
      </div>

      <div className="grid justify-center w-max ">
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE] mx-auto">
          <img
            src="https://play-lh.googleusercontent.com/1OykIvrw9xmVrRDgV0K6OozBu1swDGf6NfQkNjEwYwgtta1SWHryUursYn7nvLCfXeY"
            alt="Yankee Brand"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="font-semibold text-center">Keurig</p>
      </div>

    </Slider>
  );
};

export default Brands;
