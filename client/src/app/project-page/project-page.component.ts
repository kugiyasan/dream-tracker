import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  events1: any[] = [];
  color : string = '#607D8B';
  icon : string = PrimeIcons.CHECK;

  ngOnInit() {
      this.events1 = [
          { title: 'R', date: '15/10/2020 10:30', image: 'game-controller.jpg', content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem.' },	
          { title: 'U', date: '15/10/2020 14:00', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem.' },
          { title: 'N', date: '15/10/2020 16:15',  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem.' },
          { title: 'E', date: '16/10/2020 10:00', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices nisl nunc eget lorem. Donec ultrices, nisl eget ultricies ultrices, nisl nunc tincidunt elit, eu ultrices .' }
      ];

  }

}
