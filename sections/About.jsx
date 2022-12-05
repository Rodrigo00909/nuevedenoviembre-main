'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| El motivo de esta web" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Su objetivo es principalmente{' '}
        <span className="font-extrabold text-white">sacarte una sonrisa.</span> Pensaba{' '}
        
        <span className="font-extrabold text-white">recopilar</span> algunas cosas en una página web. Uno de tus hobbies siempre fue dibujar,
        y me lo demostraste haciendome varios dibujos hermosos. Yo quiero mostrarte mi especialidad también... y es la informática,
        la programación web y el diseño en sí. Traté de incluirle animaciones, buen diseño, estética y demás cosas que aprendí desde 2017 que empecé a estudiar esto. {' '}
        <span className="font-extrabold text-white">
          Monica
        </span>{' '}
        espero que te guste esta pequeña paginita que hice. Es sólo el comienzo de algo mucho más grande.{' '}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;