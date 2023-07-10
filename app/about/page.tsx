"use client"
import { Hero2 } from '@/components'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';

export default function Home() {
    const { open, setOpen } = useDrawerContext()
    const [value, setValue] = useLocalStorage("lang", "")
    const [lang, setLang] = useState(value)

    return (
        <div>
            <Hero2 />
            < section className="text-gray-600 body-font" >
                {(lang === 'en') ? (
                   open.map((item: any, index: any) => (
                    <div key={index}>
                        {item.en?.map((c: any, i: any) => (
                            <div key={i}>
                                {c.tes?.map((a: any, j: any) => (
                                    <div key={j}>
                                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                                <img alt="feature" className="object-cover object-center h-full w-full" src="a001.jpg" />
                                            </div>
                                            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                        <img src="paint.svg" alt="paint" width={25} height={25} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s1}</h2>
                                                        <p className="leading-relaxed text-base">{a.t1}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                        <img src="hash.svg" alt="hash" width={25} height={25} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s2}</h2>
                                                        <p className="leading-relaxed text-base">{a.t2}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                        <img src="schedule.svg" alt="scheduling" width={25} height={25} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s3}</h2>
                                                        <p className="leading-relaxed text-base">{a.t3}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                    {c.tes?.map((a: any, j: any) => (
                                        <div key={j}>
                                            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                                    <img alt="feature" className="object-cover object-center h-full w-full" src="a001.jpg" />
                                                </div>
                                                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                                    <div className="flex flex-col mb-10 lg:items-start items-center">
                                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                            <img src="paint.svg" alt="paint" width={25} height={25} />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s1}</h2>
                                                            <p className="leading-relaxed text-base">{a.t1}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mb-10 lg:items-start items-center">
                                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                            <img src="hash.svg" alt="hash" width={25} height={25} />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s2}</h2>
                                                            <p className="leading-relaxed text-base">{a.t2}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mb-10 lg:items-start items-center">
                                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                            <img src="schedule.svg" alt="scheduling" width={25} height={25} />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{a.s3}</h2>
                                                            <p className="leading-relaxed text-base">{a.t3}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    ))
                )}


            </section >
        </div>
    )
}
