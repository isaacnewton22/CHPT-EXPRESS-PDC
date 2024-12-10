'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-betweenlg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              Comment pouvons-nous vous aidez?
            </h1>
            <p>
            Contrairement à la croyance populaire, le Lorem Ipsum n’est pas simplement un texte aléatoire.
            Il a ses racines dans un morceau de la littérature latine classique de 45 av. J.-C.,
            ce qui lui donne plus de 2000 ans.
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>Projets</p>
                <p className='text-[36px] font-bold text-blue'>
                  {' '}
                  + <AnimatedCounter from={0} to={30} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  {' '}
                  Clients satisfaits
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  <AnimatedCounter from={0} to={23} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Developpement Front-end
                </h2>
                <p>
                Transformez votre design Figma/XD en application web entièrement réactive avec
                react/next js ou angular ou HTML avec tailwind css.
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Developpement Back-end
                </h2>
                <p>
                Construisez votre application Web complète avec un développement Web de pointe
                Technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
