import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RoleModel } from 'src/app/shared/models/role.model';
import { Response } from 'src/app/shared/models/reponse';
import { NzModules } from 'src/app/shared/modules/nz-modules.module';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NgxMaskDirective } from 'ngx-mask';
import { PromoCodesService } from '../../services/promo-codes.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PromoCodeModel } from '../../models/promo-code.model';
import { BotUsersService } from 'src/app/pages/bot-users/services/bot-users.service';
import { BotUserModel } from 'src/app/pages/bot-users/models/bot-users.model';
// import { RolesService } from 'src/app/shared/services/references/role.service';

@Component({
  selector: 'app-promo-code-form',
  templateUrl: './promo-code-form.component.html',
  styleUrls: ['./promo-code-form.component.scss'],
  imports: [NzModules, TranslateModule, ReactiveFormsModule, NgIf, CommonModule, NgxMaskDirective],
  standalone: true,
})
export class PromoCodeFormComponent implements OnInit {
  @Input() promoCode?: PromoCodeModel;
  @Output() close = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<void>();

  visible: boolean = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    groupName: new FormControl('', [Validators.required]),
    userId: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required])
  });
  botUsers: any[] = [];

  constructor(
    private toastr: NotificationService,
    // private roleService: RolesService,
    private drawerRef: NzDrawerRef,
    private adminService: PromoCodesService,
    private translate: TranslateService,
    private botUsersService: BotUsersService
    ) { }

  ngOnInit(): void {
    this.getBotUsers();
    this.patchForm();
  }

  patchForm() {
    if (this.promoCode) {
      this.form.patchValue({
        id: this.promoCode.id,
        groupName: this.promoCode.groupName,
        code: this.promoCode.code,
        score: this.promoCode.score,
        userId: this.promoCode.userId,
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
  getBotUsers() {
    this.botUsersService.getAllDir().subscribe((res: any) => {
      if (res && res.success) {
        this.botUsers = res.data;
      }
    });
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
    if (this.promoCode) {
      this.adminService.update(this.form.value, this.promoCode.id).subscribe((res: any) => {
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
