import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from "../default-home-page/default-home-page.component";
import { ISchedule } from './schedule';
import { ScheduleService } from './schedule.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor],
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
