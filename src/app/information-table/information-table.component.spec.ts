import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTableComponent } from './information-table.component';

describe('InformationTableComponent', () => {
  let component: InformationTableComponent;
  let fixture: ComponentFixture<InformationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
