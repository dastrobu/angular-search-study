import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AppSearchTemplateDirective} from './app-search-template.directive';

@Component({
    selector: 'app-search',
    templateUrl: './app-search.component.html',
    styleUrls: ['./app-search.component.scss'],
})
export class AppSearchComponent<RowType> implements OnInit {
    public get text(): string {
        return this._text;
    }

    @Input()
    public set text(value: string) {
        this._text = value;
        this.textChange.emit(this._text);
    }

    private _text: string;

    @Output()
    public textChange = new EventEmitter<string>();

    @ContentChild(AppSearchTemplateDirective, {read: TemplateRef})
    template: TemplateRef<any>;

    @Input()
    public resultsProvider: Observable<RowType[]>;

    public results: RowType[];

    constructor() {
    }

    ngOnInit() {
        this.resultsProvider.subscribe((results) => {
            this.results = results;
        });
    }

}

