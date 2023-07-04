import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InstructionComponent } from './instruction/instruction.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "instruction", component: InstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
