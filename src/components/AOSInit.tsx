'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 60 });
  }, []);
  return null;
} 