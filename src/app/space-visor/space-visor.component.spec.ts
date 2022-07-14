import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceVisorComponent } from './space-visor.component';

describe('SpaceVisorComponent', () => {
  let component: SpaceVisorComponent;
  let fixture: ComponentFixture<SpaceVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
