import { Component } from '@angular/core';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
    selector: 'app-input',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {
    list = [
        {
            title: 'getTheTitle',
            text: 'mock text',
        },
        {
            title: 'title 2',
            text: 'fake text',
        },
    ];

    createValueInput(title: string, text: string) {
        const newItem = {
            title,
            text,
        };
        this.list.push(newItem);
    }

    onScrollDown(event: IInfiniteScrollEvent) {
        console.log('scrolled down!!', event);
    }
}
