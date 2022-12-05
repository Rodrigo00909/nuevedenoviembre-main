'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText, NormalText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section id="world" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Hasta donde iría por vos?" textStyles="text-center" />
      <TitleText
        title={(
          <>Muchas veces tenés que ir a lugares, ya sea sola o acompañada, y te da verguenza pedirme que te lleve. Bueno quiero que veas este mapa del planeta:
          </>
        )}
        textStyles="text-center"
      />
      {/* <NormalText
        title={(
          <>Amor yo a vos te llevaría desde donde está nuestra fotito (Creo que es Canadá) hasta ese otro continente donde está el marcador. Le pondría un cohete al auto, pero te llevaría.
          </>
        )}
        textStyles="text-center"
      /> */}

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full ">
          <img src="mapaa.png" alt="Punto a ir" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[100px] h-[100px] p-[6px] rounded-full">
          <img src="/fotomapa.png" alt="Rodri y Moni Auto" className="w-full h-full" />
        </div>


        {/* <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div> */}
      </motion.div>

      <NormalText
        title={(
          <>Amor yo a vos te llevaría desde donde está nuestra fotito (Creo que es Canadá jajaja no pude moverlo bien para Argentina) hasta ese otro continente donde está el marcador. Le pondría un cohete al auto, pero te llevaría.
          </>
        )}
        textStyles="text-center"
      />

    </motion.div>
  </section>
);

export default World;