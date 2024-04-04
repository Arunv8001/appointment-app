import { Component, OnInit } from '@angular/core';
import { Appointment } from '../modals/appoitment';

@Component({
  selector: 'app-appoitment-list',
  templateUrl: './appoitment-list.component.html',
  styleUrls: ['./appoitment-list.component.css']
})
export class AppoitmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }
  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
