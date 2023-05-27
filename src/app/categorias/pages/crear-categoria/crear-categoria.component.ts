import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  loading: boolean = false;
  mensaje: boolean = false;

  public mensajecontent!: string;
  public dataSinConexion: [] = [];

  public myForm: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriasService,
  ) { }

  ngOnInit() {
    fromEvent(window, 'offline').pipe(
      debounceTime(100)).subscribe((event: Event) => {
        console.log(event);
      });

    fromEvent(window, 'online').pipe(
      debounceTime(100)).subscribe((event: Event) => {
        
        let categorias = [];
        const categoriasGuardadas = localStorage.getItem("categorias");
        if (categoriasGuardadas) {
          categorias = JSON.parse(categoriasGuardadas);
        }


        categorias.forEach((categoria: any) => {
          this.loading = true;
          this.categoriaService.save(categoria).subscribe({
            next: (response) => {
              console.log("Categoría guardada:", categoria);
              this.loading = false;
              this.mensaje = true;
              this.mensajecontent = 'Datos actualizados en el servidor';
              localStorage.removeItem("categorias");
            },
            error: (err) => {
              console.log(err);
              this.loading = false;
              this.mensaje = true;
              this.mensajecontent = 'Su sesion a expirado o no tienes conexion a internet';

            }
          })
        });
        

      });
  }



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
        this.mensajecontent = 'Se ha guardado de manera local';
        this.dataSinConexion = this.myForm.value;
        
        let categorias = [];
        const categoriasGuardadas = localStorage.getItem("categorias");
        if (categoriasGuardadas) {
          categorias = JSON.parse(categoriasGuardadas);
        }
        // let categorias = this.categoriaLocal.getCategorias();
        categorias.push(this.dataSinConexion);
        localStorage.setItem("categorias", JSON.stringify(categorias));

      }
    })
  }


}
