import { afterNextRender, afterRender, Component, ElementRef } from '@angular/core';
import { App } from 'embeddable-test-vite'
// import 'embeddable-test-vite/style.css'

@Component({
  selector: 'app-say-editor',
  imports: [],
  templateUrl: './say-editor.component.html',
  styleUrl: './say-editor.component.css'
})
export class SayEditorComponent {


  constructor(elementRef: ElementRef) {
    afterNextRender({
      write: () => {
        App.create(
          { name: 'embeddable-test-vite', autoboot: false }
        ).visit('/', { rootElement: "#container", location: "none" })

      },
    });
  }

}
