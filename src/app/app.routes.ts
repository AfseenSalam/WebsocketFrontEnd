import { Routes } from '@angular/router';
import { JoinRoomComponent } from './components/join-room/join-room.component';
import { ChatComponent } from './components/chat/chat.component';


export const routes: Routes = [
    {path:"join-room",component:JoinRoomComponent},
    {path:"chat",component:ChatComponent},
    {path:"",redirectTo:"/join-room",pathMatch:"full"},
];
