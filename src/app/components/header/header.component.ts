import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../../service/constants.service'

@Component({
	selector: 'header',
    templateUrl: 'header.component.html',
    providers: [ConstantsService]
})

export class HeaderComponent implements OnInit {
    loginObj: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        
        private router: Router,
        private constantsService: ConstantsService,
        private http: HttpClient
        ) { }

    ngOnInit() {
        // reset login status
        // get return url from route parameters or default to '/'
       
    }

    login() {
        this.loading = true;
        this.http.post('http://sample.dinkarkumar.com/login', this.loginObj).map(res => {
            console.log(res)
        }).subscribe(res => {
            console.log(res);
        })
    }
}

