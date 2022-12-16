import React, { useEffect, useState } from 'react'
import williams from './asset/williams.jpg'
import resume from './asset/resume.pdf'
import { faHandPointRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from './data'

const Home = () => {
  const [projects, setProjects] = useState(data)
  const [value, setValue] = useState(null)
  const [modal, setModal] = useState(false)

  const handleHover = id => {
    let value = projects.find(project => {
      return project.id === id
    })
    setValue(value)
  }

  useEffect(()=>{
    setModal(!modal)
  },[modal, value])
  return <>
    <main className='h-auto w-full -z-10'>
      <article className='intro h-48 overflow-hidden relative'>
        <section className='myImage'>
          <img className=' object-cover' src={williams} alt="" />
        </section>
        <section className='absolute bottom-0 p-2 left-5 bg-bgMenu text-white'>
          <p>Hi! Welcome to my blog...</p>
        </section>
      </article>

      <article className='first__content text-right px-5 border-b-2 py-1 bg-red-100 bg-opacity-10'>
        <h3 className='text-xl'>I'm Williams Ajayi Balogun</h3>
        <p className='text-sm'>A Frontend Developer</p>
      </article>

      <article className="second__content relative px-5 mb-10">
        <h3 className="summary rounded-full bg-bgMenu w-auto h-fit p-3 flex items-center justify-center absolute -top-8 text-sm text-white tracking-widest">Summary</h3>
        <div className='mt-4 border border-bgMenu w-4/5 ml-5 p-3 pb-6 flex flex-col gap-5'>
          <p>
            I'm a Frontend Developer. A proof of excellence and hardwork with over 3 years experience of building websites and web applications using modern frontend technologies.
          </p>
          <div>
            <a className='btn' href={resume} download>Download CV</a>
          </div>
        </div>
      </article>

      <article className="third__content bg-bgMenu p-5 text-white mb-5">
        <h1 className='text-3xl'>Education</h1>
        <div className="underline w-16 h-[1px] bg-white mb-1"></div>
        <div className="underline w-36 h-[3px] bg-white mb-8"></div>
        <section>
          <h3>2016 - 2022</h3>
          <div>
            <h3>Obafemi Awolowo University</h3>
            <p className='font-thin'>
              Bagged my first degree in Mechanical Engineering with a Second Class Upper Honors ranking in the top 1st percentile of the graduating class.
            </p>
          </div>
        </section>
      </article>

      <article className="fourth__content p-5 mb-5">
        <h1 className='text-3xl'>Experience</h1>
        <div className="underline w-20 h-[1px] bg-black mb-1 mt-1"></div>
        <div className="underline w-40 h-[3px] bg-black mb-8"></div>
        <section className='mb-5 shadow-md p-2'>
          <h3>October - December (2022)</h3>
          <div>
            <h3>HNG Internship at Zuri</h3>
            <p className='font-thin'>
              Collaborated with Product Managers, Designers, Frontend Developers, Backend Developers and Development Operations personnel to work on some exciting projects.
            </p>
          </div>
        </section>
        
        <section className='shadow-md p-2'>
          <h3>2020 - 2022</h3>
          <div>
            <h3>Freelance</h3>
            <p className='font-thin'>
              Volunteered for some startup projects. Also worked with some clients to deliver fully responsive and functional websites and web applications.
            </p>
          </div>
        </section>

        <section className='mt-5 shadow-md p-2'>
          <h3>2012 - 2016</h3>
          <div>
            <h3>Typist/Graphics Designer</h3>
            <p className='font-thin'>
              Worked at Delta Computers and Technologies Ltd. as a Typist (averaging 100+ WPM) and Graphics Designer. Delivered top notch and satisfactory designs as well as rightly formatted typed projects within set deadlines.
            </p>
          </div>
        </section>
      </article>

      <article className="fifth__content text-bgMenu p-5 mb-5">
        <h1 className='text-3xl'>What I Offer?</h1>
        <div className="underline w-20 h-[1px] bg-bgMenu mb-1"></div>
        <div className="underline w-44 h-[3px] bg-bgMenu mb-8"></div>
        <section>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Great knowledge and technical skills of HTML5, CSS3 and ES6+.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Comfortability working with React and latest React version (6.4.0 or above).
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Develop user interfaces using latest React Framework.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Identify issues with front end code and rectify them to remove bugs.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Ability to work closely with Designers and Backend Engineers.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Experience with unit test tools such as Jest and Jasmine.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Hands-on experience in Rest API, Fast API, Firebase, Redux, BootStrap, Tailwind, Sass, GraphQL.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Write Documentations and participate in code review.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Ability to work under limited supervision.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Ability to learn fast and adopt knowledge in practical use cases.
            </p>
          </div>
          <div className='flex gap-5 mb-4'>
            <h3>
              <FontAwesomeIcon icon={faHandPointRight} />
            </h3>
            <p className='font-thin'>
              Acquaintance using Design Softwares such as Figma, Corel Draw, Adobe Photoshop.
            </p>
          </div>
        </section>
      </article>

      <article className="sixth__content text-bgMenu p-5 mb-5">
        <h1 className='text-3xl'>Projects</h1>
        <div className="underline w-16 h-[1px] bg-bgMenu mb-1"></div>
        <div className="underline w-28 h-[3px] bg-bgMenu mb-8"></div>
        <main className='grid gap-14 mt-14'>
          {
            projects.map(project => {
              const {id, title, img, desc, url} = project
              return <>
                <section onMouseOver={id => handleHover(id)} className='shadow-md relative h-48' key={id}>
                  <img className='object-cover h-full w-full' src={img} alt={title} />
                  <aside className='absolute -top-6 bg-aside w-4/5 h-2/3 p-2 rounded-br-3xl shadow-md shadow-white'>
                    <h3>{title}</h3>
                    <p className='font-thin text-sm'>{desc}</p>
                  </aside>
                  <aside className="absolute -bottom-5 right-0 bg-aside p-2 font-bold rounded-tl-3xl shadow-md shadow-white transition-all duration-500 hover:bg-bgMenu hover:text-white">
                    <a href={url}>Visit Site  <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </aside>
                </section>
              </>
            })
          }
        </main>
      </article>
    </main>
  </>
}

export default Home
