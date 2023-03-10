import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SS from "public/nogginSS.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>noggin</title>
          <meta name="og:title" content="Noggin" key="title" />
      </Head>

      <main className="h-screen overflow-auto ">

          <div className='px-10 pt-5 flex justify-between h-20 w-full'>
              <a href='#' className='leading-5 text-center before:content-none after:content-none'>
                  <p className='text-2xl font-bold text-white'>Noggin</p>
              </a>
              <a href='https://github.com/Taiterbase/noggin' className="leading-16 before:content-none after:content-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
          </div>

          <div className="z-20 my-20 flex flex-col">
              <p className="text-white text-6xl font-bold text-center fade-in">Your new favorite note-taking app</p>
              <p className="text-blue-500 text-2xl text-center pt-4 fade-in">Noggin is a Markdown-based app with in-place rendering so that your text <br></br>changes instantly instead of having to look at another window!</p>
              <div className="flex justify-center mt-10">
                  <Image
                      src={SS}
                      alt={'Screenshot of Noggin'}
                      height={530}
                      width={630}
                  />
              </div>
              <div className="text-center content-between">
                  <button className="my-8 mx-8 px-4 py-8 bg-blue-500 rounded-2xl" disabled>MacOS Download</button>
                  <button className="my-8 mx-8 px-4 py-8 bg-blue-500 rounded-2xl" disabled>Windows Download</button>
              </div>
              <div>
                  <p className="text-center text-white text-2xl pt-6 fade-in">Noggin is built with Rust, Typescript, NextJS, and TailwindCSS.<br></br> Please take a look at our github repo and show some love!</p>
              </div>
          </div>

          <footer className="z-50 w-full pt-3 border-t">
              <div className="max-w-screen mx-auto grid grid-cols-2 gap-6 p-8 pt-10 pb-20 m-auto text-white min-h-64 sm:grid-cols-2 lg:grid-cols-6">
                  <div className="flex flex-col col-span-1 space-y-2">
                      <h3 className="mb-1 text-xs font-bold uppercase before:content-none after:content-none">Downloads</h3>
                      <a href="" target="" className="text-gray-300 hover:text-white before:content-none after:content-none">MacOS</a>
                      <a href="" target="" className="text-gray-300 hover:text-white before:content-none after:content-none">Windows</a>
                  </div>
                  <div className="flex flex-col col-span-1 space-y-2">
                      <h3 className="mb-1 text-xs font-bold uppercase before:content-none after:content-none">Contact</h3>
                  </div>
              </div>
          </footer>
      </main>
    </>
  )
}

export default Home
