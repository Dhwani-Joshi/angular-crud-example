import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from 'src/app/_models';
import { AlertService } from 'src/app/_services';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  alertSubscription : Subscription;
  routeSubscription: Subscription;
  constructor(private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }

}
