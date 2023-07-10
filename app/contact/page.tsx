"use client"
import { Hero3 } from '@/components'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';


export default function Home() {
  const { open, setOpen } = useDrawerContext()
  const [value, setValue] = useLocalStorage("lang", "")
  const [lang, setLang] = useState(value)


  return (
    <main className="overflow-hidden">
      <Hero3 />
      <section className="text-gray-600 body-font relative">
        {(lang === 'en') ? (
          open.map((item: any, index: any) => (
            <div key={index}>

              {item.en?.map((c: any, i: any) => (
                <div key={i}>
                  {c.contact?.map((a: any, j: any) => (
                    <div key={j}>
                      <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{a.t1}</h1>
                          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{a.t2}</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                          <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                              <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">{a.t3}</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                            </div>
                            <div className="p-2 w-1/2">
                              <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">{a.t4}</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                            </div>
                            <div className="p-2 w-full">
                              <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">{a.t5}</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                              </div>
                            </div>
                            <div className="p-2 w-full">
                              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{a.t6}</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                              <a className="text-indigo-500">example@email.com</a>
                              <p className="leading-normal my-5">{a.t7}
                              </p>
                              <span className="inline-flex">
                                <a className="text-gray-500" href='https://www.facebook.com/cherry.cardona' target='_blank'>
                                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                  </svg>
                                </a>
                                <a className="ml-4 text-gray-500" href='https://wa.me/96560999213' target='_blank'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
                                </a>
                              </span>
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
                  {c.contact?.map((a: any, j: any) => (
                    <div key={j}>
                      <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{a.t1}</h1>
                          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{a.t2}</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                          <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                              <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">{a.t3}</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                            </div>
                            <div className="p-2 w-1/2">
                              <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">{a.t4}</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                            </div>
                            <div className="p-2 w-full">
                              <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">{a.t5}</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                              </div>
                            </div>
                            <div className="p-2 w-full">
                              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{a.t6}</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                              <a className="text-indigo-500">example@email.com</a>
                              <p className="leading-normal my-5">{a.t7}
                              </p>
                              <span className="inline-flex">
                                <a className="text-gray-500" href='https://www.facebook.com/cherry.cardona' target='_blank'>
                                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                  </svg>
                                </a>
                                <a className="ml-4 text-gray-500" href='https://wa.me/96560999213' target='_blank'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
                                </a>
                              </span>
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

      </section>
    </main>
  )
}
