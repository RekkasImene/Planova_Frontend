import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  id: number,
  label: string;
  href: string;
}

interface FooterSection {
  id: number,
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  appVersion = '1.0.0';

  sections: FooterSection[] = [
    {
      id: 1,
      title: 'Produit',
      links: [
        { id: 1, label: 'Fonctionnalités', href: '#' },
        { id: 2, label: 'Tarification', href: '#' },
        { id: 3, label: 'Intégrations', href: '#' },
        { id: 4, label: 'Sécurité', href: '#' },
      ],
    },
    {
      id: 2,
      title: 'Ressources',
      links: [
        { id: 1, label: 'Documentation', href: '#' },
        { id: 2, label: 'Blog', href: '#' },
        { id: 3, label: 'FAQ', href: '#' },
        { id: 4, label: 'Support', href: '#' },
      ],
    },
    {
      id: 3,
      title: 'Légal',
      links: [
        { id: 1, label: 'Conditions', href: '#' },
        { id: 2, label: 'Confidentialité', href: '#' },
        { id: 3, label: 'À Propos', href: '#' },
        { id: 4, label: 'Contact', href: '#' },
      ],
    },
  ];
}
