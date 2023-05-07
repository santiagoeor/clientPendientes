import { Component } from '@angular/core';
import { Pendientes } from '../../interfaces/pendientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PendientesService } from '../../services/pendientes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-eliminar-pendiente',
  templateUrl: './eliminar-pendiente.component.html',
  styleUrls: ['./eliminar-pendiente.component.css']
})
export class EliminarPendienteComponent {

  loading:boolean = false;
  pendient!: Pendientes;
  mensaje: boolean = false;

  public mensajecontent!: string;

  constructor(
    private activateRoute:ActivatedRoute,
    private pendienteService:PendientesService,
    private router: Router
  ){}

  ngOnInit():void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.pendienteService.getPendientesPorId(id))
      )
      .subscribe((pendient) => {
        this.pendient = pendient;
      });
  }

  deletePendiente(){
    this.loading = true;
    this.pendienteService.delete(this.pendient.pend).subscribe({
      next: (response) => {
      // console.log(response);
      this.loading = false;
      this.router.navigate(['/pendientes']);
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
