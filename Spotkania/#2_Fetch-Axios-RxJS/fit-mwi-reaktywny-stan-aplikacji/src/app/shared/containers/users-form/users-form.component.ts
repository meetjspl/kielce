import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersForm } from '@store/users-form/users-form.model';
import { UsersFormService } from '@store/users-form/users-form.service';
import { UsersService } from '@store/users/users.service';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'fit-users-form',
  templateUrl: './users-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersFormComponent implements OnInit, OnDestroy {
  @ViewChild(NgForm) usersNgForm: NgForm;
  usersForm$: Observable<UsersForm>;

  constructor(private usersFormService: UsersFormService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersForm$ = this.usersFormService.getUsersForm();
    this.usersNgForm.valueChanges.pipe(debounceTime(0)).subscribe((usersForm: UsersForm) => this.usersFormService.setUsersForm(usersForm));
  }

  ngOnDestroy(): void {
    this.usersFormService.clearUsersForm();
  }

  onSubmit(): void {
    this.usersService.loadUsers(this.usersNgForm.value);
  }
}
