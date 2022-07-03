import {ComponentFixture, TestBed} from '@angular/core/testing';

import { AddTaskModalComponent } from './add-task-modal.component';
import {DataService} from "../data.service";
import {NgbActiveModal, NgbModal, NgbModalRef, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";



describe('AddTaskModalComponent', () => {
  let component: AddTaskModalComponent;
  let fixture: ComponentFixture<AddTaskModalComponent>;
  let dataService: DataService;
  let modalService: NgbModal;
  let modalRef: NgbModalRef;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskModalComponent ],
      imports: [
        NgbModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        DataService,
        NgbActiveModal,
        NgbModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.inject(DataService);
    modalService = TestBed.inject(NgbModal);
    modalRef = modalService.open(AddTaskModalComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be empty', () => {
    expect(component.title).toEqual('');
  });

  it('should open modal', () => {
    spyOn(modalService, 'open').and.returnValue(modalRef);
    dataService.openAddModal();
    expect(modalService.open).toHaveBeenCalledWith(AddTaskModalComponent, {size: 'lg'});
  });


});
