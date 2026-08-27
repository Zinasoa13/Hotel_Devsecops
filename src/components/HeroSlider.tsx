import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../data';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Reveal from './Reveal';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';

/**
 * Hero carousel using Swiper: smooth cross-fade effect, discrete luxury pagination dots, and autoplay.
 * Features dark overlay for perfect text contrast and slide-up fade reveal without image zoom.
 */
export default function HeroSlider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1200}
      loop
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px] relative"
    >
      {sliderData.map(({ id, title, bg, btnNext }) => (
        <SwiperSlide className="h-full relative flex justify-center items-center" key={id}>
          <div className="z-20 text-white text-center px-4 max-w-5xl mx-auto">
            <Reveal variant="fade-down" duration={1000} delay={150}>
              <div className="uppercase font-tertiary tracking-[6px] mb-5 text-accent text-sm md:text-base font-semibold">
                Just Enjoy & Relax
              </div>
            </Reveal>

            <Reveal variant="fade-up" duration={1100} delay={300}>
              <h1 className="font-primary text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-8 text-white drop-shadow-lg">
                {title}
              </h1>
            </Reveal>

            <Reveal variant="fade-up" duration={1000} delay={450}>
              <button
                type="button"
                className="btn btn-lg btn-primary mx-auto shadow-2xl hover:bg-accent-hover transition-colors duration-300 cursor-pointer"
              >
                {btnNext}
              </button>
            </Reveal>
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img className="object-cover h-full w-full" src={bg} alt={title} />
          </div>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


