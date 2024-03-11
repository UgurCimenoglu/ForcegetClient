import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OfferData } from 'src/app/models/offterList';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private offerService: OfferService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'mode',
    'movementType',
    'incoterm',
    'country',
    'city',
    'packageType',
    'unit1',
    'unit1Value',
    'unit2',
    'unit2Value',
    'price',
    'currency',
  ];

  dataSource: MatTableDataSource<OfferData> = new MatTableDataSource<OfferData>(
    []
  );

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(
      (response) => {
        if (response.success) {
          this.dataSource = new MatTableDataSource<OfferData>(response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addData() {
    this.router.navigate(['/addOffer']);
  }
}
