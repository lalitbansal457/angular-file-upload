import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../../service/constants.service'

@Component({
    templateUrl: 'createClient.component.html',
    providers: [ConstantsService]
})

export class CreateClientComponent implements OnInit {
    clientObj: any = {};
    loading = false;
    returnUrl: string;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

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
        console.log(this.clientObj)
        this.loading = true;
        this.http.post('http://sample.dinkarkumar.com/login', this.clientObj).map(res => {
            console.log(res)
        }).subscribe(res => {
            console.log(res);
        })
    }
}

