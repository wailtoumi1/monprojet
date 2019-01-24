import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreqComponent } from './ordreq.component';

describe('OrdreqComponent', () => {
  let component: OrdreqComponent;
  let fixture: ComponentFixture<OrdreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
