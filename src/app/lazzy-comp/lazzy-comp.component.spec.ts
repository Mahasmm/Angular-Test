import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzyCompComponent } from './lazzy-comp.component';

describe('LazzyCompComponent', () => {
  let component: LazzyCompComponent;
  let fixture: ComponentFixture<LazzyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazzyCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazzyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
