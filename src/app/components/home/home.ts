import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Slider } from '../slider/slider';
import { Footer } from '../footer/footer';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  id: number;
  number: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, Slider, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  features: Feature[] = [
    {
      id: 1,
      icon: '📊',
      title: 'Dashboard Intuitif',
      description: 'Visualisez tous vos projets et tâches en un seul endroit',
    },
    {
      id: 2,
      icon: '⏱️',
      title: 'Gestion du Temps',
      description: 'Planifiez et suivez le temps consacré à chaque tâche',
    },
    {
      id: 3,
      icon: '👥',
      title: 'Collaboration',
      description: 'Travaillez en équipe de manière synchronisée',
    },
    {
      id: 4,
      icon: '📈',
      title: 'Analytics',
      description: 'Mesurez votre productivité avec nos rapports',
    },
  ];

  stats: Stat[] = [
    { id: 1, number: '10K+', label: 'Utilisateurs Actifs' },
    { id: 2, number: '50K+', label: 'Tâches Complétées' },
    { id: 3, number: '99.9%', label: 'Uptime Garanti' },
  ];
}
