import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/categorias/services/categorias.service';
import { PendientesService } from '../../services/pendientes.service';
import { Categoria } from 'src/app/categorias/interfaces/categoria.interface';

@Component({
  selector: 'app-crear-pendiente',
  templateUrl: './crear-pendiente.component.html',
  styleUrls: ['./crear-pendiente.component.css']
})
export class CrearPendienteComponent {
  loading: boolean = false;
  mensaje: boolean = false;
  mensajecontent: string = '';
  categorias: Categoria[] = [];

  public myForm: FormGroup = this.fb.group({
    pendiente: ['', [Validators.required]],
    categoria_id: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private pendientesService: PendientesService,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(): void {

    this.categoriaService.categorias().subscribe(response => {
      this.categorias = response;
    })

  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {

      this.loading = true;
      this.pendientesService.save(this.myForm.value).subscribe({
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
}
