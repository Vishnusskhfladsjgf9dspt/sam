import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemComponent } from './dem.component';

describe('DemComponent', () => {
  let component: DemComponent;
  let fixture: ComponentFixture<DemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemComponent]
    });
    fixture = TestBed.createComponent(DemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
