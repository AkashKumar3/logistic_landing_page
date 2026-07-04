import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFacts } from './our-facts';

describe('OurFacts', () => {
  let component: OurFacts;
  let fixture: ComponentFixture<OurFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFacts],
    }).compileComponents();

    fixture = TestBed.createComponent(OurFacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
