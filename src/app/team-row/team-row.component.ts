import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-team-row',
	templateUrl: './team-row.component.html',
	styleUrls: ['./team-row.component.css']
})
export class TeamRowComponent implements OnInit {
	@Input() name: string;
	@Input() role: string;
	@Input() bio: string;
	@Input() img: string;
	constructor() { }

	ngOnInit() {
	}

}
