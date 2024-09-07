import { Injectable } from '@angular/core';
import { ISchedule ,schedule } from './schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  schedule : ISchedule[] = schedule;

  constructor() { }

  getAll(){
    return this.schedule;
  }

  getOne(scheduleId : string){
    return this.schedule.find(day => day.dateScheduled == scheduleId)
  }
}
