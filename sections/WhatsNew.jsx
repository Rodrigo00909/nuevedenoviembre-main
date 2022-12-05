'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText, NormalText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Que sigue" />
        <TitleText title={<>Muchas cosas siguen para nosotros. ¿Te cuento dos?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/foto06.jpg"
          alt="Moni y Rodri 2022"
          className="w-[70%] h-[auto] object-contain rounded-full"
        />
      </motion.div>
    </motion.div>
    



    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 mt-10`}
    >
      <motion.div
          variants={planetVariants('left')}
          className={`flex-1  flex flex-wrap justify-between ${styles.flexCenter}`}
        >
          <img
            src="/foto09.jpeg"
            alt="Moni y Rodri Beso"
            className="w-[70%] h-[80%] object-contain rounded-full"
          />
      </motion.div>

      <NormalText title={(<>Te amo</>)}/>  

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/foto04.jpg"
          alt="Moni y Rodri Beso"
          className="w-[70%] h-[80%] object-contain rounded-full"
        />
      </motion.div>
    </motion.div>


  </section>
);

export default WhatsNew;