import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React E-commerce",
    img: "https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Developed an e-commerce platform using the Payload E-Commerce Template with Next.js, integrating features like Stripe payment processing, role-based access control, dynamic layout builder, and SEO optimizations to support digital and physical product sales.",
  },
  
  {
    id: 2,
    title: "Olympic Data Analysis using Python",
    img: "https://images.pexels.com/photos/236937/pexels-photo-236937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Analyzed historical Olympics data to uncover trends and insights in medal distributions by country and sport. Utilized data visualization to present findings in an accessible format.",
  },
  
  {
    id: 3,
    title: "Weather App",
    img: "https://images.pexels.com/photos/2816625/pexels-photo-2816625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Built a real-time weather application displaying current weather conditions using data from a public API. Features a good user experience through location-based weather updates.",
  },
  
  {
    id: 4,
    title: "Coffee Sales Data Cleanup and Analysis Using Excel",
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "The objective of this project was to clean and analyze a dataset in Excel to derive meaningful insights and prepare the data for further analysis or reporting.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
