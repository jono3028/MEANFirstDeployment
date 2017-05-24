import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWallComponent } from './home-wall.component';

describe('HomeWallComponent', () => {
  let component: HomeWallComponent;
  let fixture: ComponentFixture<HomeWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
