import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComparisionComponent } from './photo-comparision.component';

describe('PhotoComparisionComponent', () => {
  let component: PhotoComparisionComponent;
  let fixture: ComponentFixture<PhotoComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComparisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
