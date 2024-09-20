import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RoleModel } from 'src/app/shared/models/role.model';
import { Response } from 'src/app/shared/models/reponse';
import { NzModules } from 'src/app/shared/modules/nz-modules.module';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NgxMaskDirective } from 'ngx-mask';
import { BotUsersService } from '../../services/bot-users.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BotUserModel } from '../../models/bot-users.model';
// import { RolesService } from 'src/app/shared/services/references/role.service';

@Component({
  selector: 'app-bot-users-form',
  templateUrl: './bot-users-form.component.html',
  styleUrls: ['./bot-users-form.component.scss'],
  imports: [NzModules, TranslateModule, ReactiveFormsModule, NgIf, CommonModule, NgxMaskDirective],
  standalone: true,
})
export class BotUserFormComponent implements OnInit {
  @Input() botUser?: BotUserModel;
  @Output() close = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<void>();

  visible: boolean = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^[a-zA-Z0-9]+$')]),
    phoneNumber: new FormControl('+998', [Validators.required]),
  });

  constructor(
    private toastr: NotificationService,
    // private roleService: RolesService,
    private drawerRef: NzDrawerRef,
    private adminService: BotUsersService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getRoles();
    this.patchForm();
  }

  patchForm() {
    if (this.botUser) {
      this.form.patchValue({
        id: this.botUser.id,
        fullName: this.botUser.fullName,
        username: this.botUser.username,
        phoneNumber: this.botUser.phoneNumber,
      });
      this.form.get('password')?.clearValidators();
      this.form.get('password')?.updateValueAndValidity();
    } else {
      this.form.get('password')?.setValidators([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]);
      this.form.get('password')?.updateValueAndValidity();
    }

  }
  getRoles() {
    // this.roleService.getAll().subscribe((res: Response<RoleModel[]>) => {
    //   if (res && res.success) {
    //     this.roles = res.data;
    //   }
    // });
  }
  generatePassword() {
    this.form.patchValue({
      password: Math.random().toString(36).slice(-8)
    });
  }
  onCancel(): void {
    this.drawerRef.close({ success: false });
    this.form.reset();
  }
  onSubmit() {
    if (this.botUser) {
      this.adminService.update(this.form.value, this.botUser.id).subscribe((res: any) => {
        if (res && res.success) {
          this.toastr.success(this.translate.instant('successfullUpdated'), '');
          this.drawerRef.close({ success: true });
          this.form.reset();
        }
      });
    } else {
      this.adminService.create(this.form.value).subscribe((res: any) => {
        if (res && res.success) {
          this.toastr.success(this.translate.instant('successfullCreated'), '');
          this.drawerRef.close({ success: true });
          this.form.reset();
        }
      });
    }
  }

}
