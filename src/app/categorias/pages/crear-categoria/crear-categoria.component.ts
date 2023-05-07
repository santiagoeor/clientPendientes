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

  public mensajecontent!: string;

  public myForm: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriasService,
  ) { }

  

  

    save() {
    if (this.myForm.invalid) this.myForm.markAllAsTouched();
    this.loading = true;
    this.categoriaService.save(this.myForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = response.ok;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = 'Su sesion a expirado o no tienes conexion a internet';
      }
    })
  }


}
