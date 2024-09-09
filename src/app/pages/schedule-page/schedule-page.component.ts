import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from "../../components/default-home-page/default-home-page.component";
import { ISchedule } from '../../models/schedule';
import { ScheduleService } from '../../services/schedule.service';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, CommonModule],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css'
})
export class SchedulePageComponent implements OnInit{

  public schedules : ISchedule [] = [];

  constructor(
    private scheduleService : ScheduleService
  ){}

  ngOnInit(): void {
    this.schedules = this.scheduleService.getAll();
  }
}
