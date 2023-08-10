import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
export const form = new FormBuilder().group({
  name: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  ],
  hp: [
    '',
    Validators.compose([
      Validators.required,
      Validators.min(1),
      Validators.max(500)
    ])
  ],
  attack: [
    '',
    Validators.compose([
      Validators.required,
      Validators.min(1),
      Validators.max(500)
    ])
  ],
  defense: [
    '',
    Validators.compose([
      Validators.required,
      Validators.min(1),
      Validators.max(500)
    ])
  ],
  speed: [
    '',
    Validators.compose([
      Validators.required,
      Validators.min(1),
      Validators.max(500)
    ])
  ],
  isLegendary: [
    false
  ],
  type_1: [
    '',
  ],
  type_2: [
    '',
  ],
  image: [
    '',
    Validators.compose([
      Validators.required
    ]),
  ],

});
