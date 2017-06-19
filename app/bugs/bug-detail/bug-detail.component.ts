import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { forbiddenStringValidator } from './../../shared/validation/forbidden-string.validator';

import { Bug } from './../models/bug';

import { BugService } from './../services/bug.service';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    providers: [ BugService ],
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})

export class BugDetailComponent implements OnInit {

    private modalId = "bug-modal";
    private bugForm: FormGroup;
    @Input() currentBug= new Bug(null, null, null, null, null, null, null, null, null);

    constructor(
        private formBuilder: FormBuilder,
        private bugService: BugService
    ) { }

    ngOnInit()
    {
        this.configureForm();
    }

    configureForm()
    {
        // this.bugForm = new FormGroup({
        //     title: new FormControl(null, [ Validators.required, forbiddenStringValidator(/password/i) ]),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });

        this.bugForm = this.formBuilder.group({
            title: [null, [Validators.required, forbiddenStringValidator(/password/i)]],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required],
        });
    }

    submitForm()
    {
        console.log(this.bugForm); // TODO - Remove
        this.addBug();
    }

    addBug()
    {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        this.bugService.addBug(this.currentBug);
        this.clearForm();
    }

    clearForm()
    {
        this.bugForm.reset({
            status: 1,
            severity: 1
        });
    }

}