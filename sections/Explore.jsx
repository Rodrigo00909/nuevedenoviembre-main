'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
/* import Link from 'next/link'; */

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Secciones" textStyles="text-center" />
        <TitleText
          title={<>Cosas que nos encantan <br className="md:block hidden" /> PD 1: Clickea las imágenes <br className="md:block hidden" /> PD 2: La última imagen mirala cuando hayas visto toda la pág.</>}
          textStyles="text-center"
        />
        {/* <button>
          <Link href="#world">IR</Link>
        </button> */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;