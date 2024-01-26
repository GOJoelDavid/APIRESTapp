// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.

import { Component } from '@angular/core';
import { PokeapiService } from '../Service/apiservice.service';

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
id:number = 1;
  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: PokeapiService) {}

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {
    try {
      let pokemon;  // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(pokemon);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}