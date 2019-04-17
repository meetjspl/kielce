import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '@store/user/user.model';
import { UserService } from '@store/user/user.service';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'fit-user-modal',
  templateUrl: './user-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserModalComponent implements OnInit, OnDestroy {
  @Input() id?: number;
  @ViewChild(NgForm) usersNgForm: NgForm;
  user$: Observable<User>;

  constructor(private ngbActiveModal: NgbActiveModal, private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.userService.isSaveSuccess().subscribe(() => this.ngbActiveModal.close());

    if (this.id) {
      this.userService.loadUser(this.id);
    }

    this.usersNgForm.valueChanges.pipe(debounceTime(0)).subscribe((users: User) => this.userService.setUser(users));
  }

  ngOnDestroy(): void {
    this.userService.clearUser();
  }

  onSubmit(): void {
    this.userService.saveUser({ id: this.id, ...this.usersNgForm.value });
  }

  onCancelClick() {
    this.ngbActiveModal.dismiss();
  }
}
