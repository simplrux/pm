import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FieldEffects } from './store/field.effects';
import { TeamComponent } from './components/team/team.component';
import { FieldComponent } from './field.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [TeamComponent, FieldComponent, PlayerComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FieldEffects])
  ],
  exports: [FieldComponent]
})
export class FieldModule { }
