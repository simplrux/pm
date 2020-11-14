import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './components/match/match.component';
import { FormationComponent } from './components/formation/formation.component';
import { BenchComponent } from './components/bench/bench.component';
import { DragScrollModule } from 'ngx-drag-scroll';



@NgModule({
  declarations: [MatchComponent, FormationComponent, BenchComponent],
  imports: [
    CommonModule,
    DragScrollModule
  ],
  exports: [MatchComponent, FormationComponent, BenchComponent]
})
export class DashboardModule { }
