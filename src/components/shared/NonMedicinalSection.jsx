import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function NonMedicinalSection() {
  return (
    <div>
      <div>
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Other Products</h2>
              <p className="font-serif text-sm text-gray-600">
                Qualisque erroribus usu at, duo te agam soluta mucius.
              </p>
            </div>
            <div className="">
              <CarouselProvider
                naturalSlideWidth={120}
                isIntrinsicHeight={true}
                totalSlides={12}
                visibleSlides={4}
                step={2}
                infinite={true}
              >
                <Slider>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                  <Slide>
                    <MedicineCard />
                  </Slide>
                </Slider>
              </CarouselProvider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
function MedicineCard() {
  return (
    <>
      <div className="flex flex-col bg-gray-50 mr-5">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 bg-gray-500"
            src="https://source.unsplash.com/200x200/?fashion?1"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline text-violet-600"
          >
            Convenire
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi">
            Te nulla oportere reprimique his dolorum
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
            <span>June 1, 2020</span>
            <button className="">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
