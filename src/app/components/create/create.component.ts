import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdbSuccessDirective } from 'angular-bootstrap-md';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers : [ ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
 public title : string;
 public project: Project;
 public save_project;
 public validatingForm: FormGroup; 
 public status: string;
 public filesToUpload : Array<File>;

 get test() { return this.validatingForm.get('test'); 
  
}

get text_descripcion() { return this.validatingForm.get('text_descripcion'); 
  }

get category_required() { return this.validatingForm.get('category_required'); 
}

/*get lanzamiento_required() { return this.validatingForm.get('required'); 
}*/

get langs_required() { return this.validatingForm.get('langs_required')

}


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService

  ) { 

    this.title = "Crear Proyecto";
    this.project = new Project ('','','','',2020,'','');
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      test: new FormControl(null, Validators.required),
      text_descripcion: new FormControl(null, Validators.required),
      category_required: new FormControl(null, Validators.required),
      lanzamiento_required: new FormControl(null, Validators.required),
      langs_required: new FormControl(null, Validators.required)
    } ,  { updateOn: 'submit' }
    
    );
  }

  onSubmit(form) {
    console.log( this.project);
   

    this.validatingForm.controls.test.markAsTouched();
    this.validatingForm.controls.text_descripcion.markAsTouched();
    this.validatingForm.controls.category_required.markAsTouched();
    this.validatingForm.controls.langs_required.markAsTouched();


    this.project.name = this.validatingForm.get('test').value;
    this.project.description = this.validatingForm.get('text_descripcion').value;
    this.project.category  = this.validatingForm.get('category_required').value;
    this.project.year = this.validatingForm.get('lanzamiento_required').value

    console.log( this.project );

     //Guardar los datos
     this._projectService.saveProject(this.project).subscribe(
			response => {
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_project = result.project;
							this.status = 'aprobado';
              this.validatingForm.reset();
							
						});
					}else{
						this.save_project = response.project;
						this.status = 'aprobado';
           
						
					}
					
				}else{
					this.status = 'fallo';
				}
			},
			error => {
				console.log(<any>error);
			}
		);

  }
  fileChangeEvent(fileInput:any){

    this.filesToUpload = <Array<File>>fileInput.target.files;
  
  }
}
