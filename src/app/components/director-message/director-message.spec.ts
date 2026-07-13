import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMessage } from './director-message';

describe('DirectorMessage', () => {
  let component: DirectorMessage;
  let fixture: ComponentFixture<DirectorMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectorMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
