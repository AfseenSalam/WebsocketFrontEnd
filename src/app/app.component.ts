import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoinRoomComponent } from './components/join-room/join-room.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JoinRoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Websocket';
}
