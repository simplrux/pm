import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatchMetaData, TeamDetails } from 'src/app/shared/models/match';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';
import { loadTeamData, submitForm } from '../../store/dashboard.actions';
import { selectMatchData } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {


  form: FormGroup;
  constructor(private ms: MatchPageDataService, private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group(
      {
        rivalName: [''],
        rivalLogoImage: [''],
        score: this.fb.group({
          myTeam: [''],
          rival: ['']
        }),
        matchLocation: ['']
      }, { validator: Validators.required }
    );
  }

  ngOnInit(): void {
  }

  handleFile(event) {
    // just sending the file's name instead of blob/Base64
    (this.form.controls.rivalLogoImage as FormControl).setValue(event.target.files[0].name);
  }

  submit() {
    this.store.dispatch(submitForm({ data: this.form.value }));
    this.ms.submitMatch();
  }

}
