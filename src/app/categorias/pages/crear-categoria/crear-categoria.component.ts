import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

  loading: boolean = false;
  mensaje: boolean = false;
  mensajecontent: string = '';

  public myForm: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriasService
  ) { }

  save() {
    if (this.myForm.invalid) this.myForm.markAllAsTouched();

    this.loading = true;
    this.categoriaService.save(this.myForm.value).subscribe(response => {
      console.log(response);
      this.loading = false;
      this.mensaje = true;
      this.mensajecontent = response.ok;
    })
  }


}
