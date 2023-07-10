"use client"
import { CarCard, Hero } from '@/components'
import { fetchTemp, fetchTemp1 } from '@/utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useState, useEffect } from 'react';
import Testimonial from '@/components/Testimonial';
import { useDrawerContext } from './context/store';
import useLocalStorage from '@/hooks/useLocalStorage'


export default async function Home() {

  const { open, setOpen } = useDrawerContext()

  const [allTemp, setTemp] = useState<any>()
  const a = async () => {
    // const allTemp = await fetchTemp();
    let allTemp
    allTemp =  (lang === 'en') ? await fetchTemp() : await fetchTemp1()

    const isDataEmpty = !Array.isArray(allTemp) || allTemp.length < 1 || !allTemp;
    if (!isDataEmpty) { setTemp(allTemp) }
  }
  useEffect(() => {
    a()
  }, [])


  const [value, setValue] = useLocalStorage("lang", "")
  const [lang, setLang] = useState(value)

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <Testimonial />
          {(lang === 'en') ? (
            open.map((item: any, index: any) => (
              <div key={index}>

                {item.en?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.home?.map((a: any, j: any) => (
                      <div key={j}>
                        <h1 className='text-4xl font-extrabold'>{a.title}</h1>
                        <p>{a.par}</p>
                        <hr />
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            ))
          ) : (
            open.map((item: any, index: any) => (
              <div key={index}>
                {item.ar?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.home?.map((a: any, j: any) => (
                      <div key={j}>
                        <h1 className='text-4xl font-extrabold'>{a.title}</h1>
                        <p>{a.par}</p>
                        <hr />
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            ))
          )}
        </div>

        {allTemp && allTemp?.length > 0 ? (
          <section>

            <Swiper
              spaceBetween={50}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000
              }}
              breakpoints={{
                150: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              <div className='home__cars-wrapper'>
                {allTemp.map((temp: any) => (

                  <SwiperSlide key={temp.id}><CarCard temp={temp} /></SwiperSlide>

                ))}
              </div>
            </Swiper>


          </section>
        ) : (
          <div className='home___error-container'>
            <h2 className='text-black text-xl dont-bold'>...</h2>

          </div>
        )

        }
      </div>
    </main>
  )
}


