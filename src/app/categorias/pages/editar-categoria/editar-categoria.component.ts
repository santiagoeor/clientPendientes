import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  loading:boolean = false;
  mensaje:boolean = false;
  mensajecontent: string = '';
  categori!: Categoria;

  public myForm: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]]
  });

  constructor(
    private activateRoute: ActivatedRoute,
    private categoriaService:CategoriasService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit():void{
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.categoriaService.getCategoriaPorId(id))
    )
    .subscribe((categor) => {
      this.categori = categor;
      this.myForm.controls['categoria'].setValue(categor.categoria);
    })
  }

  update(){
    if(this.myForm.invalid) this.myForm.markAllAsTouched();
    this.loading = true;
    this.categoriaService.update(this.categori.catg, this.myForm.value).subscribe(response => {
      this.loading = false;
      this.mensaje = true;
      this.mensajecontent = response.ok;
      this.router.navigate(['./categorias']);
    })
  }

}
