import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country, CountryList } from 'src/app/models/CountryList';
import { Common, CommonTypeList } from 'src/app/models/common';
import { OfferService } from 'src/app/services/offer.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    private services: OthersService,
    private offerService: OfferService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  modes: Common[];
  movementTypes: Common[];
  incoterms: Common[];
  countries: Country[];
  packageTypes: Common[];
  unit1s: Common[];
  unit2s: Common[];
  currencies: Common[];

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      modeId: ['', [Validators.required]],
      movementTypeId: ['', Validators.required],
      incotermId: ['', Validators.required],
      cityId: ['', Validators.required],
      packageTypeId: ['', Validators.required],
      unit1Id: ['', Validators.required],
      unit2Id: ['', Validators.required],
      currencyId: ['', Validators.required],
      unit1Value: ['', Validators.required],
      unit2Value: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.getDatas();
  }

  getDatas() {
    this.services.getModes().subscribe((res) => (this.modes = res.data));
    this.services
      .getMovementTypes()
      .subscribe((res) => (this.movementTypes = res.data));
    this.services
      .getIncoterms()
      .subscribe((res) => (this.incoterms = res.data));
    this.services
      .getCountries()
      .subscribe((res) => (this.countries = res.data));
    this.services
      .getPackageTypes()
      .subscribe((res) => (this.packageTypes = res.data));
    this.services.getUnit1s().subscribe((res) => (this.unit1s = res.data));
    this.services.getUnit2s().subscribe((res) => (this.unit2s = res.data));
    this.services
      .getCurrencys()
      .subscribe((res) => (this.currencies = res.data));
  }

  add() {
    if (this.addForm.valid) {
      let values = Object.assign({}, this.addForm.value);
      this.offerService.addOffer(values).subscribe((res) => {
        if (res.success) {
          this.toastr.success('Başarılı!');
          this.router.navigate(['/']);
        } else {
          this.toastr.error(res.message);
        }
      });
      console.log(values);
    }
  }

  goOfferList() {
    this.router.navigate(['/']);
  }
}
