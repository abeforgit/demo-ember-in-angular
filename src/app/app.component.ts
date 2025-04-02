import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SayEditorComponent } from './say-editor/say-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SayEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
