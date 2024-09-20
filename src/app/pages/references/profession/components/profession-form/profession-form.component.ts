import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Response } from 'src/app/shared/models/reponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProfessionService } from 'src/app/shared/services/references/profession.service';
import { ProfessionModel } from '../../models/profession.model';
import { CommonModules } from 'src/app/shared/modules/common.module';
import { NzModules } from 'src/app/shared/modules/nz-modules.module';

@Component({
  selector: 'app-profession-form',
  templateUrl: './profession-form.component.html',
  styleUrls: ['./profession-form.component.scss'],
  standalone: true,
  imports: [NzModules, TranslateModule, CommonModules],
})
export class ProfessionFormComponent implements OnInit {
  @Input() data?: any;
  @Output() close = new EventEmitter<void>();
  showForm: boolean = false;
  loading: boolean = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: NotificationService,
    private drawerRef: NzDrawerRef,
    private professionService: ProfessionService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.patchForm();
    console.log(this.data)
  }
  patchForm() {
    if (this.data) {
      this.form.patchValue({
        id: this.data.id,
        name: this.data.name
      });
    }

  }
  onCancel(): void {
    this.drawerRef.close({ success: false });
    this.form.reset();
  }
  onSubmit() {
    this.loading = true;
    const submitObservable = this.data
      ? this.professionService.update(this.form.value, this.data.id)
      : this.professionService.create(this.form.value);

    submitObservable.subscribe((res: Response<ProfessionModel[]>) => {
      if (res && res.success) {
        this.loading = false;
        const messageKey = this.data ? 'successfullUpdated' : 'successfullCreated';
        this.toastr.success(this.translate.instant(messageKey), '');
        this.drawerRef.close({ success: true });
        this.form.reset();
      }
    },(error: any) => {
      this.loading = false;
    });
  }

}
