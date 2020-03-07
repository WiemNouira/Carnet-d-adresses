import { Component } from '@angular/core';
import { SearchPipe } from './search.pipe'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tableau: any;
    filterTab: any;
    searchText: string;
    filterTableau() {
        const pipe = new SearchPipe();
        this.filterTab = pipe.transform(this.tableau, this.searchText);
    }
    title = 'Test';
    personnes =
        [
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            }, {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "Sue Shei",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "sue.shei@example.com",
                phone: "0123456789"

            },
            {
                name: "JOHN DOE",
                email: "NOUIRA@example.com",
                phone: "0123456789"

            }

        ]

    alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    constructor() {
        this.tableau = this.personnes;
        this.filterTab = this.personnes;

    }
}
