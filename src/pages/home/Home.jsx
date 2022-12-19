import React, { useState, useRef } from 'react'
import williams from './asset/williams.jpg'
import resume from './asset/resume.pdf'
import { faHandPointRight, faUpRightFromSquare, faPhone, faLocationDot, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from './data'
import { sendEmail } from '../../components/email'

const Home = () => {
  const [projects, setProjects] = useState(data)
  const [info, setInfo] = useState({name:'', email:'', message:''})
  const [rules, setRules] = useState(false)
  const form = useRef()
  const contact_number = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [spin, setSpin] = useState(false)

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInfo({...info, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(info.name.length === 0 || info.email.length === 0 || info.message.length === 0) {
      setRules(true)
    }
    if(info.name && info.email && info.message) {
      setSpin(true)
      contact_number.current.value = Math.random() * 10000 | 0
      sendEmail(form.current, setLoading, setSpin, setInfo, setError)
    }
  }

  return <>
    <main id='home' className='h-auto w-full -z-10 mt-[68px] md:mt-[98px]'>
      <article className='intro h-56 vs:h-[290px] xs:h-[350px] sm:h-[420px] md:h-[600px] lg:h-[650px] overflow-hidden relative'>
        <section className='myImage'>
          <img className=' object-cover w-full h-full' src={williams} alt="" />
        </section>
        <section className='absolute bottom-0 md:bottom-20 p-2 left-5 xs:left-10 lg:left-16 bg-bgMenu md:bg-opacity-80 text-white'>
          <p className='text-base md:text-3xl'>Hi! Welcome to my blog...</p>
        </section>
      </article>

      <article className='first__content text-right px-5 xs:px-10 lg:pr-16 border-b-2 md:border-none py-1 bg-red-100 bg-opacity-10 md:absolute md:top-[528px] lg:top-[578px] md:right-0 md:bg-opacity-50'>
        <h3 className='text-xl md:text-3xl'>I'm Williams Ajayi Balogun</h3>
        <p className='text-sm md:text-xl'>A Frontend Developer</p>
      </article>

      <article className="second__content relative px-5 xs:px-10 lg:px-16 mb-10" id='about'>
        <h3 className="summary rounded-full bg-bgMenu w-auto h-fit p-3 flex items-center justify-center absolute -top-8 text-sm text-white tracking-widest">Summary</h3>
        <div className='mt-4 border border-bgMenu w-4/5 ml-5 p-3 pb-6 flex flex-col gap-5 lg:w-[50%]'>
          <p>
            I'm a Frontend Developer. A proof of excellence and hardwork with over 3 years experience of building websites and web applications using modern frontend technologies.
          </p>
          <div>
            <a className='btn' href={resume} download>Download CV</a>
          </div>
        </div>
      </article>

      <article className="third__content bg-bgMenu p-5 xs:px-10 lg:px-16 text-white mb-5" id='education'>
        <h1 className='text-3xl'>Education</h1>
        <div className="underline w-16 h-[1px] bg-white mb-1"></div>
        <div className="underline w-36 h-[3px] bg-white mb-8"></div>
        <section className='md:w-4/5 lg:w-3/5'>
          <h3>2016 - 2022</h3>
          <div>
            <h3>Obafemi Awolowo University</h3>
            <p className='font-thin'>
              Bagged my first degree in Mechanical Engineering with a Second Class Upper Honors ranking in the 90th percentile of the graduating class.
            </p>
          </div>
        </section>
      </article>

      <article className="fourth__content p-5 xs:px-10 lg:px-16 mb-5" id='experience'>
        <h1 className='text-3xl'>Experience</h1>
        <div className="underline w-20 h-[1px] bg-black mb-1 mt-1"></div>
        <div className="underline w-40 h-[3px] bg-black mb-8"></div>
        <section className='mb-5 shadow-md p-2 md:w-4/5 md:p-4 lg:w-[60%]'>
          <h3>October - December (2022)</h3>
          <div>
            <h3>HNG Internship at Zuri</h3>
            <p className='font-thin'>
              Collaborated with Product Managers, Designers, Frontend Developers, Backend Developers and Development Operations personnel to work on some exciting projects.
            </p>
          </div>
        </section>
        
        <section className='shadow-md p-2 md:w-4/5 md:p-4 lg:w-[60%]'>
          <h3>2020 - 2022</h3>
          <div>
            <h3>Freelance</h3>
            <p className='font-thin'>
              Volunteered for some startup projects. Also worked with some clients to deliver fully responsive and functional websites and web applications.
            </p>
          </div>
        </section>

        <section className='mt-5 shadow-md p-2 md:w-4/5 md:p-4 lg:w-[60%]'>
          <h3>2012 - 2016</h3>
          <div>
            <h3>Typist/Graphics Designer</h3>
            <p className='font-thin'>
              Worked at Delta Computers and Technologies Ltd. as a Typist (averaging 100+ WPM) and Graphics Designer. Delivered top notch and satisfactory designs as well as rightly formatted typed projects within set deadlines.
            </p>
          </div>
        </section>
      </article>

      <article className="fifth__content text-bgMenu p-5 xs:px-10 lg:px-16 mb-5" id='qualities'>
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
              Hands-on experience using Git and other Git essentials.
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

      <article className="sixth__content text-bgMenu p-5 xs:px-10 lg:px-16 mb-5" id='projects'>
        <h1 className='text-3xl'>Projects</h1>
        <div className="underline w-16 h-[1px] bg-bgMenu mb-1"></div>
        <div className="underline w-28 h-[3px] bg-bgMenu mb-8"></div>
        <main className='grid md:grid-cols-2 gap-14 md:gap-x-2 mt-14'>
          {
            projects.map(project => {
              const {id, title, img, desc, url} = project
              return <>
                <section className='shadow-md hover:shadow-xl hover:shadow-red-50 relative h-48 vs:h-64 lg:h-[400px] scale-90 transition-all duration-500 hover:scale-100' key={id}>
                  <img className='object-cover h-full w-full' src={img} alt={title} />
                  <aside className='absolute -top-6 bg-aside w-4/5 h-2/3 vs:h-1/2 p-2 lg:p-4 rounded-br-3xl shadow-md shadow-white lg:text-3xl'>
                    <h3>{title}</h3>
                    <p className='font-thin text-sm lg:text-lg'>{desc}</p>
                  </aside>
                  <aside className="absolute -bottom-5 right-0 bg-aside p-2 font-bold rounded-tl-3xl shadow-md shadow-white transition-all duration-500 hover:bg-bgMenu hover:text-white lg:text-2xl">
                    <a href={url}>Visit Site  <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </aside>
                </section>
              </>
            })
          }
        </main>
      </article>

      <article className="seventh__content bg-bgMenu bg-opacity-70 p-5 xs:px-10 lg:px-16 mb-[500px] h-80 relative" id='get_in_touch'>
        <section className='absolute z-20'>
          <h1 className='text-3xl text-bgMenu z-20'>Get in Touch_</h1>
          <div className="underline w-16 h-[1px] bg-bgMenu mb-1"></div>
          <div className="underline w-40 h-[3px] bg-bgMenu mb-8"></div>
        </section>
        <div className="absolute top-0 left-0 skew-x-[-25deg] bg-red-50 w-52 sm:w-1/2 h-full"></div>
        <div className="absolute top-0 left-0 bg-red-50 w-20 h-full"></div>

        <section className='absolute z-20 top-20 flex flex-col gap-3 shadow p-3 sm:p-5 sm:w-3/5 lg:w-[30%] bg-red-50'>
          <div className='flex gap-3 items-start'>
            <p>
              <FontAwesomeIcon icon={faPhone} />
            </p>
            <div>
              <p>Phone</p>
              <a className='text-sm' href='tel:+2348164443163'>+234 816 444 3163</a>
            </div>
          </div>
          <div className='flex gap-3 items-start'>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <div>
              <p>Email</p>
              <a className='text-sm' href='mailto:williamsbalogun49@gmail.com'>williamsbalogun49@gmail.com</a>
            </div>
          </div>
          <div className='flex gap-3 items-start'>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
            </p>
            <div>
              <p>Address</p>
              <p className='text-sm'>Lagos, Nigeria.</p>
            </div>
          </div>
        </section>

        <section className='bg-white absolute w-full h-auto left-0 top-52 lg:top-10 lg:left-1/3 lg:w-2/3 sm:pt-24 lg:pt-16 p-5 xs:px-10 lg:px-16 pt-20 flex flex-col gap-3 lg:border-b'>
          {
            loading && <p className='text-green-400 md:text-2xl font-bold'>Message Sent Successfully...</p>
          }
          <p>
            {error ? <span className='text-red-400 font-bold md:text-2xl'>Error!!! Message not sent</span> : 'Or write me a message here_'}
          </p>
          <form ref={form}>
            <input type="hidden" name="contact_number" ref={contact_number} />
            <input className={`p-2 border w-full mb-3 ${rules && info.name.length <= 0 ? 'outline outline-1 outline-red-100' : 'focus:outline-slate-500 focus:outline focus:outline-1'}`} type="text" name="name" id="name" placeholder='Your name *' required='required' value={info.name} onChange={handleChange} />
            <label className={`${rules && info.name.length <= 0 ? 'block text-red-300 mb-3' : 'hidden'}`}>Name field cannot be empty</label>
            <input className={`p-2 border w-full mb-3 ${rules && info.email.length <= 0 ? 'outline outline-1 outline-red-100' : 'focus:outline-slate-500 focus:outline focus:outline-1'}`} type="email" name="email" id="name" placeholder='Email *' required='required' value={info.email} onChange={handleChange} />
            <label className={`${rules && info.email <= 0 ? 'block text-red-300 mb-3' : 'hidden'}`}>Email cannot be empty</label>
            <textarea className={`w-full h-[256px] border p-2 resize-none ${rules && info.message.length <= 0 ? 'outline outline-1 outline-red-100' : 'focus:outline-slate-500 focus:outline focus:outline-1'}`} name="message" id="message" placeholder='Type your message here...' maxLength={250} required='required' value={info.message} onChange={handleChange}></textarea>
            <label className={`${rules && info.message <= 0 ? 'block text-red-300 mb-3' : 'hidden'}`}>Message cannot be empty</label>

            <div className='text-center mt-5'>
              <button className='btn w-4/5 lg:w-3/5' type="submit" onClick={handleSubmit}>
                {
                  spin ? <FontAwesomeIcon className='spinner' icon={faSpinner} /> : 'Send'
                }
              </button>
            </div>
          </form>
        </section>
      </article>
    </main>
  </>
}

export default Home
