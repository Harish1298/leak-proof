import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'LeakProofSolutions| LPS';
  }

}
