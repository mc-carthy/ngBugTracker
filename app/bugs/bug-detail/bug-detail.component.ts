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
    @Input() currentBug= new Bug(null, null, 1, 1, null, null, null, null, null);

    constructor(
        private formBuilder: FormBuilder,
        private bugService: BugService
    ) { }

    ngOnInit()
    {
        this.configureForm();
    }

    configureForm(bug?: Bug)
    {
        if (bug)
        {
            this.currentBug = bug;
        }

        this.bugForm = this.formBuilder.group({
            title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(/password/i)]],
            status: [this.currentBug.status, Validators.required],
            severity: [this.currentBug.severity, Validators.required],
            description: [this.currentBug.description, Validators.required],
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
        this.cleanBug();
    }

    cleanBug()
    {
        this.currentBug = new Bug(null, null, 1, 1, null, null, null, null, null);
    }

}