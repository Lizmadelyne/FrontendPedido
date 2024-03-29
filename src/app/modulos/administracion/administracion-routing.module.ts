import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './personaas/crear-persona/crear-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';

const routes: Routes = [
  {
    path:'crear-persona',
    component: CrearPersonaComponent
  },
  {
    path:'editar-persona',
    component: EditarPersonaComponent
  },
  {
    path:'eliminar-persona',
    component: EliminarPersonaComponent
  },
  {
    path:'buscar-persona',
    component: BuscarPersonaComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
