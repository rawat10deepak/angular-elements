import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularProject';

  showMessage(): void {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world></app-hello-world>'; // trying to load the component dynamically

    /* Angular will not consider dynamically added component.
    ng cannot recognize the app tag since it is inserted into the template dynamically.
    ng needs all the elements to be present in the template
    or you need to use the dynamic component factory to instantiate the component at runtime through code
    !!window.customElements  ---> indicate if web component is supported in browser
    */
  }
}
