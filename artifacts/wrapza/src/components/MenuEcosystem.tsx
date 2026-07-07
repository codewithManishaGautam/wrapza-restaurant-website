import React, { useState, useEffect } from 'react';
import kathiRollImg from '../assets/kathi-roll.jpg';
import pizzaImg from '../assets/pizza.jpg';
import wingsImg from '../assets/wings.jpg';
import momosImg from '../assets/momos.jpg';
import chaiImg from '../assets/chai.jpg';
import pastaImg from '../assets/pasta.jpg';

interface MenuItem {
  id: string;
  name: string;
  emoji: string;
  items: string[];
  highlight: string;
}

const imgMap: Record<string, string> = {
  'kathi-rolls': kathiRollImg,
  'pizza':       pizzaImg,
  'wings':       wingsImg,
  'momos':       momosImg,
  'chai':        chaiImg,
  'pasta':       pastaImg,
};

// Fallback data if Java server is still starting
const fallback: MenuItem[] = [
  { id: 'kathi-rolls', name: 'KATHI ROLLS', emoji: '🌯', items: ['Chicken Tikka', 'Butter Chicken', 'Paneer', 'Egg', 'Veggie', 'Seekh Kebab', 'Fish', 'Spicy Potato'], highlight: 'Core Identity' },
  { id: 'pizza',       name: 'PIZZA',       emoji: '🍕', items: ['Build-your-own', 'Tandoori Paneer', 'Butter Chicken', 'Spicy Chicken', 'Veggie'], highlight: 'Family Favourite' },
  { id: 'wings',       name: 'WINGS',       emoji: '🍗', items: ['Tandoori', 'Peri-Peri', 'Buffalo', 'BBQ', 'Honey Garlic', 'Hot Garlic', 'Masala'], highlight: 'Late-Night Bestseller' },
  { id: 'momos',       name: 'MOMOS',       emoji: '🥟', items: ['Steamed', 'Fried', 'Tandoori', 'Butter Masala'], highlight: 'Street Food Classic' },
  { id: 'chai',        name: 'DAILY CHAI',  emoji: '☕', items: ['Standard from CAD $1.50', 'Masala', 'Ginger', 'Elaichi', 'Karak'], highlight: 'Daily Repeat Driver' },
  { id: 'pasta',       name: 'PASTA',       emoji: '🍝', items: ['Creamy Masala', 'Butter Chicken', 'Veggie', 'Spicy Red Sauce', 'Tandoori Paneer'], highlight: 'Comfort Crowd-Pleaser' },
];

export default function MenuEcosystem() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(fallback);
  const [source, setSource] = useState<'loading' | 'java' | 'fallback'>('loading');

  useEffect(() => {
    fetch('/java-api/menu')
      .then(r => r.json())
      .then((data: MenuItem[]) => {
        setMenuItems(data);
        setSource('java');
      })
      .catch(() => {
        setMenuItems(fallback);
        setSource('fallback');
      });
  }, []);

  return (
    <section id="menu" className="bg-dark">
      <div className="container">
        <h2 className="section-title display">
          <span className="text-white">MENU </span>
          <span className="text-orange">ECOSYSTEM</span>
        </h2>
        <p className="section-subline text-white">
          A high-demand menu built for repeat orders, combos and late-night traffic
        </p>

        {source === 'java' && (
          <p className="java-badge">
            ☕ Data served by Java Spring Boot API
          </p>
        )}

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card gold-glow">
              <div
                className="menu-card-bg"
                style={{ backgroundImage: `url(${imgMap[item.id] || ''})` }}
              />
              <div className="menu-card-overlay" />
              <div className="menu-card-content">
                <span className="menu-badge">{item.highlight}</span>
                <h3>{item.emoji} {item.name}</h3>
                <p>{item.items.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-banner">
          FOOD VARIETY + BOLD FLAVOUR + DAILY CHAI = REPEAT CUSTOMER TRAFFIC
        </div>
      </div>
    </section>
  );
}
