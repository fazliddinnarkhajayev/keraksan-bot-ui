import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotUsersService } from '../bot-users/services/bot-users.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lastRegisteredUser: any = {};
  usersCountsByStatus: any = [];
  usersCountsByArea: any = [];
  totalUsers = 0;

  constructor(
    private botUsersService: BotUsersService
  ) { }

    ngOnInit(): void {
      this.getBotUsersCountByStatus();
      this.getLastRegisteredUser();
      this.getBotUsersCountByArea();
    }

    getBotUsersCountByStatus() { 
      this.botUsersService.getUsersCountByStatus().subscribe((res: any) => {
        if (res && res.success) {
          this.usersCountsByStatus = res.data.filter((el: any) => el.status != 'all');
          this.totalUsers = res.data.find((el: any) => el.status == 'all')?.count || 0;
        } 
      })
    }

    getBotUsersCountByArea() { 
      this.botUsersService.getUsersCountByArea().subscribe((res: any) => {
        if (res && res.success) {
          this.usersCountsByArea = res.data;
        } 
      })
    }

    getLastRegisteredUser() {
      this.botUsersService.getLastRegisteredUser().subscribe((res: any) => {
        if (res && res.success) {
          this.lastRegisteredUser = res.data;
        } 
      })
    }
}
