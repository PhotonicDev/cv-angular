import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    timeline = [
        {
            headline: 'Sabienzia Technologies',
            time: 'October 2018 - Ongoing',
            description:
                // tslint:disable-next-line: max-line-length
                'Working as a Frontend developer building a real-time monitoring system for call center businesses. ',
            tags: ['Electron', 'Angular', 'NGXS', 'PWA'],
        },
        {
            headline: 'ImageHuset',
            time: 'January 2017 - May 2019',
            description:
                // tslint:disable-next-line: max-line-length
                'Working as a Freelance developer under a contract. Development of websites for companies, prototyping and development of mobile applications. Later and latest is a PWA for an automated contracting system for companies.',
            tags: [
                'Ionic',
                'Angular',
                'Umbraco',
                'Javascript',
                'Typescript',
                'Firebase',
                'PWA',
            ],
        },
        {
            headline: 'Skovsgaard Grafisk',
            time: 'January 2017 - February 2018',
            description:
                // tslint:disable-next-line: max-line-length
                'Worked as Freelance developer under a contract for maintenance and further development of an older Umbraco system. Developing ticketing and registration systems for live events for Wordpress based websites',
            tags: ['Wordpress', 'Umbraco', 'PHP', '.Net'],
        },
    ]
}
