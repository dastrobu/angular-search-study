import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import * as _ from 'lodash';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public results = new BehaviorSubject<string[]>([]);

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        if (!value) {
            this._text = '';
        }
        this._text = value;
        const results = this._text.split('');
        console.log('results' + JSON.stringify(results));
        this.results.next(results);

    }

    private _text = 'foo';

    ngOnInit(): void {
    }

}
