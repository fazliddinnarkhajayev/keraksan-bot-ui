import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModules } from 'src/app/shared/modules/nz-modules.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PromoCodesService } from './services/promo-codes.service';
import { PromoCodeModel } from './models/promo-code.model';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ResponseContent } from 'src/app/shared/models/res-content.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module';
import { PromoCodeFormComponent } from './components/bot-users-form/promo-code-form.component';

@Component({
  selector: 'app-promo-codes',
  standalone: true,
  imports: [CommonModule, NzModules, TranslateModule, FormsModule, IconsProviderModule],
  providers: [NzModalService],
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('showHideFilter', [
      state('show', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('hide', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('show <=> hide', animate('300ms ease-in-out'))
    ])
  ]
})
export class PromoCodesComponent implements OnInit {

  confirmModal?: NzModalRef;
  data: PromoCodeModel[];
  loader: boolean = false;
  isFilterVisible: boolean = false
  filter = {id: '',loadingLocation: '',deliveryLocation: '',statusId: ''};
  showForm: boolean = false;
  pageParams = {
    pageIndex: 0,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };

  constructor(
    private toastr: NotificationService,
    private modal: NzModalService,
    private adminsService: PromoCodesService,
    private drawer: NzDrawerService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    // this.loader = true;
    this.adminsService.getAll(this.pageParams).subscribe((res: ResponseContent<PromoCodeModel[]>) => {
      if (res && res.success) {
        this.data = res.data.content;
        this.loader = false;
      } else {
        this.loader = false;
      }
    }, err => {
      this.loader = false;
    })
  }
  add(): void {
    const drawerRef: any = this.drawer.create({
      nzTitle: this.translate.instant('add_admins'),
      nzContent: PromoCodeFormComponent,
      nzPlacement: 'right',
    });
    drawerRef.afterClose.subscribe(() => {
      this.getAll();
      drawerRef.componentInstance?.form.reset();
    });
  }
  update(item: PromoCodeModel) {
    const drawerRef: any = this.drawer.create({
      nzTitle: this.translate.instant('edit_admins'),
      nzContent: PromoCodeFormComponent,
      nzPlacement: 'right',
      nzContentParams: { promoCode: item }
    });
    drawerRef.afterClose.subscribe(() => {
      this.getAll();
      drawerRef.componentInstance?.form.reset();
    });
  }
  remove(id: number | string) {
    this.confirmModal = this.modal.confirm({
      nzTitle: this.translate.instant('are_you_sure'),
      nzContent: this.translate.instant('delete_sure'),
      nzOkText: this.translate.instant('remove'),
      nzCancelText: this.translate.instant('cancel'),
      nzOkDanger: true,
      nzOnOk: () =>
        this.adminsService.delete(id).subscribe((res: ResponseContent<PromoCodeModel[]>) => {
          if (res && res.success) {
            this.toastr.success(this.translate.instant('successfullDeleted'),'');
            this.getAll();
          }
        }),
    });
  }
  toggleFilter(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }
  onPageIndexChange(pageIndex: number): void {
    this.pageParams.pageIndex = pageIndex;
    this.getAll();
  }
  onPageSizeChange(pageSize: number): void {
    this.pageParams.pageSize = pageSize;
    this.pageParams.pageIndex = 0;
    this.getAll();
  }

}
