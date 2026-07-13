import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMessagePage } from './director-message-page';

describe('DirectorMessagePage', () => {
  let component: DirectorMessagePage;
  let fixture: ComponentFixture<DirectorMessagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorMessagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectorMessagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
