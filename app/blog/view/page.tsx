"use client"
import { CarCard, Hero1, ImageDisplay } from '@/components'
import { fetchTemp, fetchTemp1 } from '@/utils'
import { useEffect, useState } from 'react'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'



export default  function Home() {
    const [allTemp, setTemp] = useState<any>()
    const { open, setOpen } = useDrawerContext()
    const [value, setValue] = useLocalStorage("lang", "")
    const [lang, setLang] = useState(value)

    const a = async () => {
        let allTemp;
        // allTemp = await fetchTemp()
        allTemp = (lang === 'en') ? await fetchTemp() : await fetchTemp1()
        console.log(allTemp)
        const isDataEmpty = !Array.isArray(allTemp) || allTemp.length < 1 || !allTemp;
        if (!isDataEmpty) { setTemp(allTemp) }
    }

    
        // const [showImage, setShowImage] = useState(true);
      
        // useEffect(() => {
        //   // Hide the image after 3 seconds
        // //   const timer = setTimeout(() => { 
        // //     setShowImage(false);
        // //   }, 3000);
      
        //   // Clean up the timer on component unmount
        //   return () => clearTimeout(timer);
        // }, []);


    useEffect(() => {
        a()
    }, [])



    return (
        <main className="overflow-hidden">
            {/* <div>
                {showImage &&
                    <div style={{ zIndex: '99', width: '100%', height: '100%', position: 'absolute', backgroundColor: 'white' }}>
                        <img src="/loading.gif" alt="Image" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                    </div>
                }
            </div> */}
            <Hero1 />
            <div className='mt-12 padding-x padding-y max-width' id='discover'>
                <div className='home__text-container'>
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

                {allTemp ? (
                    <section>
                        <div className='home__cars-wrapper'>
                            {allTemp?.map((temp: any) => (<CarCard temp={temp} />

                            ))}
                        </div>
                    </section>
                ) : (
                    <div className='home___error-container'>
                        {(lang === 'en') ? (
                            open.map((item: any, index: any) => (
                                <div key={index}>

                                    {item.en?.map((c: any, i: any) => (
                                        <div key={i}>
                                            {c.home?.map((a: any, j: any) => (
                                                <div key={j}>
                                                    <h2 className='text-black text-xl dont-bold'>{a.other}</h2>
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
                                                    <h2 className='text-black text-xl dont-bold'>{a.other}</h2>
                                                </div>
                                            ))}
                                        </div>
                                    ))}

                                </div>
                            ))
                        )}

                        <p>{allTemp?.message}</p>
                    </div>
                )

                }
            </div>
        </main>
    )
}
