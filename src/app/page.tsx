'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaPhone, FaTimes, FaInstagram } from 'react-icons/fa';
import styles from './page.module.css';

interface Slide {
  title: string;
  headline: string;
  src: string;

  desc: string[];
}

interface Item {
  title: string;
  src: string;
  width?: number;
}




export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [selectedStory, setSelectedStory] = useState<Slide | null>(null);
  
  const handleShowStory = (slide: Slide) => {
    setSelectedStory(slide);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };


  const items: Item[] = [
    { title: 'KUMAH', src: '/images/KUMAH.jpg' },
    { title: '002', src: '/images/boarded0.6.png' },
    { title: '003', src: '/images/boarded0.7.jpg', width: 840 },
    { title: '004', src: '/images/boarded7.jpg'},
    { title: '005', src: '/images/boarded8.jpg', width: 840 },
    { title: '006', src: '/images/She.jpg' }
  ];

  const slides: Slide[] = [
    { title: 'KUMAH', src: '/images/KUMAH.jpg',headline: 'Photography is on its way.', desc: [   'The painting you’ve shared offers a compelling narrative rich with cultural and symbolic elements.',
        'In the piece, you see a family unit, likely symbolizing Mr. and Mrs. Kumah and their children, with each figure wearing African masks.',
        'The man holds a Bible, which emphasizes faith as a cornerstone of the family’s unity and strength.',
        'The mother cradles the child while wearing traditional African attire, representing cultural pride and continuity.',
        'The background features intricate, abstract patterns, which may represent the complexity and depth of their cultural and spiritual roots.',
        'The teddy bear in the child\'s hand adds a touch of softness and innocence to the scene, grounding the otherwise symbolic imagery in the everyday joys of family life.',
        'Overall, the painting highlights family, culture, tradition, and faith, weaving them together in a modern, visually striking composition.'
      ] },
    { title: 'Royalty', src: '/images/Royalty.jpg' ,headline: 'Discovery is on its way.',     desc: [
      "The artwork presents a striking contrast between a regal, serene figure intertwined with patterns and vines, and the rough, discarded elements of her environment.",
  "The vibrant, elaborate patterns enveloping her body suggest an inner world of richness and beauty, despite the external reality of homelessness.",
  "The vines could symbolize nature reclaiming or protecting her, perhaps highlighting the delicate balance between inner peace and external chaos.",
  "The painting speaks to the subjectivity of peace, questioning whether societal standards of stability define one's sense of worth or tranquility.",
  "TITLE: 'Royalty in Ruin.'",
  "On the streets of Adum, Kumasi, I encountered a homeless woman sitting on a discarded couch with such poise that it felt like I was witnessing a queen on her throne.",
  "This painting questions the nature of peace—how it's shaped by our perception, mental state, and environment.",
  "Can inner peace exist amidst turmoil? Or does it transcend physical circumstances?"
    ]},
    { title: 'Kwin and Queen', src: '/images/boarded0.7.jpg', headline: 'Designing is on its way.', desc: [  "In this piece, I explore the lives of two individuals—one from the West and one from Africa—each shaped by their unique race, geography, and culture.",
      "Though their worlds appear different, their crowns are heavy with shared stories of resilience, hope, and the search for identity.",
      "This artwork reflects the tensions, contrasts, and connections that bind us across borders.",
      "🔸 Kwin embodies the urban sophistication of a Western metropolis. She thrives in an environment of towering skylines but feels disconnected from her roots.",
      "🔸 Queen, grounded in African tradition, draws strength from her heritage but faces modern-day struggles that challenge her worldview.",
      "The juxtaposition of these figures is a reminder that while geography and race shape our stories, the human experience is universal."
    ]}
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className={`${styles.topnav} ${menuOpen ? styles.responsive : ""}`}>
        <div className={styles.title}>
          <h2>Calitus</h2>
        </div>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.active}>Home</Link>
          <Link href="/Stories">Stories</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        {/* Hamburger Menu Button */}
        <button className={styles.icon} onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
          <p></p>
        </button>
      </nav>
      
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.box}>
            <p>{item.title}</p>
            <Image src={item.src} alt={item.title} width={item.width || 400} height={300} />
          </div>
        ))}
      </div>

      <div className={styles.story}>
        <p>Stories</p>
        <div className={styles.slideshow}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.slideshowItem}>
          <Image src={slide.src} alt={slide.title} width={800} height={400} />
          <div className={styles.slideshowItemText}>
            <h4>{slide.title}</h4>
            <h2>{slide.headline}</h2>
            <div className={styles.buttonContainer}>
              <button className={styles.storyButton} onClick={() => handleShowStory(slide)}>
                Tell a Story
              </button>
              <button className={styles.buyButton}>Buy Painting</button>
            </div>
          </div>
        </div>
      ))}

      {selectedStory && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedStory.title}</h2>
            <p>{selectedStory.desc}</p>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  
      </div>
      
    
      
      <footer className={styles.footer}>
        <p><FaPhone /> </p>
        <p>Follow Us on Instagram. <Link href="https://www.instagram.com/p/CJ52rpUMVCU/?igshid=1kho7nuw3p2l2"><FaInstagram /></Link></p>
        <p>All Rights Reserved. 2021 Impressions. Accra, Ghana</p>
      </footer>
    </div>
  );
}
