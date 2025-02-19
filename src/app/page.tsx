'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaPhone, FaInstagram } from 'react-icons/fa';
import styles from './page.module.css';

interface Slide {
  title: string;
  headline: string;
  desc: string;
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

  const items: Item[] = [
    { title: 'KUMAH', src: '/images/KUMAH.jpg' },
    { title: '002', src: '/images/boarded0.6.png' },
    { title: '003', src: '/images/boarded0.7.jpg', width: 840 },
    { title: '004', src: '/images/boarded7.jpg'},
    { title: '005', src: '/images/boarded8.jpg', width: 840 },
    { title: '006', src: '/images/She.jpg' }
  ];

  const slides: Slide[] = [
    { title: 'Welcome', headline: 'Photography is on its way.', desc: 'Earth is art and Photography is the only witness...' },
    { title: 'Discover', headline: 'Discovery is on its way.', desc: 'Photography is the story I failed to put in words...' },
    { title: 'Design', headline: 'Designing is on its way.', desc: 'Design is intelligence made visible...' }
  ];

  return (
    <div>
      <nav className={`${styles.topnav} ${menuOpen ? styles.responsive : ''}`}>
        <div className={styles.title}><h2>Calitus</h2></div>
        <Link href="/" className={styles.active}>Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <button className={styles.icon} onClick={toggleMenu}>
          <FaBars />
          <p>MENU</p>
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
      
      <div className={styles.slideshow}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slideshowItem}>
            <Image src={`/ar${index + 1}.jpg`} alt={slide.title} width={800} height={400} />
            <div className={styles.slideshowItemText}>
              <h4>{slide.title}</h4>
              <h2>{slide.headline}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <footer className={styles.footer}>
        <p><FaPhone /> +233 243008243</p>
        <p>Follow Us on Instagram. <Link href="https://www.instagram.com/p/CJ52rpUMVCU/?igshid=1kho7nuw3p2l2"><FaInstagram /></Link></p>
        <p>All Rights Reserved. 2021 Impressions. Accra, Ghana</p>
      </footer>
    </div>
  );
}
