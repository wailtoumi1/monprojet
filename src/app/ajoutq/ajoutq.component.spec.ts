import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutqComponent } from './ajoutq.component';

describe('AjoutqComponent', () => {
  let component: AjoutqComponent;
  let fixture: ComponentFixture<AjoutqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
