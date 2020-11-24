import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicstagramComponent } from './picstagram.component';

describe('PicstagramComponent', () => {
  let component: PicstagramComponent;
  let fixture: ComponentFixture<PicstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
