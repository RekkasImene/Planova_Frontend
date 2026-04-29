import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      id: 1,
      title: 'Bienvenue sur Planova',
      subtitle: 'Organisez, planifiez et accomplissez vos tâches avec efficacité',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      cta: 'Découvrir Plus',
    },
    {
      id: 2,
      title: 'Dashboard Intelligent',
      subtitle: "Visualisez l'état de tous vos projets en un coup d'œil",
      image: 'https://images.unsplash.com/photo-1555994667-abb97e44ef1e?w=400&h=400&fit=crop',
      cta: 'Voir le Dashboard',
    },
    {
      id: 3,
      title: 'Collaboration Simplifiée',
      subtitle: 'Travaillez avec votre équipe de manière harmonieuse',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      cta: 'Créer une Équipe',
    },
  ];

  currentSlide = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoplay();
    this.startAutoplay();
  }
}
