import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PendientesService } from '../../services/pendientes.service';
import { CategoriasService } from 'src/app/categorias/services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pendientes } from '../../interfaces/pendientes.interface';
import { Categoria } from 'src/app/categorias/interfaces/categoria.interface';

@Component({
  selector: 'app-editar-pendiente',
  templateUrl: './editar-pendiente.component.html',
  styleUrls: ['./editar-pendiente.component.css']
})
export class EditarPendienteComponent {

  loading: boolean = false;
  mensaje: boolean = false;
  mensajecontent: string = '';
  pendient!: Pendientes;
  categorias: Categoria[] = [];
  categ_id!: number;
  categ_nombre!: string;

  public myForm: FormGroup = this.fb.group({
    pendiente: ['', [Validators.required]],
    categoria_id: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private pendientesService: PendientesService,
    private categoriaService: CategoriasService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.pendientesService.getPendientesPorId(id))
      )
      .subscribe((pendient) => {
        this.pendient = pendient;
        this.myForm.controls['pendiente'].setValue(pendient.pendiente);
        this.categ_id = pendient.categoria.catg;
        this.categ_nombre = pendient.categoria.categoria;
        this.myForm.controls['fecha'].setValue(pendient.fecha);
        this.myForm.controls['hora'].setValue(pendient.hora);
      });

    this.categoriaService.categorias().subscribe(response => {
      this.categorias = response;
    })
  }

  update() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {
      this.loading = true;
      this.pendientesService.update(this.pendient.pend, this.myForm.value).subscribe(response => {
        // console.log(response);
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = response.ok;
        this.router.navigate(['./pendientes']);
      })

    }
  }

}
